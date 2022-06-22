import { useState } from "react";

export default function LoginForm({ onLogin }) {
  const initialValues = {
    username: "",
    password: '',
  }
  const [values, setValues] = useState((initialValues))

  async function handleSubmit(e) {
    e.preventDefault();
    onLogin(e.target.username.value, e.target.password.value)
    setValues(initialValues)
  }

  function inputChangeHandler(e) {
    let { name, value } = e.target;
    setValues(({...values, [name]: value}))
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Log In</legend>
        <input name="username" placeholder="username" onChange={inputChangeHandler} />
        <input type='password' name="password" placeholder="password" onChange={inputChangeHandler} />
        <button type="submit">Sign In</button>
      </fieldset>
    </form>
  )
}