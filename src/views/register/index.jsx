import React from 'react'
import RegisterForm from './RegisterForm'
import { Grid, Typography, Paper } from '@material-ui/core'
import "./Register.css"

const RegisterView = () => {
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
						<Typography variant="h5">Register</Typography>
						<br />
						<RegisterForm />
					</Paper>	
				</Grid>
			</Grid>
    </div>
  )
}

export default RegisterView