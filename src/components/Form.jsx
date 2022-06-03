import React, {useState } from 'react'
import SignUp from './SignUp';
import PersonalInfo from './PersonalInfo';
import OtherInfo from './OtherInfo';

function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        nationality: ''
    });

    const FormTitles = ["Sign Up", "Personal Info", "Other Info"];

    const page_display = () => {
    //     if(page === 0) {
    //         return <SignUp />
    //  } else if(page === 1) {
    //           return <PersonalInfo />
    //  } else {
    //           return <OtherInfo />
    //  }
        switch(page) {
            case 0:
                return <SignUp formData={formData} setFormData={setFormData} />
            case 1:
                return <PersonalInfo formData={formData} setFormData={setFormData} />
            case 2:
                return <OtherInfo formData={formData} setFormData={setFormData} />
            default:
                return <SignUp />
        }
    }


  return (
    <div>
        <h1>Form component</h1>
        <div>{page_display()}</div>
        {/* <h1>{FormTitles[page]}</h1> */}
        <button
        disabled={page === 0}
        onClick={() => {
            setPage((current_page) => current_page - 1); }}>Previous</button>
        <button
        // disabled={page == FormTitles.length - 1}
        onClick={() => { 
            if(page === FormTitles.length - 1) {
                console.log(formData);
            } else {
                setPage((current_page) => current_page + 1);
            }
        }}>
            {page == FormTitles.length - 1 ? "Submit" : "Next"}
        </button>

    </div>
  )
}

export default Form