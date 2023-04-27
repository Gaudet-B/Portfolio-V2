import React, { useState } from 'react'
import { Mutation, useMutation } from 'react-query/src'

import styles from '../../styles/form.style.module.css'
// import axios from 'axios'

type Form = {
  name: string
  email: string
  message: string
  reason: string
}

const Form = (props: { windowWidth: number }) => {
  // windowWidth passed down from parent
  const { windowWidth } = props

  // initialize empty form
  const [formState, setFormState] = useState<Form>({
    name: '',
    email: '',
    message: '',
    reason: 'Just saying "hello."',
  })
  // input validation
  const [validState, setValidState] = useState({})

  //
  const submitForm = () => {
    fetch('http://localhost:8000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState),
    }).then((res) => {
      if (res.ok) {
        return res.json()
      }
      throw new Error('Network response was not ok.')
    })
  }

  //
  const mutation = useMutation((data: Form) => {
    return fetch('http://localhost:8000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    // onSuccess: () => {
    //   setFormState({
    //     name: "",
    //     email: "",
    //     message: "",
    //     reason: 'Just saying "hello."'
    //   })
    //   const formToReset = document.getElementById("contactForm") as HTMLFormElement
    //   formToReset.reset()
    //   alert("message sent.")
    // },
    // onError: (err: any) => {
    //   const { errors }: any = err.response.data
    //   let errObj: {
    //     [key: string]: string
    //   } = {}
    //   for (const key of Object.keys(errors)) {
    //     errObj[key] = errors[key].message
    //   }
    //   setValidState(errObj)
    //   alert("unable to send message.")
    // },
  })
  // }

  // handler for form inputs
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  // submit handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    mutation.mutate(formState)

    // post("http://localhost:8000/api/contact", formState)
    //     .then(res => {
    //         setFormState({
    //             name: "",
    //             email: "",
    //             message: "",
    //             reason: 'Just saying "hello."'
    //         })
    //         document.getElementById("contactForm").reset()
    //         alert("message sent.")
    //     })
    //     .catch(err => {
    //         const {errors} = err.response.data
    //         let errObj = {}
    //         for (const [key, value] of Object.entries(errors)) {
    //             errObj[key] = value.message
    //         }
    //         setValidState(errObj)
    //         alert("unable to send message.")
    //     })
  }

  return (
    <div>
      {/* <div style={(windowWidth > 800) ? { padding: "2em 0" } : { padding: "3em 0" }}> */}
      <form
        id="contactForm"
        onSubmit={handleSubmit}
        className={styles.mainForm}
      >
        {/* NAME */}
        <div className={styles.formComponent}>
          <label htmlFor="name" className={styles.label}>
            your name
          </label>
          <input
            name="name"
            onChange={handleFormChange}
            className={styles.textInput}
            type="text"
          />
        </div>
        {/* { (validState.name) ? <p className="text-danger"> { validState.name } </p> : null } */}

        {/* EMAIL */}
        <div className={styles.formComponent}>
          <label htmlFor="email" className={styles.label}>
            your email
          </label>
          <input
            name="email"
            onChange={handleFormChange}
            className={styles.textInput}
            type="email"
          />
        </div>
        {/* { (validState.email) ? <p className="text-danger"> { validState.email } </p> : null } */}

        {/* MESSAGE */}
        <div className={styles.formComponent}>
          <label htmlFor="message" className={styles.label}>
            message
          </label>
          <textarea
            name="message"
            onChange={(e) => handleFormChange}
            className={styles.textInput}
            rows={12}
          />
        </div>
        {/* { (validState.message) ? <p className="text-danger"> { validState.message } </p> : null } */}

        {/* REASON */}
        <div className={styles.formComponent}>
          <label htmlFor="reason" className={styles.label}>
            reason for request
          </label>
          <select
            name="reason"
            onChange={(e) => handleFormChange}
            className={styles.textInput}
          >
            <option className={styles.option} value='Just saying "hello."'>
              Just saying "hello."
            </option>
            <option className={styles.option} value="Business inquiry.">
              Business inquiry.
            </option>
            <option className={styles.option} value="Employment opportunity.">
              Employment opportunity.
            </option>
            <option className={styles.option} value="Looking to network.">
              Looking to network.
            </option>
            <option className={styles.option} value="Technical question.">
              Technical question.
            </option>
          </select>
        </div>
        <div className={styles.buttonContainer}>
          <button id="button" className={styles.formButton} type="submit">
            send
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
