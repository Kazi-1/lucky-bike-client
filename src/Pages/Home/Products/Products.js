import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Product from '../Product/Product';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://whispering-river-56140.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    })

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{fontWeight: 600, my: 8, color: 'text.secondary'}} variant="h4" component="div">
                    BICYCLE HIGHLIGHTS
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products?.slice(0, 6).map((product, index) => <Product
                            key={index}
                            product={product}
                        ></Product>
                        )
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;