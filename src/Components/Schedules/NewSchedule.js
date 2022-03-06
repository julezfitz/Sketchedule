import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function NewSchedule() {

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
