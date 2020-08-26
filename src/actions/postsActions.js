import { FILL_POSTS, CREATE_POST, DELETE_POST } from './constants'

export const fillPosts = (payload) => {
  return ({
    type: FILL_POSTS,
    payload
  })
}

export const createPost = (payload) => {
  return ({
    type: CREATE_POST,
    payload
  })
}

export const deletePost = (payload) => {
  return ({
    type: DELETE_POST,
    payload
  })
}