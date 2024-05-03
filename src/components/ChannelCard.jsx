import { Typography, Stack, Box, Button, Dialog, DialogContent, DialogTitle, IconButton, DialogContentText } from '@mui/material'
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"
import numeral from "numeral";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close'

const ChannelCard = ({channelDetail, style, showDetail=false}) => {

  const [showDescription, setShowDescription] = useState(false);

  const channelId =  channelDetail.id.channelId || channelDetail.id;

  const { snippet, statistics } = channelDetail;

  return (
    <>
      <Stack alignItems="center" justifyContent="center" py={4}>
        <Link to={`/channel/${channelId}`}>
          <img src={snippet?.thumbnails?.medium?.url || snippet?.thumbnails?.high?.url || snippet?.thumbnails?.default?.url} style={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            ...style
          }} />
        </Link>
        <Link to={`/channel/${channelId}`}>
          <Typography variant="h6" sx={{display: 'flex', alignItems: 'center', mt:2}} >
            {snippet?.title}
            <CheckCircle sx={{fontSize:18, ml:0.8}} />
          </Typography>
        </Link>
        {statistics?.subscriberCount && (
          <Typography variant="subtitle2"  color="gray">
            {numeral(statistics?.subscriberCount).format('0a')} subscribers
          </Typography>
        )}
        
        {(snippet?.description && showDetail) && (
          <Box sx={{p:3, maxWidth: 'sm'}}>
            {snippet?.description.length > 30 ? (
              <Button sx={{
                fontSize: 11,
                color: 'lightgray',
                whiteSpace: 'pre-wrap',
                textAlign: 'left'
              }} onClick={() => setShowDescription(true)}>
                {snippet?.description.slice(0,30)}... 
              </Button>
            ) : (
              <Typography variant="subtitle1" sx={{
                color: 'lightgray',
                whiteSpace: 'pre-wrap'
              }}>
                {snippet?.description} 
              </Typography>
            )}
          </Box>
        )}
      </Stack>
      {showDescription && (
        <Dialog open={showDescription} onClose={() => setShowDescription(false)}>
          <DialogTitle>Channel Description</DialogTitle>
          <IconButton
            onClick={() => setShowDescription(false)}
            sx={{
              position: 'absolute',
              top:12,
              right:12
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent>
            <DialogContentText sx={{
              whiteSpace: 'pre-wrap'
            }}>
              {snippet.description}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}

export default ChannelCard