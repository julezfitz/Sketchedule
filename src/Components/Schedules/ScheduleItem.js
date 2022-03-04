import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function ScheduleItem() {
  return (
    <Paper variant="outlined" sx={{ p: 2, m: 2, flexGrow: 1 }} style={{ cursor: "pointer" }}>
      <Grid container spacing={2} >
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Trip to Grocery Store
              </Typography>
            </Grid>
          </Grid>

          <Grid item>
                   <Button
                   size="small"
                   variant="outlined"
                   color="error"
                   style={{ marginLeft: '3em' }}
                 >
                   Delete
                 </Button>
            </Grid>

        </Grid>
      </Grid>
    </Paper>
  );
}
