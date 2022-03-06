import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export default function NewSchedule() {

    return (
        <Box sx={{ flexGrow: 1, minHeight: "60vh" }}>
            <AddPhotoAlternateIcon
                sx={{ fontSize: 120 }}
                color="blue"
                style={{ marginLeft: '35%' }}
            />
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
        </Box>
    );
}
