import React from 'react'
import {
  Grid,
  TextField,
  Button
} from '@material-ui/core'
import { RecordVoiceOver } from '@material-ui/icons'
import app from '../../config/fire'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'

const PostCreationInput = () => {
  const dispatch = useDispatch()
  const loggedUser = useSelector(state => state.authReducer)

  // app.auth().currentUser.uid
  const createPost = async (uid) => {
    const thisMoment = moment().format()
    

    await app
      .firestore()
      .collection('posts')
      .set()
  }

  const HandleClick = () => {
    const currentUid = app.auth().currentUser.uid
    currentUid ? createPost(currentUid) : alert("Not logged in")
  }
  
  return (
    <div>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <RecordVoiceOver />
        </Grid>
        <Grid item>
          <TextField 
            id="input-with-icon-grid" 
            label="Write your Gossip"
          />
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={HandleClick}>Post Gossip</Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default PostCreationInput