import React, { useState } from 'react';
import {
  Paper, Grid, IconButton, Box, ListItemText, Button, List, ListItem,
  InputLabel, Input, Card, CardContent, FormControl, Typography,
} from '@mui/material';
import {
  LibraryAdd, Search, AddPhotoAlternate, Edit,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import db from '../../../db';
import CustomUploadComponent from '../CustomUploadComponent';
import useDisplayImage from '../../../Hooks/useDisplayImage';

export default function NewScheduleItem() {
  const navigate = useNavigate();
  const location = useLocation();
  const scheduleID = location.state?.scheduleID;
  const [imageLabel, setImageLabel] = useState('');
  const [status, setStatus] = useState('');
  const complete = false;
  const { uploadedImage, uploader } = useDisplayImage();

  const createScheduleItem = async () => {
    let imageSrc;
    let altText = 'Schedule Item';

    if (uploadedImage) {
      imageSrc = uploadedImage;
    } else if (location.state?.selectedImage) {
      imageSrc = location.state?.selectedImage.imageThumb;
      altText = location.state.selectedImage.imageDescription;
    } else {
      setStatus('You must choose an image');
      return;
    }
    try {
      const id = await db.scheduleItems.add({
        imageSrc,
        imageLabel,
        complete,
        altText,
        scheduleID,
      });
      setStatus(`Image successfully added. Got id ${id}`);
      navigate('/edit', { state: { ...location.state } });
    } catch (error) {
      setStatus(`Failed to add image: ${error}`);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, minHeight: '60vh', alignItems: 'center' }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Card
          sx={{ width: '15em', minHeight: '30vh' }}
          variant="outlined"
          direction="column"
        >
          <CardContent
            sx={{ justifyContent: 'center', display: 'flex' }}
            direction="column"
          >
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              {(uploadedImage && <img style={{ objectFit: 'cover', borderRadius: '6px' }} width="140px" height="140px" src={uploadedImage} alt="" />)
              || (location.state?.selectedImage && <img style={{ objectFit: 'cover', borderRadius: '6px' }} width="140px" height="140px" src={location.state.selectedImage.imageThumb} alt={location.state.selectedImage.imageDescription} />)
              || (
              <AddPhotoAlternate
                sx={{ fontSize: 120, marginLeft: 2 }}
                color="info"
              />
              )}

              <FormControl>
                <InputLabel htmlFor="item-label">
                  New Item Label
                  {' '}
                  <Edit
                    fontSize="inherit"
                    color="inherit"
                  />

                </InputLabel>
                <Input
                  id="my-label-text"
                  aria-describedby="item-label-text"
                  onChange={(e) => setImageLabel(e.target.value)}
                />
              </FormControl>
            </Grid>
          </CardContent>
        </Card>
        <Grid
          container
          marginTop={1}
          spacing={1}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={16}>
            <Paper
              sx={{ width: '15em', maxHeight: 450, overflow: 'auto' }}
            >

              <Grid container direction="row">

                <Grid container direction="column">
                  <List
                    spacing={1}
                  >
                    <ListItem
                      divider
                      sx={{ marginBottom: 1 }}
                      onClick={() => navigate('/search', { state: { ...location.state } })}
                    >
                      <ListItemText primary="Search Images" />
                      <IconButton edge="end">
                        <Search />
                      </IconButton>
                    </ListItem>
                    <CustomUploadComponent
                      component={ListItem}
                      onFileUpload={(e) => {
                        uploader(e);
                      }}
                    >
                      <ListItemText primary="Upload Image" />
                      <IconButton edge="end">
                        <LibraryAdd />
                      </IconButton>
                    </CustomUploadComponent>
                  </List>
                </Grid>
              </Grid>
            </Paper>
            <Grid
              container
              direction="row"
              sx={{ marginTop: 2, marginLeft: 3 }}
            >
              <Grid item xs={6}>
                <Button
                  size="small"
                  type="submit"
                  sx={{ fontFamily: 'Verdana' }}
                  color="success"
                  variant="contained"
                  onClick={() => createScheduleItem()}
                >
                  Save
                </Button>
              </Grid>

              <Grid item xs={6}>
                <Button
                  size="small"
                  type="submit"
                  sx={{ fontFamily: 'Verdana' }}
                  color="error"
                  variant="contained"
                  onClick={() => navigate('/edit', { state: { ...location.state } })}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box id="error-messages" sx={{ marginTop: '1rem' }}>
          <Typography color="error">{status}</Typography>
        </Box>
      </Grid>
    </Box>
  );
}
