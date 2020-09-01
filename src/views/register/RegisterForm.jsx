import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import app from '../../config/fire'
import MuiText from '../../components/formcontrollers/MuiText'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const initialValues = {
  email: "",
  password: "",
  phone: "",
  firstName: "",
  lastName: ""
}

const registerSchema = Yup.object().shape({
  email: Yup.string()
    .required("required"),
  password: Yup.string()
    .required("required"),
  phone: Yup.string()
    .required("required"),
  firstName: Yup.string()
    .required("required"),
  lastName: Yup.string()
    .required("required"),
})

const RegisterForm = () => {
  const [registerBtnDisable, setRegisterBtnDisable] = React.useState(false)
  const history = useHistory()

  const handleSubmit = (values) => {
    try {
      const { email, password, phone, firstName, lastName } = values
      setRegisterBtnDisable(true)
      app
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(userInfo => {
          app
            .firestore()
            .doc(`/users/${userInfo.user.uid}`)
            .set({firstName, lastName, phone})
          setRegisterBtnDisable(false)
          history.push('/login')
        })
        .catch(error => {
          setRegisterBtnDisable(false)
          alert(error)
        })
    } catch (error) {
      alert(error)
    }
  }

  const handleBackToLogin = () => {
    history.push('/login')
  }

  return (
    <Formik
      initialValues={initialValues}
      schema={registerSchema}
      onSubmit={handleSubmit}
    >
      {() => {
          return (
            <Form>
              <MuiText name="email" label="Email" required={true} variant="outlined" />
              <br></br>
              <MuiText name="password" label="Password" type="password" required={true} variant="outlined" />
              <br></br>
              <MuiText name="phone" label="Phone" required={true} variant="outlined" />
              <br></br>
              <MuiText name="firstName" label="FirstName" required={true} variant="outlined" />
              <br></br>
              <MuiText name="lastName" label="LastName" required={true} variant="outlined" />
              <br></br>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={registerBtnDisable}
              >
                Register
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleBackToLogin}
              >
                Return to Login
              </Button>
            </Form>
          )
        }
      }
    </Formik>
  )
}

export default RegisterForm