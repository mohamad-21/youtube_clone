import { Box, Link } from "@mui/material"
import { lightBlue } from "@mui/material/colors"

const Footer = () => {
  return (
    <Box p={5} textAlign="center">
      Coded by <Link href="https://github.com/mohamadc21" target="_blank" color={lightBlue[400]}>Mohamad</Link>
    </Box>
  )
}

export default Footer