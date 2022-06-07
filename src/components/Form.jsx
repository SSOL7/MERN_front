import React, {useState } from 'react'
import SignUp from './SignUp';
import PersonalInfo from './PersonalInfo';
import OtherInfo from './OtherInfo';
import Summary from './Summary';
import Endpoint from './endpoint';

function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        title: '',
        subject: '',
        body: ''
    });
    const [message, setMessage] = useState('');

    const emailValidation = (email) => {
        const re_gex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re_gex.test(email)) {
            setMessage('Valid email');
        } else if(!re_gex.test(email) && email != '') {
            setMessage('Invalid email');
        } else {
            setMessage('');
        }
    }



    const FormTitles = ["Sign Up", "Personal Info", "Other Info", "Summary"];

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
            case 3:
                return <Summary formData={formData} setFormData={setFormData} />
            default:
                return <SignUp />
        }
    }


  return (
    <div>
        <h1>Form component</h1>
        <div>{page_display()}</div>
        {/* <h1>{FormTitles[page]}</h1> */}
        <button onClick={() => emailValidation()} >check</button>
        <p>{message}</p>
        <button
        disabled={page === 0}
        onClick={() => {
            setPage((current_page) => current_page - 1); }}>Previous</button>
        <button
        onClick={() => { 
            if(page === FormTitles.length - 1) {
                console.log(formData);
                const todo_object = {
                    title: formData.title,
                    subject: formData.subject,
                    body: formData.body
                  };
                Endpoint.create(todo_object).then(response => {
                    console.log(response.data);
                    });
                } else {
                    setPage((current_page) => current_page + 1);
                }
        }}>
            {page == FormTitles.length - 1 ? "Submit" : "Next"  || emailValidation()}
        </button>

    </div>
  )
}

export default Form