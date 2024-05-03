import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from '../utils/fetchData';
import { Alert, AlertTitle, Backdrop, Box, CircularProgress } from "@mui/material";
import { ChannelCard, Videos } from "./";

const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {

    setLoading(true);
    
    fetchData(`channels?id=${id}&part=snippet`)
      .then(data => setChannelDetail(data.items[0]))
      .catch(err => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
      
    fetchData(`search?channelId=${id}&part=snippet&order=date`)
      .then(data => setVideos(data.items))
      .catch(err => {
        setError(err.message);
      })
      .finally(() => setLoading(false));

    document.documentElement.scrollIntoView({
      behavior: 'smooth'
    });

  }, [id]);

  
  if(error) {
    return (
      <Alert severity="error" sx={{mx:4}}>
        <AlertTitle>An error occurred</AlertTitle>
        <Typography variant="caption" dangerouslySetInnerHTML={{ __html: error }}></Typography>
      </Alert>
    )
  }

  if(!channelDetail) {
    return (
      <Backdrop open>
        <CircularProgress color="info" />
      </Backdrop>
    )
  }

	return (
    <Box px={4}>
      {channelDetail && <ChannelCard showDetail channelDetail={channelDetail} />}
      <Box sx={{mt: 12}}>
        {videos && <Videos videos={videos} loading={loading} />}
      </Box>
    </Box>
	);
};

export default ChannelDetail;
