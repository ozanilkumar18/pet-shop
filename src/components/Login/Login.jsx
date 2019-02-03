import React, { Fragment } from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Required } from "../../helpers/validationHelpers";
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

export const Login = props => {
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
              Login
            </Typography>
            <Field
              name="User Name"
              component={Input}
              type="text"
              placeholder="User Name"
              validate={[Required]}
            />
            <Field
              name="Password"
              component={Input}
              type="text"
              placeholder="Password"
              validate={[Required]}
            />
            <Button text="Login" type="submit" submitting={submitting} pristine={pristine} />
          </Grid>
        </Card>
      </Grid>
    </Fragment>
  );
};

export default withStyles(styles)(Login);
