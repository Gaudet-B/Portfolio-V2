import React, { useState } from 'react'
import { useMutation } from 'react-query/src'

import {
  StyledForm,
  StyledFormComponent,
  StyledLabel,
  StyledInput,
  StyledTextArea,
  StyledDropdown,
  StyledOption,
  StyledButtonContainer,
  StyledButton,
} from './styles'

type Form = {
  name: string
  email: string
  message: string
  reason: string
}

type FormErrors = {
  [key: string]: string
}

const Form = (props: { windowWidth: number }) => {
  // initialize empty form
  const [formState, setFormState] = useState<Form>({
    name: '',
    email: '',
    message: '',
    reason: 'Just saying "hello."',
  })
  // input validation
  const [validState, setValidState] = useState<FormErrors | undefined>()

  const mutation = useMutation(
    (data: Form) => {
      return fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
    },
    {
      onSuccess: (res: any) => {
        console.log(res)
        const formToReset = document.getElementById(
          'contactForm'
        ) as HTMLFormElement
        formToReset.reset()
        alert('message sent.')
      },
      onError: (err: any) => {
        const { errors }: any = err.response.data
        let errObj: {
          [key: string]: string
        } = {}
        for (const key of Object.keys(errors)) {
          errObj[key] = errors[key].message
        }
        setValidState(errObj)
        alert('unable to send message.')
      },
    }
  )

  // handler for form inputs
  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  // submit handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutation.mutate(formState)
  }

  return (
    <StyledForm id={'contactForm'} onSubmit={handleSubmit}>
      {/* NAME */}
      <StyledFormComponent>
        <StyledLabel htmlFor="name">your name</StyledLabel>
        <StyledInput name="name" onChange={handleFormChange} type="text" />
      </StyledFormComponent>
      {validState?.name ? (
        <p className="text-danger"> {validState.name} </p>
      ) : null}

      {/* EMAIL */}
      <StyledFormComponent>
        <StyledLabel htmlFor="email">your email</StyledLabel>
        <StyledInput name="email" onChange={handleFormChange} type="email" />
      </StyledFormComponent>
      {validState?.email ? (
        <p className="text-danger"> {validState.email} </p>
      ) : null}

      {/* MESSAGE */}
      <StyledFormComponent>
        <StyledLabel htmlFor="message">message</StyledLabel>
        <StyledTextArea name="message" onChange={handleFormChange} rows={12} />
      </StyledFormComponent>
      {validState?.message ? (
        <p className="text-danger"> {validState.message} </p>
      ) : null}

      {/* REASON */}
      <StyledFormComponent>
        <StyledLabel htmlFor="reason">reason for request</StyledLabel>
        <StyledDropdown name="reason" onChange={handleFormChange}>
          <StyledOption value='Just saying "hello."'>
            Just saying "hello."
          </StyledOption>
          <StyledOption value="Business inquiry.">
            Business inquiry.
          </StyledOption>
          <StyledOption value="Employment opportunity.">
            Employment opportunity.
          </StyledOption>
          <StyledOption value="Looking to network.">
            Looking to network.
          </StyledOption>
          <StyledOption value="Technical question.">
            Technical question.
          </StyledOption>
        </StyledDropdown>
      </StyledFormComponent>
      <StyledButtonContainer>
        <StyledButton id="button" type="submit">
          send
        </StyledButton>
      </StyledButtonContainer>
    </StyledForm>
  )
}

export default Form
