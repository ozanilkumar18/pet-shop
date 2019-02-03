import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

export const Input = props => {
  const {
    classes,
    name,
    placeholder,
    input,
    meta: { touched, error,warning }
  } = props;
  return (
    <Fragment>
      <TextField
        id="user-name"
        label={name}
        className={classes.textField}
        placeholder={placeholder}
        margin="normal"
        variant="outlined"
        {...input}
      />
      {touched &&
        ((error && <span style={{color: 'red', textAlign: 'left', paddingLeft: '10px'}}>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </Fragment>
  );
};

export default withStyles(styles)(Input);
