import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Button } from '@material-ui/core'
import MuiText from '../../components/formcontrollers/MuiText'
import app from '../../config/fire'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logIn } from '../../actions/authActions'

const LoginForm = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleToRegister = () => {
    history.push('/register')
  }

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
        .then(auth => {
          let {email, uid} = auth.user
          console.log("userinfo: ", email, uid)
          dispatch(logIn({uid, email}))
          history.push('/')
        })
        .catch((err) => {
          const errCode = err.code
          const errMessage = err.errMessage
          if (errCode === 'auth/wrong-password') {
            alert("Username or password invalid")
          } else {
            alert(errMessage)
          }
        })
    } catch (error) {
      console.error(error)
    }
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