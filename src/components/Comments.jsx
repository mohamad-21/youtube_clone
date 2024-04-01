import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";

const Comments = ({comments}) => {

  const showComments = () => {

    return comments.map(comment => {
  
      const { id, snippet: { topLevelComment: { snippet: { authorChannelId: { value:channelId }, authorDisplayName, authorProfileImageUrl, textDisplay } } } } = comment;
  
      return (
  
        <Stack flexDirection="row" alignItems="flex-start" gap={1.5} key={id}>
          <Link to={`/channel/${channelId}`}>
            <img src={authorProfileImageUrl} width="37px" height="37px" style={{borderRadius: '50%', aspectRatio: '1/1'}} />
          </Link>
          <Stack flexDirection="column" pt={0.5} gap={1}>
            <Typography variant="body2">
              {authorDisplayName}
            </Typography>
  
            <Typography variant="caption" color="#ddd" lineHeight={2} sx={{whitespace: 'pre-wrap'}} dangerouslySetInnerHTML={{__html: textDisplay}}>
            </Typography>
          </Stack>
        </Stack>
        
      )
  
    })
    s
  }

  return showComments();

}

export default Comments