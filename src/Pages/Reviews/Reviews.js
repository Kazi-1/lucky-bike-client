import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Review from './Review';

// const reviews = [
//     {
//         id: 1,
//         name: 'Raisa Tasnim',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',

//     },
//     {
//         id: 2,
//         name: 'Maisha Munshi',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',

//     },
//     {
//         id: 3,
//         name: 'Azan Rian',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',

//     }
// ]

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://whispering-river-56140.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    })
    return (
        <Container>
            <Typography sx={{ fontWeight: 600, my: 8, color: 'text.secondary' }} variant="h4" component="div">
                HERE IS WHAT OUR CUSTOMERS SAY ABOUT US
            </Typography>
            <Grid container spacing={2}>
                {
                    reviews.map((review) => <Review 
                    key={review._id}
                        review={review}

                    ></Review>)
                }
            </Grid>
        </Container>
    );
};

export default Reviews;