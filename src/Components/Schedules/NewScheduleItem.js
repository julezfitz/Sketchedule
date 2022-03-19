import React, { useRef, useState } from 'react';
import {
  Paper, Grid, Box, Button, List, ListItem, InputLabel, Input, Card, CardContent, FormControl,
} from '@mui/material';
import {
  Gesture, LibraryAdd, Search, AddPhotoAlternate, Edit,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

export default function NewScheduleItem() {
  const navigate = useNavigate();
  const location = useLocation();
  const [image, setImage] = useState('');

  const fileInput = useRef();

  console.log(location.state);

  function useDisplayImage() {
    const [uploadedImage, setUploadedImage] = useState('');

    function uploader(e) {
      const imageFile = e.target.files[0];

      const reader = new FileReader();
      reader.addEventListener('load', (e) => {
        setUploadedImage(e.target.result);
      });

      reader.readAsDataURL(imageFile);
    }

    return { uploadedImage, uploader };
  }

  const { uploadedImage, uploader } = useDisplayImage();

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
          sx={{ width: '15em' }}
          style={{ minHeight: '30vh' }}
          variant="outlined"
          direction="column"
        >
          <CardContent
            style={{ justifyContent: 'center', display: 'flex' }}
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
                <Input id="my-input" aria-describedby="item-label-text" />
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
              style={{ width: '15em', maxHeight: 450, overflow: 'auto' }}
            >

              <Grid container direction="row">

                <Grid container direction="column">
                  <List
                    spacing={1}
                  >
                    <ListItem
                      divider
                      sx={{ marginBottom: 1 }}
                    >
                      <Grid container direction="row" spacing={9}>
                        <Grid item xs={8}>SketchIt</Grid>
                        <Grid item xs={1}><Gesture /></Grid>
                      </Grid>
                    </ListItem>
                    <ListItem
                      divider
                      sx={{ marginBottom: 1 }}
                    >
                      <Grid
                        container
                        direction="row"
                        onClick={() => navigate('/search')}
                        spacing={9}
                      >
                        <Grid item xs={8}>Search Icons</Grid>
                        <Grid item xs={1}><Search /></Grid>
                      </Grid>
                    </ListItem>
                    <ListItem>
                      <Grid
                        container
                        direction="row"
                        spacing={9}
                        onClick={() => fileInput.current.children[0].click()}
                      >
                        <Grid item xs={8}>Photo Library</Grid>
                        <Grid item xs={1}><LibraryAdd /></Grid>
                      </Grid>
                    </ListItem>
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
                  onClick={() => navigate('/edit')}
                >
                  Cancel

                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Uploading images from file */}
      <Input
        type="file"
        onChange={(e) => {
          setImage(e.target.files[0]);
          uploader(e);
        }}
        id="file"
        ref={fileInput}
        name="file"
        style={{ display: 'none' }}
      />
    </Box>
  );
}
