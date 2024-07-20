import React, { useState } from 'react';
import { Box, TextField, Typography, IconButton, Link } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
    marginTop: '100px',
    marginBottom: '110px',
  },
  title: {
    fontWeight: 600,
    marginBottom: '16px',
    transition: 'opacity 0.3s ease', // Add transition for smooth hiding/showing
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '600px',
  },
  textField: {
    flexGrow: 1,
    marginRight: '8px',
    borderRadius: '40px',
    backgroundColor: '#f0f0f0',
    '& .MuiOutlinedInput-root': {
      borderRadius: '40px',
      height: '48px',
      '& input': {
        padding: '0 20px',
      },
    },
    '& .MuiInputLabel-outlined': {
      top: '14px',
      transform: 'translate(14px, 20px) scale(1)',
    },
  },
  resultText: {
    marginTop: '16px',
    textAlign: 'center',
    color: '#333',
  },
  link: {
    color: 'blue',
    textDecoration: 'none',
  },
});

const SearchComponent: React.FC = () => {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResult, setSearchResult] = useState<string | null>(null);
console.log(searchQuery)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setSearchResult(null);
      return;
    }

    const hasResults = false; // Change this logic based on your actual search
    if (hasResults) {
      setSearchResult(`Search Results for "${searchQuery}"`);
    } else {
      setSearchResult(
        `We don't have results for your search. Try using different keywords, check out our latest articles, or reach out to support@IFPMC.com`
      );
    }
  };

  return (
    <Box className={classes.container}>
      {!searchQuery ? (
        <Typography
          variant="h6"
          className={classes.title}
          style={{ opacity: searchQuery ? 0 : 1 }}
        >
          Explore all Topics
        </Typography>
      ) : ( <Typography
        variant="h6"
        className={classes.title}
        style={{ opacity: searchQuery ? 1 : 0 ,marginRight: searchQuery && '50px'}}
      >
        Search Results for “ {searchQuery} ”
        
      </Typography>)}
      <Box className={classes.searchBox}>
        <TextField
          variant="outlined"
          placeholder="Explore all Topics"
          fullWidth
          value={searchQuery}
          onChange={handleChange}
          className={classes.textField}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        
      </Box>
      {searchResult && (
        <Typography className={classes.resultText}>
          {searchResult.includes('support@IFPMC.com') ? (
            <>
              We do not have results for your search. Try using different keywords, check out our latest articles, or reach out to{' '}
              <Link href="mailto:support@IFPMC.com" className={classes.link}>
                support@IFPMC.com
              </Link>
              .
            </>
          ) : (
            searchResult
          )}
        </Typography>
      )}
    </Box>
  );
};

export default SearchComponent;
