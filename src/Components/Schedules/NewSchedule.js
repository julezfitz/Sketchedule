import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';
import EditIcon from "@mui/icons-material/Edit";
import { List, ListItem, InputLabel, Input, Card, CardContent, FormControl } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
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
                <Grid container marginTop={1} spacing={2} columns={16}>
                    <Grid item xs={16}
                        sx={{
                            transition: "300ms ease",
                            "&:hover > .MuiGrid-item": {
                                opacity: 0.5,
                            },

                            ".MuiGrid-item:hover": {
                                opacity: 1,
                            },
                            ".MuiGrid-item:hover .MuiTypography-root": {
                                color: "grey !important",
                            },
                        }}>
                        <>
                            <Paper
                                variant="outlined"
                                style={{ maxHeight: 450, overflow: 'auto' }}>

                                <Grid container direction="row">

                                    <Grid container direction="column">
                                        <List
                                            spacing={2}
                                            paddingTop='0.5'
                                            paddingBottom='0.5'
                                        >
                                            <ListItem
                                                divider='true'
                                            >
                                                <Grid container direction="row" spacing={12}>
                                                    <Grid item>SketchIt</Grid>
                                                    <Grid item><GestureIcon></GestureIcon></Grid>
                                                </Grid>
                                            </ListItem>
                                            <ListItem
                                                divider='true'
                                                marginTop='2em'
                                            >
                                                <Grid container direction="row" spacing={9}>
                                                    <Grid item>Take Photo</Grid>
                                                    <Grid item><CameraAltIcon></CameraAltIcon></Grid>
                                                </Grid>


                                            </ListItem>
                                            <ListItem
                                                marginTop='2'
                                                divider='true'
                                            >
                                                <Grid container direction="row" spacing={9}>
                                                    <Grid item>Search Icons</Grid>
                                                    <Grid item><SearchIcon></SearchIcon></Grid>
                                                </Grid>
                                            </ListItem>
                                            <ListItem
                                            >
                                                <Grid container direction="row" spacing={9}>
                                                    <Grid item>Photo Library</Grid>
                                                    <Grid item><LibraryAddIcon></LibraryAddIcon></Grid>
                                                </Grid>
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>

                            </Paper>
                        </>
                    </Grid>
                </Grid>
            </Grid>

        </Box>
    );
}
