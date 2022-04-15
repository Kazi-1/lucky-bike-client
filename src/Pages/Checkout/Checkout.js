import React from 'react';
import { useParams } from 'react-router';

const Checkout = () => {
    const {productId} = useParams();
    return (
        <div>
             <h3>this is the id :  {productId}</h3>
             
        </div>
    );
};

export default Checkout;