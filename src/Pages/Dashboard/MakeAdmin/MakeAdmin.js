import { Alert, AlertTitle, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = (event) => {
        setEmail(event.target.value);
    }

    const handleAdminSubmit = (event) => {
        const user = { email }
        fetch('https://whispering-river-56140.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })
        event.preventDefault();
    }
    return (
        <div>
            <h1>Make an Admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">
                <AlertTitle>Congratulations!</AlertTitle>
                <strong>Admin created successfully!</strong>
            </Alert>}
        </div>
    );
};

export default MakeAdmin;