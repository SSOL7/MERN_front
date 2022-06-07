import React from 'react'

function PersonalInfo({formData, setFormData}) {
  return (
    <div>
        <h1>subject</h1>
        <input type="text" placeholder='Name'
        value={formData.subject}
        onChange={(event) => setFormData({...formData, subject: event.target.value})}
        />
    
        <br /><br />
    </div>
  )
}

export default PersonalInfo