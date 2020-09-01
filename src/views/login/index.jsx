import React from 'react'
import LoginForm from './LoginForm'
import { Grid, Typography, Paper } from '@material-ui/core'
import './Login.css'

const LoginView = () => {
  return (
   <div>
      <Grid
				container 
				direction="column" 
				alignItems="center" justify="center" 
				spacing={0} 
				style={{ minHeight: "50vh" }}
			>
				<Grid item className="mainlogin" md={4} style={{margin: 60}}>
					<Paper style={{padding: 50}} elevation={5}>
						<Typography variant="h5">Login</Typography>
						<br />
						<LoginForm />
					</Paper>	
				</Grid>
			</Grid>
    </div>
  )
}

export default LoginView