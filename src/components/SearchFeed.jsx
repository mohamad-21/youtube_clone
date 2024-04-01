import { Alert, AlertTitle, Backdrop, Box, CircularProgress, Typography } from "@mui/material"
import React, { useEffect, useState } from 'react'
import { Videos } from "./"
import { fetchData } from "../utils/fetchData"
import { useParams } from "react-router-dom"
import { lightBlue } from "@mui/material/colors"

const Feed = () => {
  
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { searchTerm } = useParams();

  useEffect(() => {

    setLoading(true);
    fetchData(`search?part=snippet&q=${searchTerm}`)
      .then(data => setVideos(data.items))
      .catch(err => {
        setError(err.message);
      })
      .finally(() => setLoading(false))

  }, [searchTerm]);

  if(error) {
    return (
      <Alert severity="error" sx={{mx:4}}>
        <AlertTitle>An error occurred</AlertTitle>
        <Typography variant="caption" dangerouslySetInnerHTML={{ __html: error }}></Typography>
      </Alert>
    )
  }

  if(!videos) {
    return (
      <Backdrop open>
        <CircularProgress color="info" />
      </Backdrop>
    )
  }

  return (
    <Box sx={{flex: 2, px:4}}>
      <Typography variant="h4" sx={{mb: 4}}>
        Search results for <span style={{color: lightBlue[400]}}>{searchTerm}</span> Videos
      </Typography>
      <Videos videos={videos} loading={loading} />
    </Box>
  )
}

export default Feed