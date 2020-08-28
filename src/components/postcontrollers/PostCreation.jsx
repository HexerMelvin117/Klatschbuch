import React from 'react'
import {
  Grid,
  TextField,
  Button
} from '@material-ui/core'
import { RecordVoiceOver } from '@material-ui/icons'
import app from '../../config/fire'

const PostCreationText = () => {
  const HandleClick = () => {
    console.log(app.auth().currentUser)
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

export default PostCreationText