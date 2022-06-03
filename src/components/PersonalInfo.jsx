import React from 'react'

function PersonalInfo({formData, setFormData}) {
  return (
    <div>
        <h1>Name</h1>
        <input type="text" placeholder='Name'
        value={formData.name}
        onChange={(event) => setFormData({...formData, name: event.target.value})}
        />
    
        <br /><br />
    </div>
  )
}

export default PersonalInfo