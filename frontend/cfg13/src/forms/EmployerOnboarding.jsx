import React, {useState} from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';
import { Link } from "react-router-dom"
import EmployeeOnboarding from './EmployeeOnboarding';
 
 
const EmployerOnboarding = () => {
    const [companyName, setCompanyName] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [industry, setIndustry] = useState('')
 
    function handleSubmit(event) {
        event.preventDefault();
        console.log(companyName, location, description, industry) 
    }
 
    return (
        <React.Fragment>
            <h2>Welcome</h2>
            <form onSubmit={handleSubmit} action={<Link to="/login" />}>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Company Name"
                        onChange={e => setCompanyName(e.target.value)}
                        value={companyName}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Location"
                        onChange={e => setLocation(e.target.value)}
                        value={location}
                        fullWidth
                        required
                    />
                </Stack>
                <TextField
                    type="description"
                    variant='outlined'
                    color='secondary'
                    label="Description"
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="description"
                    variant='outlined'
                    color='secondary'
                    label="Industry"
                    onChange={e => setIndustry(e.target.value)}
                    value={industry}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <Button variant="outlined" color="secondary" type="submit">Register</Button>
            </form>
            <small>Already have an account? <Link to="/login">Login Here</Link></small>
     
        </React.Fragment>
    )
}
 
export default EmployerOnboarding;