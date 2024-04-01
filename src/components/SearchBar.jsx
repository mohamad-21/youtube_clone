import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Paper, IconButton, Input } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const redirect = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(searchTerm.trim()) {
      redirect(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 14,
        overflow: 'hidden',
        display: 'flex',
        height: '45px',
        width: '100%',
        maxWidth: '400px',
        background: '#121212',
        padding: '6px'
      }}
    >
      <Input 
        type="text" 
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        disableUnderline
        style={{
          width: '100%',
          height: '100%',
          paddingLeft: '12px',
          paddingRight: '12px',
          fontSize: '15px'
        }}
      />
      <IconButton 
        color="info" 
        type="submit" 
        size="small"
        sx={{flexShrink: 0}}
      >
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar