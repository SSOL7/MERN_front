import React from 'react'

function Summary({formData}) {
  return (
    <div>
        <h1>Summary</h1>
        <p>Email: {formData.title}</p>
        <p>Name: {formData.subject}</p>
        <p>Nationality: {formData.body}</p>
    </div>
  )
}

export default Summary