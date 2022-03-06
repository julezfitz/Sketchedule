import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
// import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ScheduleItem(props) {
    return (
        <Paper variant="outlined" sx={{ p: 2, m: 1, flexGrow: 1 }} style={{ cursor: "pointer" }}>
            <Grid container spacing={1} >
                <Grid item xs={16} sm container>
                    <Grid item xs container direction="column" spacing={8}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                {props.name}
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <IconButton
                            size="large"
                            color="inherit"
                            style={{ marginLeft: 2.5 }}
                        >
                            <EditIcon />
                        </IconButton>

                        <IconButton
                            size="large"
                            color="inherit"
                            style={{ marginLeft: 0 }}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Grid>

                </Grid>
            </Grid>
        </Paper>
    );
}
