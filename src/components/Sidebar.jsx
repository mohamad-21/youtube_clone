import { categories } from "../utils/constants"
import { Button, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const Sidebar = ({selectedCategory, openSidebar, setOpenSidebar}) => {

  return (
    <>
      <Stack
        direction="column"
        position={{sm:'sticky', xs:'fixed'}}
        top={{sm:'90px', xs:'0'}}
        left={{sm:'0', xs:(openSidebar ? 0 : '-100%')}}
        height={{sm:'78vh', xs:'100vh'}}
        width={{sm:'175px', xs:'230px'}}
        paddingBlock={{sm:0, xs:5}}
        paddingInline={{sm:0, xs:3}}
        zIndex={{sm:4, xs:6}}
        sx={{
          overflowY: 'auto',
          background: '#000',
          transition: '.4s ease-in-out'
        }}
        gap={1}
      >
        <Typography variant="h5" mb={3} display={{sm:'none', xs:'block'}}>
          Category
        </Typography>
        {categories.map(category => (
          <Link to={`/category/${category.name}`} style={{display: 'block'}} key={category.name}>
            <Button
              startIcon={category.icon} 
              color="info"
              variant={`${selectedCategory === category.name ? 'contained' : 'text'}`}
              sx={{
                display: 'flex',
                justifyContent: 'start',
                p:1.5,
                pl: 2.3,
                width: '100%',
                maxWidth: '160px'
              }}
              onClick={() => setOpenSidebar(false)}
            >
              <Typography variant="subtitle2" marginLeft={0.3}>
                {category.name}
              </Typography>
            </Button>
          </Link>
        ))}
      </Stack>
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.7)',
            zIndex: 5,
            transition: '.4s ease-in-out',
            opacity: openSidebar ? 1 : 0,
            pointerEvents: openSidebar ? 'auto' : 'none'

          }}
          onClick={() => setOpenSidebar(false)}
        />
    </>
  )
}

export default Sidebar