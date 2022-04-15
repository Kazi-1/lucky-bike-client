import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const Product = (props) => {
    const { name, description, img, _id, price } = props.product;

    const handleBookingSubmit = (id) => {


        console.log(id);
        // collect data 
        // send to the server

    }
    return (
        <Grid item xs={4} sm={4} md={4} sx={{ mb: 3 }}>
            <Card sx={{ minWidth: 275 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '200px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography sx={{ fontWeight: 500, my: 2 }} variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color='text.secondary'>
                        {description}
                    </Typography>
                    <Typography variant="h5" color='primary.main'>
                            Price: {price}
                        </Typography>
                </CardContent>
                <NavLink to={`/purchase/${_id}`}>
                    <Button onClick={() => handleBookingSubmit(_id)} sx={{ mb: 2, backgroundColor: 'info.main' }} variant="contained">Add To Cart</Button>
                </NavLink>
            </Card>
        </Grid>
    );
};

export default Product;