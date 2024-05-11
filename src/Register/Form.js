import React, { useState } from 'react'


function doSignUp(userInfo) {
  // Go to the server || dispatch an action
}

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateForm(values) {
  const errors = {}
  if (!values.firstName) errors.firstName = "First name is required" // pretty standard error messages. cuz im too lazy to think
  if (!values.lastName) errors.lastName = "Last name is required"
  if (!values.email) errors.email = "Email address is required"
  else if (!validateEmail(values.email)) errors.email = "Not a valid email address"
  if (!values.password) errors.password = "Password is required"
  else if (!values.repeatPassword) errors.repeatPassword = "Please repeat the password"
  else if (!values.password != values.repeatPassword) errors.repeatPassword = "Passwords don't match"

  return errors
}

export default function Form() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [errors, setErrors] = useState({})


  function handleSignUp() {
    const errors = validateForm({ firstName, lastName, email, password, repeatPassword })
    setErrors(errors)
    if (!Object.keys(errors).length) {
      doSignUp({ firstName, lastName, email, password })
    }
  }

  return (
    <div className="sign-up">
      <input onChange={e => setFirstName(e.target.value)} value={firstName} />
      {errors.firstName && <p>{errors.firstName}</p>}
      <input onChange={e => setLastName(e.target.value)} value={lastName} />
      {errors.lastName && <p>{errors.lastName}</p>}
      <input onChange={e => setEmail(e.target.value)} value={email} />
      {errors.email && <p>{errors.email}</p>}
      <input type="password" onChange={e => setPassword(e.target.value)} value={password} />
      {errors.password && <p>{errors.password}</p>}
      <input type="password" onChange={e => setRepeatPassword(e.target.value)} value={repeatPassword} />
      {errors.repeatPassword && <p>{errors.repeatPassword}</p>}

      <button onClick={handleSignUp}>Sign me up! </button>
    </div>
  )
}