import React, { Component, Fragment } from "react";
import { Login } from "../../components/Login";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { compose } from "recompose";
import { reduxForm } from "redux-form";
import { Progress } from "../../components/Progress";

export class LoginContainer extends Component {
  submitLogin = () => {
    const { loginUser } = this.props;
    loginUser();
  };

  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
      isLoading,
      isLogin
    } = this.props;
    return (
      <Fragment>
        <form onSubmit={handleSubmit(this.submitLogin)}>
          <Login submitting={submitting} pristine={pristine} />
        </form>
        {isLoading && <Progress />}
        {isLogin && <Redirect to="/home" />}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.loginReducer.isLoading,
  isLogin: state.loginReducer.isLogin
});

const mapDispatchToProps = dispatch => ({
  loginUser: () => dispatch({ type: "LOGIN", payload: "test" })
});

const enhancedComponent = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({
    form: "loginform"
  })
)(LoginContainer);

export default enhancedComponent;
