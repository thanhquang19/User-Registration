import React from 'react'


export default function Login() {
  return (
    <form>
      <label for="username"> User Name</label>
      <input id='username' type="text"></input>
      <br/>
      <label for="password">Password</label>
      <input id='password' type="password"></input>
      <br/>

      <button> Sign-in</button>
      <div> nw user? Register here</div>
    </form>

  )
}
