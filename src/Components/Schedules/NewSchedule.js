import React from "react";
import { Paper, Grid, Box, Button, List, ListItem, InputLabel, Input, Card, CardContent, FormControl } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import EditIcon from "@mui/icons-material/Edit";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SearchIcon from '@mui/icons-material/Search';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import GestureIcon from '@mui/icons-material/Gesture';

export default function NewSchedule() {

    return (
        <Box sx={{ flexGrow: 1, minHeight: "60vh", alignItems: 'center' }}>
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
                        style={{ justifyContent: "center", display: "flex" }}
                        direction="column"
                    >
                        <Grid
                            container
                            spacing={1}
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <AddPhotoAlternateIcon
                                sx={{ fontSize: 120, marginLeft: 2 }}
                                color="info"
                            />
                            <FormControl>
                                <InputLabel htmlFor="item-label">New Item Label  <EditIcon
                                    fontSize="inherit"
                                    color="inherit"
                                /></InputLabel>
                                <Input id="my-input" aria-describedby="item-label-text" />
                            </FormControl>
                        </Grid>
                    </CardContent>
                </Card>
                <Grid container marginTop={1} spacing={2} direction='column' alignItems="center"
                    justifyContent="center">
                    <Grid item xs={16}>
                        <>
                            <Paper
                                style={{ width: '15em', maxHeight: 450, overflow: 'auto' }}>

                                <Grid container direction="row">

                                    <Grid container direction="column">
                                        <List
                                            spacing={2}
                                        >
                                            <ListItem
                                                divider='true'
                                            >
                                                <Grid container direction="row" spacing={9}>
                                                    <Grid item xs={8}>SketchIt</Grid>
                                                    <Grid item xs={1}><GestureIcon></GestureIcon></Grid>
                                                </Grid>
                                            </ListItem>
                                            <ListItem
                                                divider='true'
                                            >
                                                <Grid container direction="row" spacing={9}>
                                                    <Grid item xs={8}>Take Photo</Grid>
                                                    <Grid item xs={1}><CameraAltIcon></CameraAltIcon></Grid>
                                                </Grid>


                                            </ListItem>
                                            <ListItem
                                                marginTop='2'
                                                divider='true'
                                            >
                                                <Grid container direction="row" spacing={9}>
                                                    <Grid item xs={8}>Search Icons</Grid>
                                                    <Grid item xs={1}><SearchIcon></SearchIcon></Grid>
                                                </Grid>
                                            </ListItem>
                                            <ListItem
                                            >
                                                <Grid container direction="row" spacing={9}>
                                                    <Grid item xs={8}>Photo Library</Grid>
                                                    <Grid item xs={1}><LibraryAddIcon></LibraryAddIcon></Grid>
                                                </Grid>
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                            </Paper>
                            <Grid container direction="row" xs={12}
                                sx={{ marginTop: 2, marginLeft: 3 }}
                            >
                                <Grid item xs={6}>
                                    <Button
                                        size={"small"}
                                        type='submit'
                                        color='success'
                                        variant='contained'
                                    >Save</Button>
                                </Grid>

                                <Grid item xs={6}>
                                    <Button
                                        size={"small"}
                                        type='submit'
                                        color='error'
                                        variant='contained'
                                    >Cancel</Button>
                                </Grid>
                            </Grid>
                        </>
                    </Grid>
                </Grid>
            </Grid>

        </Box>
    );
}
