import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { compose } from "recompose";
import { Register } from "../../components/Register";
import { Progress } from "../../components/Progress";

export class RegisterContainer extends Component {
  submitRegister = () => {
    const { registerUser } = this.props;
    console.log("handleSubmit");
    registerUser();
  };

  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
      isLoading,
      isRegister
    } = this.props;
    return (
      <form onSubmit={handleSubmit(this.submitRegister)}>
        <Register submitting={submitting} pristine={pristine} />
        {isLoading && <Progress />}
        {isRegister && <Redirect to="/login" />}
      </form>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.registerReducer.isLoading,
  isRegister: state.registerReducer.isRegister
});

const mapDispatchToProps = dispatch => ({
  registerUser: () => dispatch({ type: "REGISTER", payload: "test" })
});

const enhancedComponent = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({
    form: "register"
  })
)(RegisterContainer);

export default enhancedComponent;
