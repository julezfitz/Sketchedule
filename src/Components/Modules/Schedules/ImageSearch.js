import React, { useState } from 'react';
import { createApi } from 'unsplash-js';
import {
  TextField, Box, Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import { styled } from '@material-ui/core/styles';
import Modal from '@mui/material/Modal';
import { useNavigate, useLocation } from 'react-router-dom';

// style search box
const SearchBox = styled(TextField)(() => ({
  '& fieldset': {
    borderRadius: '25px',
    borderWidth: '2px',
  },
}));

// style confirmation modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  alignContents: 'center',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ImageSearch() {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const unsplash = createApi({
    accessKey: 'd24RfJCmlQx9cvBRGcGNvhn0PpPAlvyxRe0tNGzYRhU',
    // secret: process.env.UNSPLASH_SECRET,
  });

  const handleSearch = () => {
    unsplash.search.getPhotos({
      query: searchTerm,
      page: 1,
      perPage: 10,
    })
      .then((response) => {
        setSearchResults(response.response.results);
      });
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
      e.preventDefault();
    }
  };

  const handleOpen = (image) => {
    setOpen(true);
    setSelectedImage({
      imageThumb: image.urls.thumb,
      imageDescription: image.description,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleImageSelection = () => {
    navigate('/new', {
      state: {
        ...location.state,
        selectedImage,
      },
    });
  };

  return (
    <Box sx={{ flexGrow: 1, minHeight: '60vh' }}>
      <SearchBox
        id="outlined-basic"
        placeholder="Search"
        value={searchTerm}
        key="searchField"
        onKeyPress={onKeyPress}
        onChange={(e) => setSearchTerm(e.target.value)}
        variant="outlined"
        fullWidth
        InputProps={{
          endAdornment: (
            <IconButton
              aria-label="search"
              sx={{
                opacity: 1.0, transform: 'translate(14px)', width: '55px', height: '55px', backgroundColor: 'gray', backgroundOpacity: '100%', color: 'white', fontSize: '190%',
              }}
              onClick={() => handleSearch()}
            >
              <SearchIcon sx={{ width: '100%', height: '100%' }} />
            </IconButton>
          ),
        }}
      />

      <ImageList
        sx={{
          img: {
            minHeight: '80%',
          },
          div: {
            minHeight: '20%',
          },
        }}
        cols={2}
        rowHeight={150}
        gap={8}
      >
        {searchResults.map((image) => (
          <ImageListItem
            onClick={() => handleOpen(image)}
            key={image.id}
          >
            <img
              style={{ borderRadius: '6px' }}
              src={image.urls.thumb}
              alt={image.description}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 290 }}>
          <Button
            color="success"
            variant="contained"
            sx={{ fontFamily: 'Verdana' }}
            onClick={handleImageSelection}
          >
            Add Photo
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{ fontFamily: 'Verdana', marginLeft: 1 }}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
