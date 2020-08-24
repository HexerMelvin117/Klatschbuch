import { LOG_IN, LOG_OUT } from './constants'

export const logIn = (payload) => {
	return ({
		type: LOG_IN,
		payload
	})
}

export const logOut = () => {
	return ({
		type: LOG_OUT
	})
}