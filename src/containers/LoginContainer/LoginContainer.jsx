import React, { Component } from "react";
import { Login } from "../../components/Login";
import { reduxForm } from "redux-form";

export class LoginContainer extends Component {
  submitLogin = () => {
    
    console.log("handleSubmit");
  };

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(this.submitLogin)}>
        <Login
          submitting={submitting}
          pristine={pristine}
        />
      </form>
    );
  }
}

export default reduxForm({
  form: "loginform"
})(LoginContainer);
