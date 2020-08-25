import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  Button
} from '@material-ui/core'
import { Link } from 'react-router-dom'

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

const WebNavbar = () => {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Klatschbuch
          </Typography>
          <Link to="/" style={{textDecoration:'none', color:'inherit'}}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/login" style={{textDecoration:'none', color:'inherit'}}>
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default WebNavbar