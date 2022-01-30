import type {Component, Notification, Props} from '@/'
import {Icon} from '@/components'
import {useNotificationsContext} from '@/hooks'
import {ChangeEvent, useRef, useState} from 'react'
import {StyledForm, StyledFormButton, StyledFormField, StyledFormInput} from '.'

interface InputOwnProps {
  state: boolean
  attempted: boolean
  handle: (name: string, status: boolean) => void
  schema: FormInput
}

type InputProps = Props<typeof StyledFormField, InputOwnProps>

export const Input: Component<InputProps> = ({
  handle,
  state,
  attempted,
  schema,
}) => {
  const preHandle = (
    event: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => {
    const result = schema.validator
      ? schema.validator(event.target.value)
      : false
    handle(schema.name, result)
  }

  return (
    <StyledFormField>
      {schema.label && (
        <label htmlFor={`input__${schema.type}__${schema.name}`}>
          {schema.label}
        </label>
      )}
      {schema.type == 'text' && (
        <StyledFormInput
          invalid={state && attempted ? true : false}
          onChange={preHandle}
          id={`input__text__${schema.name}`}
          name={schema.name}
          placeholder={schema.placeholder ?? ''}
          type="text"
        />
      )}
      {schema.type == 'textarea' && (
        <StyledFormInput
          as="textarea"
          invalid={state && attempted ? true : false}
          onChange={preHandle}
          id={`input__textarea__${schema.name}`}
          name={schema.name}
          placeholder={schema.placeholder}
        ></StyledFormInput>
      )}
    </StyledFormField>
  )
}

type FormInputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'
  | 'textarea'

export interface FormInput {
  type: FormInputType
  name: string
  label?: string
  placeholder?: string
  validator?: (val: string) => boolean
}

type FormMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

interface FormOwnProps {
  action: string
  method?: FormMethod
  name?: string
  schema: FormInput[]
  successNotification?: Notification
  errorNotification?: Notification
  buttonLabel?: string
}

export type FormProps = Props<typeof StyledForm, FormOwnProps>

export const Form: Component<FormProps> = ({
  action,
  method = 'GET',
  name = 'form',
  schema,
  successNotification = {
    message: 'Thank you. Your submission was recieved.',
    type: 'success',
  },
  errorNotification = {
    message: 'Oops. Something went wrong. Try again later.',
    type: 'danger',
  },
  buttonLabel = 'submit',
}) => {
  const form = useRef<HTMLFormElement | null>(null)

  const [attempted, setAttempted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [validation, setValidation] = useState(() => {
    const obj = {}
    schema.forEach(input => {
      obj[input.name] = true
    })
    return obj
  })

  const {notifications, setNotifications} = useNotificationsContext()
  const notify = (notification: Notification): void =>
    setNotifications([...notifications, notification])

  const handle = (name: string, status: boolean): void => {
    setValidation({
      ...validation,
      [name]: status,
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
    setValidation(obj)
  }

  const submit = () => {
    const data = new FormData(form.current!)
    data.append('timestamp', `${Date.now()}`)
    fetch(action, {
      method: method,
      body: JSON.stringify(Object.fromEntries(data)),
    }).then(response => {
      setLoading(false)
      setSuccess(true)
      if (response.ok) notify(successNotification)
      else notify(errorNotification)
      setTimeout(() => reset(), 1000)
    })
  }

  const validate = (
    event: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    event.preventDefault()
    setAttempted(true)
    setLoading(true)
    if (Object.values(validation).includes(true))
      setTimeout(() => setLoading(false), 1000)
    else submit()
  }

  return (
    <StyledForm
      as="form"
      name={name}
      ref={form}
      onSubmit={validate}
      method={method}
      noValidate
    >
      {schema.map(input => (
        <Input
          key={input.name}
          state={validation[input.name]}
          attempted={attempted}
          handle={handle}
          schema={input}
        />
      ))}
      <StyledFormButton
        handle={() => validate}
        bg="primary"
        color="whiteText"
        size="sm"
      >
        <Icon
          icon={success ? 'success' : loading ? 'spinner' : 'envelope'}
          size="sm"
        />
        {buttonLabel}
      </StyledFormButton>
    </StyledForm>
  )
}
