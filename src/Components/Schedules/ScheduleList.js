import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ScheduleItem from "./ScheduleItem";
import Paper from '@mui/material/Paper';

export default function ScheduleList() {

    const [schedules, setSchedules] = useState([]);

    return (
        <Box sx={{ flexGrow: 1, minHeight: "60vh" }}>
            <Typography>My Sketchedules</Typography>
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
                                <Grid item xs={15}>
                                    <ScheduleItem
                                        key={Math.random().toString(36).substr(2, 9)}
                                        name="Trip to Grocery Store"
                                    />
                                </Grid>
                                <Grid item xs={15}>
                                    <ScheduleItem
                                        key={Math.random().toString(36).substr(2, 9)}
                                        name="Saturday"
                                    />
                                </Grid>
                                <Grid item xs={15}>
                                    <ScheduleItem
                                        key={Math.random().toString(36).substr(2, 9)}
                                        name="School Day"
                                    />
                                </Grid>
                                <Grid item xs={15}>
                                    <ScheduleItem
                                        key={Math.random().toString(36).substr(2, 9)}
                                        name="Trip To The Grocery Store"
                                    />
                                </Grid>
                                <Grid item xs={15}>
                                    <ScheduleItem
                                        key={Math.random().toString(36).substr(2, 9)}
                                        name="Visit to Grandpa's"
                                    />
                                </Grid>
                                <Grid item xs={15}>
                                    <ScheduleItem
                                        key={Math.random().toString(36).substr(2, 9)}
                                        name="Visit to the Doctor"
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </>
                </Grid>
            </Grid>
        </Box>
    );
}
