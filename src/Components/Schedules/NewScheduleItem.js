import React from 'react';
import {
  Paper, Grid, Box, Button, List, ListItem, InputLabel, Input, Card, CardContent, FormControl,
} from '@mui/material';
import {
  Gesture, LibraryAdd, Search, CameraAlt, AddPhotoAlternate, Edit,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function NewScheduleItem() {
  const navigate = useNavigate();
  const fileInput = React.useRef();

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
              spacing={1}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <AddPhotoAlternate
                sx={{ fontSize: 120, marginLeft: 2 }}
                color="info"
              />
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
                      <Grid container direction="row" spacing={9}>
                        <Grid item xs={8}>Take Photo</Grid>
                        <Grid item xs={1}><CameraAlt /></Grid>
                      </Grid>

                    </ListItem>
                    <ListItem
                      divider
                      sx={{ marginBottom: 1 }}
                    >
                      <Grid container direction="row" spacing={9}>
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

      {/* Form for uploading images from file */}
      <form method="post" encType="multipart/form-data">
        <Input type="file" id="file" ref={fileInput} name="file" style={{ display: 'none' }} />
      </form>
    </Box>
  );
}
