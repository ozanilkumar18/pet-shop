import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import classNames from "classnames";
import { Input } from "../Input";
import { Button } from "../Button";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Required, Email } from "../../helpers/validationHelpers";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Field } from "redux-form";

const styles = {
  card: {
    maxWidth: 600
  },
  title: {
    fontSize: 36,
    fontWeight: "bold"
  },
  pos: {
    marginBottom: 12
  }
};

export const Register = props => {
  const { classes, submitting, pristine } = props;
  return (
    <Fragment>
      <Grid align="center">
        <Card className={classes.card} style={{ textAlign: "center" }}>
          <Grid container direction="column">
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              component="h2"
            >
              Registration
            </Typography>
            <Field
              name="firstName"
              component={Input}
              type="text"
              placeholder="First Name"
              validate={[Required]}
            />
            <Field
              name="lastName"
              component={Input}
              type="text"
              placeholder="Last Name"
              validate={[Required]}
            />
            <Field
              name="User Name"
              component={Input}
              type="text"
              placeholder="Select a user name"
              validate={[Required]}
            />
            <Field
              name="Password"
              component={Input}
              type="text"
              placeholder="Select a password"
              validate={[Required]}
            />
            <Field
              name="email"
              component={Input}
              type="text"
              placeholder="Email@gmail.com"
              validate={[Required, Email]}
            />
            <Button
              text="Register"
              type="submit"
              submitting={submitting}
              pristine={pristine}
            />
          </Grid>
        </Card>
      </Grid>
    </Fragment>
  );
};

export default withStyles(styles)(Register);
