import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Button } from '@material-ui/core'
import MuiText from '../../components/formcontrollers/MuiText'
import app from '../../config/fire'
import { useHistory } from 'react-router-dom'

const initialValues = {
  username: "",
  password: ""
}

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .required("Required"),
  password: Yup.string()
    .required("Required")
})

const handleSubmit = (values) => {
  try {
    let { username, password } = values
    app
      .auth()
      .signInWithEmailAndPassword(username, password)
  } catch (error) {
    console.log(error)
  }
  
}

const LoginForm = () => {
  const history = useHistory()
  const handleToRegister = () => {
    history.push('/register')
  }
  
  return(
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      {() => {
          return (
            <Form>
              <MuiText name="username" label="Username" required={true} variant="outlined" />
              <br></br>
              <MuiText name="password" label="Password" type="password" required={true} variant="outlined" />
              <br></br>
              <Button
                variant="contained"
                color="primary"
                type="submit"
              >
                Log in
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleToRegister}
              >
                Register
              </Button>
            </Form>
          )
        }
      }
    </Formik>
  )
}

export default LoginForm