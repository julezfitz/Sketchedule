import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function ScheduleList() {

    const [schedules, setSchedules] = useState([]);

    return (
            <Box sx={{ flexGrow: 1, minHeight: "100vh" }}>
                <Grid container spacing={2} columns={16}>
                    <Grid item xs={8}
                        sx={{
                            transition: "300ms ease",
                            "&:hover > .MuiGrid-item": {
                                opacity: 0.5,
                            },

                            ".MuiGrid-item:hover": {
                                opacity: 1,
                            },
                            ".MuiGrid-item:hover .MuiTypography-root": {
                                color: "white !important",
                            },
                        }}>
                        <>
                            <Grid container direction="row">
                                <Grid item xs={13.7}>
                                    <Typography variant='h4' component='h2'>
                                        Your schedule items
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                </Grid>
                            </Grid>
                        </>
                    </Grid>
                    <Grid item xs={8}>
                        Hello there!
                    </Grid>
                </Grid>
            </Box>
    );
}
