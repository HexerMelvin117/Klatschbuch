import { FILL_POSTS, CREATE_POST, DELETE_POST } from '../actions/constants'

const initialState = {
  posts: []
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILL_POSTS:
      const posts = action.payload
      return { ...state, posts }
    case CREATE_POST:
      const post = action.payload
      let currentPosts = state.posts
      currentPosts.push(post)
      return { ...state, posts: currentPosts}
    case DELETE_POST:
      const deletionPost = action.payload
      let arrayToFilter = state.posts
      arrayToFilter.filter(post => post.id !== deletionPost.id)
      return { ...state, posts: arrayToFilter }
    default:
      return state
  }
}
 