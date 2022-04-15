import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Logo from '../../../images/logo/logo3.png'
import { Grid } from '@mui/material';

const Navigation = () => {

    const { user, logOut } = useAuth();
    return (
        <Grid item  sx={{ flexGrow: 1 }}>
            <AppBar  xs={4} sm={12} md={12} position="static">
                <Toolbar>
                    <img width="100px" height="50px" src={Logo} alt="" />
                    <Typography style={{ textDecoration: "none", color: 'warning.main', fontWeight: 900, fontSize: 30, paddingRight: 200 }} variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
                        LUCKY BIKE
                    </Typography>
                    <Link to="/home" style={{ textDecoration: "none", color: 'white', fontWeight: 700, fontSize: 20, marginRight: 30 }}>
                        Home
                    </Link>
                    <Link to="/explore" style={{ textDecoration: "none", color: 'white', fontWeight: 700, fontSize: 20, marginRight: 30 }}>
                        Explore
                    </Link>

                    <Link to="/blog" style={{ textDecoration: "none", color: 'white', fontWeight: 700, fontSize: 20, marginRight: 30 }}>
                        Blog
                    </Link>

                    {user?.email ?
                        <>
                            <NavLink to={`/orders/${user.email}`} style={{ textDecoration: "none", color: 'white', fontWeight: 700, fontSize: 20, marginRight: 30 }}>My Order</NavLink>
                            <NavLink to="/dashboard" style={{ textDecoration: "none", color: 'white', fontWeight: 700, fontSize: 20, marginRight: 30 }}>
                            Dashboard
                            </NavLink>
                            <Button onClick={logOut}  className="text-warning" 
                                style={{ marginRight: 30, fontWeight: 700, fontSize: 23, textTransform: "capitalize"}}
                                color="inherit">Logout</Button>
                        </>
                        : <NavLink to="/login" style={{ textDecoration: "none", marginRight: 30, }}>
                            <Button className="text-warning" 
                                style={{ marginRight: 30, fontWeight: 700, fontSize: 23, textTransform: "capitalize"}}
                                color="inherit"
                            > Login</Button>
                        </NavLink>
                    }

                </Toolbar>
            </AppBar>
        </Grid>
    );
};

export default Navigation;