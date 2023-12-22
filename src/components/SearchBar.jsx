import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Input } from '@mui/icons-material';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: '20px',
        border: '1px solid #e3e3e3',
        pl: 2,
        pr:2,
        width: '100%',
        maxWidth: 500,
        boxShadow: 'none',
        mr: { sm: 6 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search....."
        value={searchTerm}
        onChange={handleChange}
        style={{ width: '100%', border: 'none', outline: 'none' }}
      />

      <IconButton type="submit" sx={{ p: '10px', color: 'black' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
