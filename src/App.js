import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Route, Switch, Link } from "react-router-dom";
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

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            RisingStar Projects
          </Typography>
          <Link to="/login">
            <Button color="inherit">Login</Button>
          </Link>
          <Button color="inherit">SignUp</Button>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </div>
  );
}
