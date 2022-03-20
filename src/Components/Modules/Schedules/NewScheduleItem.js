import React, { useState } from 'react';
import {
  Paper, Grid, IconButton, Box, ListItemText, Button, List, ListItem,
  InputLabel, Input, Card, CardContent, FormControl,
} from '@mui/material';
import {
  Gesture, LibraryAdd, Search, AddPhotoAlternate, Edit,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import CustomUploadComponent from '../CustomUploadComponent';
import useDisplayImage from '../../../Hooks/useDisplayImage';

export default function NewScheduleItem() {
  const navigate = useNavigate();
  const location = useLocation();
  const [image, setImage] = useState('');

  console.log(location.state);

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
              || (location.state.selectedImage && <img style={{ objectFit: 'cover', borderRadius: '6px' }} width="140px" height="140px" src={location.state.selectedImage.imageThumb} alt={location.state.selectedImage.imageDescription} />)
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
                      <ListItemText primary="SketchIt" />
                      <IconButton edge="end">
                        <Gesture />
                      </IconButton>
                    </ListItem>
                    <ListItem
                      divider
                      sx={{ marginBottom: 1 }}
                      onClick={() => navigate('/search')}
                    >
                      <ListItemText primary="Search Images" />
                      <IconButton edge="end">
                        <Search />
                      </IconButton>
                    </ListItem>
                    <CustomUploadComponent
                      component={ListItem}
                      onFileUpload={(e) => {
                        setImage(e.target.files[0]);
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
    </Box>
  );
}