import {Form} from '@/components/form'
import type {Component, Notification} from '@/'
import type {FormInput} from '@/components/form'

const successNotification: Notification = {
	message: 'Your submission was recieved successfuly.',
	type: 'success'
}

const schema: FormInput[] = [
	{
		type: 'text',
		label: 'Your Name',
		name: 'name',
		placeholder: 'Your name..',
		validator: val => {
			return val === ''
		}
	},
	{
		type: 'text',
		label: 'Your Email',
		name: 'email',
		placeholder: 'Your email address..',
		validator: val => {
			return val === '' || !val.includes('@') || !val.includes('.')
		}
	},
	{
		type: 'text',
		label: 'Your Subject',
		name: 'subject',
		placeholder: 'Your subject..',
		validator: val => {
			return val === ''
		}
	},
	{
		type: 'textarea',
		label: 'Your Message',
		name: 'message',
		placeholder: 'Your message..',
		validator: val => {
			return val === ''
		}
	}
]

export const ContactForm: Component<{}> = () => {
	return (
		<Form
			schema={schema}
			action={'/api/mail'}
			successNotification={successNotification}
			name="submission"
			method="POST"
		/>
	)
}
