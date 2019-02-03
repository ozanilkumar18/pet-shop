import React from "react";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

export const ButtonB = props => {
  const { classes, text, submitting, pristine, type } = props;
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      fullWidth={false}
      className={classes.button}
      type={type}
      disabled={submitting || pristine}
    >
      {text}
    </Button>
  );
};

export default withStyles(styles)(ButtonB);
