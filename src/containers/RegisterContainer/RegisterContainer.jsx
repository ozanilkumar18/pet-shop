import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { Register } from "../../components/Register";

export class RegisterContainer extends Component {

  submitRegister = () => {
    console.log("handleSubmit");
  };


  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(this.submitRegister)}>
        <Register submitting={submitting} pristine={pristine} />
      </form>
    );
  }
}

export default reduxForm({
  form: "register"
})(RegisterContainer);
