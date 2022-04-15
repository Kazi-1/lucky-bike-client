import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    const handleDelete = (id) => {
        fetch(`https://whispering-river-56140.herokuapp.com/deleteProduct/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => console.log(data))
        console.log(id);
    }

    useEffect(() => {
        fetch('https://whispering-river-56140.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    })

    return (
        <div>
            <h1 className="text-primary pb-5">Manage Products</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Product Id</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Description</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow
                                key={product.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {product.name}
                                </TableCell>
                                <TableCell align="center">{product._id}</TableCell>
                                <TableCell align="center">{product.price}</TableCell>
                                <TableCell align="center">{product.description}</TableCell>
                                <button onClick={()=> handleDelete(product._id)} className="btn btn-danger mt-3">Delete</button>
                            </TableRow>
                        ))}
                        
                    </TableBody>
                  
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageProducts;