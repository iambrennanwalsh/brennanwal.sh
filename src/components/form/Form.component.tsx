// Form (client/src/components/form/Form.jsx)

import React from 'react'

export const FormComponent: App.FormComponent = function ({handle, state, attempted, schema}) {
	const preHandle = (event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
		const result = schema.validator ? schema.validator(event.target.value) : false
		handle(schema.name, result)
	}

	return (
		<div className="field">
			{schema.label && (
				<label htmlFor={`input__${schema.type}__${schema.name}`}>{schema.label}</label>
			)}
			{schema.type == 'text' && (
				<input
					className={`input ${state && attempted ? 'invalid' : ''}`}
					onChange={preHandle}
					id={`input__text__${schema.name}`}
					name={schema.name}
					placeholder={schema.placeholder ?? ''}
					type="text"
				/>
			)}
			{schema.type == 'textarea' && (
				<textarea
					className={`input ${state && attempted ? 'invalid' : ''}`}
					onChange={preHandle}
					id={`input__textarea__${schema.name}`}
					name={schema.name}
					placeholder={schema.placeholder}></textarea>
			)}
		</div>
	)
}
