import React, { useState } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';


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
            alert('Registered successfully!');
            console.log('Registered:', response.data);
        } catch (err) {
            console.error('Registration error:', err.response.data);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h3>Register</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input 
                                        name="name"
                                        type="text"
                                        id="name"
                                        className="form-control"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input 
                                        name="email"
                                        type="email"
                                        id="email"
                                        className="form-control"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input 
                                        name="password"
                                        type="password"
                                        id="password"
                                        className="form-control"
                                        value={form.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password_confirmation" className="form-label">Confirm Password</label>
                                    <input 
                                        name="password_confirmation"
                                        type="password"
                                        id="password_confirmation"
                                        className="form-control"
                                        value={form.password_confirmation}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="d-flex justify-content-between">
                                    <button type="submit" className="btn btn-primary">Register</button>
                                    <a href="/" className="btn btn-link">Already have an account? Login</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
