import {useState, useContext, useRef} from 'react'
import {NotificationsContext, QueueAction} from '@/contexts'
import {Button, Icon} from '@/components'
import {FormComponent as Input} from './Form.component'
import {StyledForm} from '.'

export const FormContainer: App.FormContainer = function ({
	action,
	method = 'GET',
	name = 'form',
	schema,
	successNotification = {
		message: 'Thank you. The form submitted successfuly.',
		type: 'success'
	},
	errorNotification = {
		message: 'Sorry. An error occured. Try again later.',
		type: 'danger'
	},
	button = {
		label: 'Submit',
		color: 'primary',
		size: 'sm'
	}
}) {
	const {dispatch} = useContext(NotificationsContext)!
	const form = useRef<HTMLFormElement | null>(null)

	const [attempted, setAttempted] = useState<boolean>(false)
	const [loading, setLoading] = useState<boolean>(false)
	const [success, setSuccess] = useState<boolean>(false)
	const [state, setState] = useState(() => {
		const obj = {}

		schema.forEach(input => {
			obj[input.name] = true
		})
		return obj
	})

	const notify = (notification: App.NotificationsSchema<App.ContextualClassEnum>) =>
		dispatch(QueueAction(notification.message, notification.type))

	const handle = (name: string, status: boolean) => {
		setState({
			...state,
			[name]: status
		})
	}

	const reset = () => {
		setSuccess(false)
		setAttempted(false)
		form.current!.reset()
		const obj = {}
		schema.forEach(input => {
			obj[input.name] = true
		})
		setState(obj)
	}

	const submit = () => {
		const data = new FormData(form.current!)
		data.append('timestamp', `${Date.now()}`)
		fetch(action, {
			method: method,
			body: JSON.stringify(Object.fromEntries(data))
		}).then(response => {
			setLoading(false)
			setSuccess(true)
			if (response.ok) notify(successNotification)
			else notify(errorNotification)
			setTimeout(() => reset(), 1000)
		})
	}

	const validate = (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
		event.preventDefault()
		setAttempted(true)
		setLoading(true)
		if (Object.values(state).includes(true)) setTimeout(() => setLoading(false), 1000)
		else submit()
	}

	return (
		<StyledForm
			id={`form-${name}`}
			name={name}
			ref={form}
			onSubmit={validate}
			method={method}
			noValidate>
			{schema.map(input => (
				<Input
					key={input.name}
					state={state[input.name]}
					attempted={attempted}
					handle={handle}
					schema={input}
				/>
			))}
			<Button className="submission" handle={() => validate} {...button}>
				<Icon type={success ? 'success' : loading ? 'spinner' : 'envelope'} size={button.size} />
				{button.label}
			</Button>
		</StyledForm>
	)
}
