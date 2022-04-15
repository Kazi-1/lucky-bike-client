import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'

const AddProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data =>{
        data.status = "pending";
        fetch("https://whispering-river-56140.herokuapp.com/addProduct",{
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
                <input {...register("name", { required: true })} placeholder="Name" />
                <input {...register("description", { required: true })} placeholder="Description" />
                <input {...register("img", { required: true })} placeholder="Image Link" />
                <input {...register("price", { required: true })} placeholder="Price" />
                <input {...register("date", { required: true })} type="date" placeholder="Date" />
                {errors.exampleRequired && <span>This field is required</span>}                
                <input type="submit"  value="Add Product" className="btn btn-danger fw-bolder text-white"/>
            </form>
        </div>


    )

};

export default AddProduct;