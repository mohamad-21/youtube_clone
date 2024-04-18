import { Videos } from './';
import ReactPlayer from "react-player";
import { fetchData } from "../utils/fetchData";
import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { Alert, AlertTitle, Backdrop, Box, CircularProgress, Stack, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import Comments from "./Comments";

const VideoDetail = () => {

  const [videoDetail, setVideoDetail] = useState(null);
  const [comments, setComments] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {

    fetchData(`videos?part=snippet,statistics,contentDetails&id=${id}`)
      .then(data => setVideoDetail(data.items[0]))
      .catch(err => {
        setError(err.message);
      })

    fetchData(`commentThreads?part=snippet&videoId=${id}`)
      .then(data => {
        if(data?.error) {
          throw new Error(data.error.message);
        }
        setComments(data.items);
      })
      .catch(err => setError(err.message))

    fetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then(data => setRelatedVideos(data.items))
      .catch(err => {
        setError(err.message);
      })

    document.documentElement.scrollTop = 0;

  }, [id]);

  if(error) {
    return (
      <Alert severity="error" sx={{mx:4}}>
        <AlertTitle >An error occurred</AlertTitle>
        <Typography variant="caption" dangerouslySetInnerHTML={{ __html: error }}></Typography>
      </Alert>
    )
  }

  if(!videoDetail || !comments) {
    return (
      <Backdrop open>
        <CircularProgress color="info" />
      </Backdrop>
    )
  }

  const { snippet: { title, description, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box px={4}>
      <Stack flexDirection={{ md:'row', xs:'column' }} gap={4}>
        <Box flex={1} >
          <Box>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} width="100%" height="100%" style={{
              aspectRatio: '16/9',
            }} controls />
          </Box>
          <Stack flexDirection="column" gap={2} pt={3.5}>
            <Typography variant="h6" dangerouslySetInnerHTML={{ __html: title }} sx={{display: "block"}}>
            </Typography>
            <Link to={`/channel/${channelId}`}>
              <Typography variant="subtitle2" color="gray" sx={{display: 'flex', alignItems: 'center'}} >
                {channelTitle}
                <CheckCircle sx={{fontSize:13, ml:0.5}} />
              </Typography>
            </Link>
            <Stack flexDirection="row" gap={2} mb={4}>
              <Typography variant="body2" color="gray" noWrap>
                {parseInt(viewCount).toLocaleString()} Views
              </Typography>
              <Typography variant="body2" color="gray" noWrap>
                {parseInt(likeCount).toLocaleString()} Likes
              </Typography>
            </Stack>
            <Typography variant="caption" fontSize={13} lineHeight={2} p={2} borderRadius={1.5} sx={{whiteSpace: 'pre-wrap', background: '#1f1f1f'}}dangerouslySetInnerHTML={{ __html: description }} >
              </Typography>
          </Stack>
          <Box mt={12}>
            <Typography variant="h6" mb={6}>
              {comments.length} Comments
            </Typography>
            <Stack flexDirection="column" gap={5} maxWidth="600px">
              {<Comments comments={comments} />}
            </Stack>
          </Box>
        </Box>
        <Box maxWidth="270px" mt={{xs: 8, md: 0}}>
          <Typography variant="h5" mb={3}>Related Videos</Typography>
          {relatedVideos && <Videos direction="column" videos={relatedVideos} width="270px" height="151px" />}
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail