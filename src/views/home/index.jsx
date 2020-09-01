import React from 'react'
import {
  Grid,
  Paper
} from '@material-ui/core'
import PostCreationInput from '../../components/postcontrollers/PostCreation'
import PostsList from '../../components/posts/PostsList'

const HomeView = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={3}></Grid>
        <Grid item md={6}>
          <Grid container justify="center">
            <Paper 
              style={{padding: 25, backgroundColor: "#37474f", color: "#e0e0e0", margin: 20}} 
              elevation={5}
            >
              <PostCreationInput />
              <PostsList />
            </Paper>
          </Grid>
        </Grid>
        <Grid item md={3}></Grid>
      </Grid>
    </div>
  )
}

export default HomeView