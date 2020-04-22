import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Login from "./components/Login";
import Home from "./pages/Home";
import { Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import authAction from "./redux/auth/actions";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const { logout } = authAction;
const StartPage = ({ isLoggedIn, logout }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            RisingStar Projects
          </Typography>
          {isLoggedIn === false ? (
            <>
              <Link to="/home/login">
                <Button color="inherit">Login</Button>
              </Link>
              <Button color="inherit">SignUp</Button>
            </>
          ) : (
            <>
              <Link to="/dashboard">
                <Button color="inherit">Dashboard</Button>
              </Link>
              <Link to="/">
                <Button color="inherit" onClick={() => logout()}>
                  Logout
                </Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/home/login" component={Login}></Route>
        <Route path="/home" component={Home}></Route>
      </Switch>
    </div>
  );
};

export default connect(
  (state) => ({
    isLoggedIn: state.Auth.isLoggedIn,
    isFailed: state.Auth.isFailed,
  }),
  { logout }
)(StartPage);
