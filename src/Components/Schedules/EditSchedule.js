import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Card, CardContent, CardActionArea, CardMedia } from '@mui/material';

export default function EditSchedule() {

    return (
        <Box sx={{ flexGrow: 1, minHeight: "60vh" }}>
            <Typography>New Sketchedule - July 10, 2022
                <IconButton
                    size="large"
                    color="inherit"
                    style={{ marginLeft: 2.5 }}
                >
                    <EditIcon />
                </IconButton>
            </Typography>
            <Grid container spacing={2} columns={16}>
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
                        <Paper style={{ maxHeight: 450, overflow: 'auto' }}>

                            <Grid container direction="row">

                                <Grid container direction="column">
                                    
                                    {/* loop here to create cards */}
                                    <Grid item xs={18}>
                                        <Card
                                            sx={{ width: '10em' }}
                                            style={{ minHeight: '25vh' }}
                                            variant="outlined"
                                            direction="column"
                                        >
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    image="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                                    alt="clothing"
                                                />
                                                <CardContent
                                                    sx={{
                                                        paddingTop: 1,
                                                        paddingBottom: 1
                                                    }}
                                                >
                                                    <Typography gutterBottom component="div">
                                                        Get Dressed
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={18}>
                                        <Card
                                            sx={{ width: '10em' }}
                                            style={{ minHeight: '25vh' }}
                                            variant="outlined"
                                            direction="column"
                                        >
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    image="https://images.unsplash.com/photo-1575783970733-1aaedde1db74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80"
                                                    alt="clothing"
                                                />
                                                <CardContent
                                                    sx={{
                                                        paddingTop: 1,
                                                        paddingBottom: 1
                                                    }}
                                                >
                                                    <Typography gutterBottom component="div">
                                                        Go to Playground
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </>
                </Grid>
            </Grid>
        </Box>
    );
}
