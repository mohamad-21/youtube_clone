import { Box, Skeleton } from "@mui/material"
import { VideoCard, ChannelCard } from './'

const Videos = ({videos, loading, direction, width, height}) => {

  return (
    <Box display="grid" gridTemplateColumns={`${direction === 'column' ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))'}`} gap={2}>
      {videos.map((item, idx) => {

        if(item.id?.playlistId) return;

        return (
          <Box key={idx}>
            {loading ? (
              <>
                <Skeleton variant="rectangular" width="100%" height={height || 200} animation="wave"  />
                <Box sx={{pt:0.5}}>
                  <Skeleton animation="wave" width="100%" />
                  <Skeleton animation="wave" width="60%" />
                </Box>
              </>
            ) : (
              <>
                {item.id.videoId && <VideoCard width={width} height={height} video={item} />}
                {item.id.channelId && <ChannelCard channelDetail={item} />}
              </>
            )}
          </Box>
        )

      })}
    </Box>
  )
}

export default Videos