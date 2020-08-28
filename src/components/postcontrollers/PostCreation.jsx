import React from 'react'
import {
  Grid,
  TextField,
  Button
} from '@material-ui/core'
import { RecordVoiceOver } from '@material-ui/icons'
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles ({
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "yellow !important"
  }
});

const PostCreationText = () => {
  const classes = useStyles()
  
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
            InputProps={{classes: classes.notchedOutline}} 
            multiLine="true"
          />
        </Grid>
        <Grid item>
          <Button variant="contained">Post Gossip</Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default PostCreationText