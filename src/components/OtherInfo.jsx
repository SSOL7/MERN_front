import React from 'react'

function OtherInfo({formData, setFormData}) {
  return (
    <div>
        <h1>body</h1>
        <input type="text" placeholder='Nationality'
        value={formData.body}
        onChange={(event) => setFormData({...formData, body: event.target.value})}
        />
        <br />
        <br />
    </div>
  )
}

export default OtherInfo