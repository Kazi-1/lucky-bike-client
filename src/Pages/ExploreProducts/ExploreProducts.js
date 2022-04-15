import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ExploreProduct from './ExploreProduct/ExploreProduct';


const ExploreProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://whispering-river-56140.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    })


    return (
        <Container>
            <Typography sx={{ fontWeight: 600, my: 8, color: 'text.secondary' }} variant="h4" component="div">
                OUR AVAILABLE PRODUCTS
            </Typography>
            <Grid container spacing={2}>
                {
                    products.map(product => <ExploreProduct

                        key={product.id}
                        product={product}
                    >
                    </ExploreProduct>)
                }
            </Grid>
        </Container>
    );
};

export default ExploreProducts;