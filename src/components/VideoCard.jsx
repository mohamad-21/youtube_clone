import { Card, CardContent, CircularProgress, Typography } from '@mui/material'
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { useState } from "react"

const VideoCard = ({video, width, height}) => {

  const videoId = video.id.videoId
  const [imageLoaded, setImageLoaded] = useState(false);

  const { snippet } = video;
  const layout = (width && height) ? {
    width: width,
    height: height
  } : null;

  return (
    <Card>
      <div style={{lineHeight: 0, position: 'relative', ...layout}}>
        <Link to={`/video/${videoId}`}>
          <img src={snippet?.thumbnails?.medium?.url || snippet?.thumbnails?.hight?.url || snippet?.thumbnails?.default?.url} alt="waeaw" width="100%" height="100%" style={{lineHeight: 0}} loading="lazy" onLoad={() => setImageLoaded(true)} />
          {!imageLoaded && (
            <div style={{
              position: 'absolute',
              inset: 0,
              background: '#000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <CircularProgress color="info" />
            </div>
          )}
        </Link>
      </div>
      <CardContent sx={{background: '#000', px:0}}>
        <Link to={`/video/${videoId}`} style={{display: "inline-block", marginBottom: '4px'}}>
          <Typography variant="subtitle1" dangerouslySetInnerHTML={{__html: snippet?.title.length > 70 ? (snippet?.title.slice(0,70) + '...') : snippet?.title}}>
            
          </Typography>
        </Link>
        <Link to={`/channel/${snippet?.channelId}`}>
          <Typography variant="subtitle2" color="gray" sx={{display: 'flex', alignItems: 'center'}} >
            {snippet?.channelTitle}
            <CheckCircle sx={{fontSize:13, ml:0.5}} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard