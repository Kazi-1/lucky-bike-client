import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const Review = (props) => {
    const { id, name, description } = props.review
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ py: 5 }}>
                <Typography variant="h6" gutterBottom component="div">
                    {id}
                </Typography>
                <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    {description}
                </Typography>
            </Paper>
        </Grid>
    );
};

export default Review;