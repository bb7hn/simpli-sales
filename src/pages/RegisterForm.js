import React from 'react'
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const warning = e=>{
    e.preventDefault();
    Swal.fire({
        icon                : 'info',
        title               : 'Information',
        html                : '<div class="text-start">We can\'t accept new users at the moment. Please be patient and keep following</div>',
        confirmButtonText   : 'All right'
    });
}
export default function RegisterForm(){
    const {user} = useAuth();
    if(user){
        return <Navigate to="/user/profile"></Navigate>
    }
    return (
        <form className='mx-auto d-flex flex-column' style={{maxWidth:"24rem"}}>
            <h1 className='mb-3'>Register</h1>
            <hr />
            <div className="form-floating mb-3">
                <input onClick={warning} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" disabled />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input onClick={warning} type="password" className="form-control" id="floatingPassword" placeholder="Password" disabled autoComplete="true" />
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <button onClick={warning} className='btn btn-secondary ms-auto px-4 fs-5 mb-1' type="submit">Register</button>
            <hr />
            <p className="text-muted">Do you already have an account? <Link to="/login">Login</Link></p>
        </form>
    )
    
}
