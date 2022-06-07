import React from 'react'

function SignUp({formData, setFormData}) {

  return (
    <div>
        <h1>title</h1>
        <input
        type="text"
        placeholder="Email..."
        value={formData.title}
        onChange={(event) => setFormData({...formData, title: event.target.value})}
        />
        <br />
        <br />
    </div>
  )
}

export default SignUp
