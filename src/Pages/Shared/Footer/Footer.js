import { Container, Grid, IconButton, List, ListItemText, Typography } from '@mui/material';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon  from '@mui/icons-material/Facebook';

const Footer = () => {
  
    return (
        <footer>
            <hr />
            <Container>
                <Grid container spacing={3} sx={{ my: 3, textAlign: 'center' }}>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText sx={{ color: '#19D3AE', mb: 1 }}>Customer Service</ListItemText>
                            <ListItemText>Want to know more?</ListItemText>
                            <ListItemText>What is the correct frame size?</ListItemText>
                            <ListItemText>financing</ListItemText>
                            <ListItemText>Bike insurance</ListItemText>
                            <ListItemText>Bicycle leasing & e-bike leasing with Lucky Bike</ListItemText>
                            <ListItemText>Battery disposal</ListItemText>
                            <ListItemText>Manuals</ListItemText>
                            <ListItemText>Topic overview</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText sx={{ color: '#19D3AE', mb: 1 }}>Information</ListItemText>
                            <ListItemText>Frame calculator</ListItemText>
                            <ListItemText>Blog</ListItemText>
                            <ListItemText>Brands</ListItemText>
                            <ListItemText>Payment methods with us</ListItemText>
                            <ListItemText>In-store collection</ListItemText>
                            <ListItemText>Shipping</ListItemText>
                            <ListItemText>Return note</ListItemText>
                            <ListItemText>Newsletter</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText sx={{ color: '#19D3AE', mb: 1 }}>Lucky Bike</ListItemText>
                            <ListItemText>About us</ListItemText>
                            <ListItemText>Lucky Guide</ListItemText>
                            <ListItemText>Branches</ListItemText>
                            <ListItemText>Jobs & careers</ListItemText>
                            <ListItemText>Contact</ListItemText>
                            <ListItemText>Press</ListItemText>
                            <ListItemText>Affiliate program</ListItemText>
                            <ListItemText>Conditions</ListItemText>
                            <ListItemText>Imprint</ListItemText>
                            <ListItemText>Data protection</ListItemText>
                            <ListItemText>Cookie setting</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText sx={{ color: '#19D3AE', mb: 1 }}>Our Address</ListItemText>
                            <ListItemText>Berlin - 41460, Germany</ListItemText>
                            <ListItemText>Connect with us</ListItemText>
                        </List>
                        <IconButton>
                            <GoogleIcon />
                        </IconButton>
                        <IconButton>
                            <TwitterIcon />
                        </IconButton>
                        <IconButton>
                            <InstagramIcon />
                        </IconButton>
                        <IconButton>
                            <FacebookIcon />
                        </IconButton>
                        <Typography>Call Now</Typography>
                        <Typography>+490800015214859</Typography>
                    </Grid>
                </Grid>
                <Typography sx={{ textAlign: 'center', py: 4 }} variant="subtitle2">Copyright &copy; {new Date().getFullYear()} All Rights Reserved</Typography>
            </Container>
        </footer>
    );
};

export default Footer;