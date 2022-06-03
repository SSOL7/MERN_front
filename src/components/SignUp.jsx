import React from 'react'

function SignUp({formData, setFormData}) {
  return (
    <div>
        <h1>E-mail address</h1>
        <input
        type="text"
        placeholder="Email..."
        value={formData.email}
        onChange={(event) => setFormData({...formData, email: event.target.value})}
        />
        <br />
        <br />
    </div>
  )
}

export default SignUp
