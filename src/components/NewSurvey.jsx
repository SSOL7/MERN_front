// NEW SURVEY IS HOSTING SURVEY-FORM AND SURVEY-FORM-REVIEW
import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import Form from './Form';


class NewSurvey extends Component {
  render() {
    return (
      <div>
        <h1>New Survey Component</h1>
        <SurveyForm />
        <Form />
      </div>
    )
  }
}

export default NewSurvey;
