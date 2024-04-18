import { Alert, AlertTitle, Backdrop, Box, CircularProgress, Stack, Typography } from "@mui/material"
import React, { useEffect, useState } from 'react'
import { Sidebar, Videos } from "./"
import { fetchData } from "../utils/fetchData"
import { useParams } from "react-router-dom"
import { lightBlue } from "@mui/material/colors"

const Feed = ({openSidebar, setOpenSidebar}) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();

  useEffect(() => {

    setLoading(true);
    fetchData(`search?part=snippet&q=${category || 'latest'}`)
      .then(data => setVideos(data.items))
      .catch(err => {
        setError(err.message);
      })
      .finally(() => setLoading(false))

  }, [category]);

  if(error) {
    return (
      <Alert severity="error" sx={{mx:4}}>
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
    <Stack flexDirection="row" gap={2.6} px={4}>
      <Sidebar
        selectedCategory={category ?? 'Latest'}
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />
      <Box sx={{flex: 2}}>
        <Typography variant="h4" color={lightBlue[400]} sx={{mb: 4}}>
          {category || 'Latest'} <span style={{color: '#fff'}}>Videos</span>
        </Typography>
        <Videos videos={videos} loading={loading} width="437px" height="245px" />
      </Box>
    </Stack>
  )
}

export default Feed