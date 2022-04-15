import React from 'react';
import facebook from '../../images/icon/facebook.png'
import instagram from '../../images/icon/instagram.png'
import youTube from '../../images/icon/youtube.png'
import twitter from '../../images/icon/twitter.png'
import { Typography } from '@mui/material';

const SocialMedia = () => {
    return (
        <div>
            <Typography sx={{ fontWeight: 600, my: 8, color: 'text.secondary' }} variant="h4" component="div">
                CONNECT WITH US
            </Typography>
            <a target="blank" href="https://www.facebook.com/"><img src={facebook} alt="" /></a>
            <a target="blank" href="https://www.instagram.com/"><img src={instagram} alt="" /></a>
            <a target="blank" href="https://www.youtube.com/"><img src={youTube} alt="" /></a>
            <a target="blank" href="https://twitter.com/home"><img src={twitter} alt="" /></a>
        </div>
    );
};

export default SocialMedia;