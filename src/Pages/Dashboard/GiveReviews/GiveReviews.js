import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const GiveReviews = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth();
    
    const onSubmit = data =>{
        fetch("https://whispering-river-56140.herokuapp.com/feedback",{
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(result => console.log(result))
        console.log(data);
    } 

    return (
        <div>
             <form className="add-product" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: false })} defaultValue={user?.displayName} />
                <input {...register("email", { required: false })} defaultValue={user?.email} />
                <input {...register("description", { required: false })} defaultValue="Your Opinion/Description" />
                <input {...register("date", { required: false })} type="date" defaultValue="Date" />
                {errors.exampleRequired && <span>This field is required</span>}                
                <input type="submit" value="Submit Your Feedback" className="btn btn-danger fw-bolder text-white"/>
            </form>
        </div>
    );
};

export default GiveReviews;