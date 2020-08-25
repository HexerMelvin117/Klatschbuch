import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Button } from '@material-ui/core'
import MuiText from '../../components/formcontrollers/MuiText'

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

const handleSubmit = () => {
  console.log("sup dude")
}

const LoginForm = () => {
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
              <MuiText name="password" label="Password" required={true} variant="outlined" />
              <br></br>
              <Button
                variant="contained"
                color="primary"
                type="submit"
              >
                Log in
              </Button>
            </Form>
          )
        }
      }
    </Formik>
  )
}

export default LoginForm