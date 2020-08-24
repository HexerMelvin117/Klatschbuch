import { LOG_IN, LOG_OUT } from '../actions/constants'

const initialState = {
  userid: "",
  name: ""
}

export const authReducer = (state = initialState, action) =>  {
  const userInfo = action.payload

  switch (action.type) {
    case LOG_IN:
      return {...state, userid: userInfo.id, name: userInfo.name }
    case LOG_OUT:
      return {...state, userid: "", name: "" }
    default:
      return state
  }
}