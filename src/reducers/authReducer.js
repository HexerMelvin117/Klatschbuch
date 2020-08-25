import { LOG_IN, LOG_OUT } from '../actions/constants'

const initialState = {
  uid: "",
  email: ""
}

export const authReducer = (state = initialState, action) =>  {
  const userInfo = action.payload

  switch (action.type) {
    case LOG_IN:
      return {...state, uid: userInfo.uid, email: userInfo.email }
    case LOG_OUT:
      return {...state, uid: "", email: "" }
    default:
      return state
  }
}