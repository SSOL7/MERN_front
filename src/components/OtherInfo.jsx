import React from 'react'

function OtherInfo({formData, setFormData}) {
  return (
    <div>
        <h1>Nationality</h1>
        <input type="text" placeholder='Nationality'
        value={formData.nationality}
        onChange={(event) => setFormData({...formData, nationality: event.target.value})}
        />
        <br />
        <br />
    </div>
  )
}

export default OtherInfo