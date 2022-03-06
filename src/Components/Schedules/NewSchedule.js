import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Card, CardContent } from '@mui/material';

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

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
                >
                    <CardContent
                        style={{ justifyContent: "center", display: "flex" }}
                    >
                        <AddPhotoAlternateIcon
                            sx={{ fontSize: 120, marginLeft: 2 }}
                            color="info"
                        />
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
                            <Paper style={{ maxHeight: 450, overflow: 'auto' }}>

                                <Grid container direction="row">

                                    <Grid container direction="column">
                                        <Grid item xs={18}>
                                            Hello
                                        </Grid>
                                        <Grid item xs={18}>
                                            Hi There!
                                        </Grid>
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
