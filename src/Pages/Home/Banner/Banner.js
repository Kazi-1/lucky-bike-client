import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {

    return (
        <div className="banner-bg">
            
            <Link to="/explore" style={{ textDecoration: "none", color: 'white', fontWeight: 700, fontSize: 20, marginRight: 30 }}>
            <Button sx={{ mt: 50, backgroundColor: 'info.main' }} variant="contained">EXPLORE MORE BIKES</Button>
            </Link>
        </div>
    );
};

export default Banner;