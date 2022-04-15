import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Blog = () => {
    return (
        <div>
          <h1 className="text-info my-5">WELCOME TO OUR BLOG POST</h1>
          <Card sx={{ minWidth: 275 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '200px', margin: '0 auto' }}
                    image="https://www.lucky-bike.de/blog/wp-content/uploads/ups/Trotz-Kaelte-im-Winter-und-Herbst-Fahrradfahren-Header.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="body2" color='text.secondary'>
                        "Sure, I prefer to write about the last sunny summer bike tour, but at this point we have to talk about cycling in the rain and cold. In the darker seasons of the year you can complain from time to time, but with the right clothing and a few good tricks, that doesn't apply to biking. With this text you will get dry and warm through autumn and winter."
                    </Typography>
                </CardContent>
                   
               
            </Card>
          <Card sx={{ minWidth: 275 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '200px', margin: '0 auto' }}
                    image="https://www.lucky-bike.de/blog/wp-content/uploads/ups/Lucky_Bike_Blog_Testbericht_Cube_Cross_Race_Vergleich_Cross_Race_Pro_2022_Header_fullhd-min.jpg"
                />
                <CardContent>
                    <Typography variant="body2" color='text.secondary'>
                        "But one after anonther. Let's start with the look of the two bikes. As is so often the case, it is a matter of taste, because it is the colors that make the greatest visual difference. When I looked at the two bikes in the internet catalog beforehand, I particularly liked the color scheme of the Pro version with the light, but not too gaudy blue. But during the on-site check, I also liked the basic version in light gray with contrasting orange on the lower link. This may be due to the fact that Cube attaches great importance to an appealing look for its bikes."
                    </Typography>
                </CardContent>
                   
               
            </Card>
          <Card sx={{ minWidth: 275 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '200px', margin: '0 auto' }}
                    image="https://www.lucky-bike.de/blog/wp-content/uploads/ups/Lucky_Bike-Blog_Axess_E-MTB-shooting_Header.jpg"
                />
                <CardContent>
                    <Typography variant="body2" color='text.secondary'>
                        "“Great strength follows great responsibility!” Spiderman author Stan Lee wrote this sentence in 1962 and put it in his superhero's mouth. You probably know this saying too, and you more or less agree with it. With regard to pedelecs and e-bikes, this means that those who drive faster need components that they can rely on - first and foremost, of course, the brakes. In this blog post we will show you what types of bicycle brakes there are and why not all of them are suitable for an e-bike. We'll also give you tips on how to familiarize yourself with your brake lever on an e-bike."
                    </Typography>
                </CardContent>
                   
               
            </Card>
        </div>
    );
};

export default Blog;