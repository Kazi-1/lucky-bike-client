import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import { Card, CardMedia } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useAuth from '../../hooks/useAuth';

const Purchase = () => {
    const { productId } = useParams();
    const { user } = useAuth();
    // const {user} = useFirebase();
    console.log(user);
    const [purchase, setPurchase] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        data.name = purchase?.name;
        data.img = purchase?.img;
        data.price = purchase?.price;
        data.status = "pending";
        fetch("https://whispering-river-56140.herokuapp.com/checkout", {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => console.log(data))

        // console.log(data);
    }


    useEffect(() => {
        const url = `https://whispering-river-56140.herokuapp.com/purchase/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPurchase(data));
    }, [user.email])
    return (

        <div className="row col-md-12 mt-5 ms-5">
            <div className="col">
                <Card sx={{ minWidth: 275 }}>
                    <CardMedia
                        component="img"
                        style={{ width: 'auto', height: '200px', margin: '0 auto' }}
                        image={purchase.img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography sx={{ fontWeight: 500, my: 4 }} variant="h5" component="div">
                            {purchase.name}
                        </Typography>
                        <Typography variant="body2" color='text.secondary'>
                            {purchase.description}
                        </Typography>
                        <Typography variant="h5" color='primary.main'>
                            Price: {purchase.price}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div className="col">
                <form className="add-product" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: false })} defaultValue={user?.displayName} />
                    <input {...register("email", { required: false })} defaultValue={user?.email} />
                    <input {...register("address", { required: false })} defaultValue="Address" />
                    <input {...register("postCode", { required: false })} defaultValue="Post Code" />
                    <input {...register("city", { required: false })} defaultValue="City" />
                    <input {...register("houseNumber", { required: false })} defaultValue="House Number" />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input type="submit" value="Place Order" className="btn btn-warning fw-bolder text-white" />
                </form>
            </div>
        </div>
    )
};

export default Purchase;