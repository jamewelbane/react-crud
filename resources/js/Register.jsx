import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/register', form);
            console.log('Registered:', response.data);
        } catch (err) {
            console.error('Registration error:', err.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" onChange={handleChange} />
            <input name="email" type="email" placeholder="Email" onChange={handleChange} />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} />
            <input name="password_confirmation" type="password" placeholder="Confirm Password" onChange={handleChange} />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
