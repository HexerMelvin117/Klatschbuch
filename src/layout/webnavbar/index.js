import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Badge,
  IconButton,
  Menu,
  MenuItem
} from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import app from '../../config/fire'
import { logOut } from '../../actions/authActions'

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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    app.auth().signOut()
    dispatch(logOut())
    handleClose()
  }

  const user = useSelector((state) => state.authReducer)
  const dispatch = useDispatch()

  const classes = useStyles();

  return(
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "#37474f"}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Klatschbuch
          </Typography>
          <Link to="/" style={{textDecoration:'none', color:'inherit'}}>
            <Button color="inherit">Home</Button>
          </Link>
          { user.uid ? 
            <IconButton color="inherit" onClick={handleClick}>
              <Badge color="secondary">
                <AccountCircleIcon />
              </Badge>
            </IconButton> :
            <Link to="/login" style={{textDecoration:'none', color:'inherit'}}>
              <Button color="inherit">Login</Button>
            </Link>
          } 
        </Toolbar>

        {/* User menu */}
        <Menu
          id="auth-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleLogout}>Log out</MenuItem>
        </Menu>
      </AppBar>
    </div>
  )
}

export default WebNavbar