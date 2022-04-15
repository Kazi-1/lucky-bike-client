import React from 'react';
import { NavLink } from 'react-router-dom';
import Reviews from '../../Reviews/Reviews';
import Footer from '../../Shared/Footer/Footer';
import SocialMedia from '../../SocialMedia/SocialMedia';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <Reviews></Reviews>
      <SocialMedia></SocialMedia>
      <Footer></Footer>
    </div>
  );
};

export default Home;