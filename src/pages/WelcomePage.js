import React from 'react'
import Logo from '../img/Logo.svg';
import {Link} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export default function WelcomePage(){
    const { user } = useAuth();
    if(user){
        return <Navigate to="/user/profile" />
    }
    return (
        <div className="px-4 py-5 my-5">
        <img className="d-block mx-auto mb-4" src={Logo} alt="" />
        <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
            Hi there welcome. Here will be replaced some description in the future but now:
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec mauris facilisis, fringilla diam non, tristique dui. Donec sem nisi, dignissim non mi eu, condimentum congue velit.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/login" className="btn btn-primary btn-lg px-4 gap-3">Login</Link>
            <Link to="/register" className="btn btn-outline-secondary btn-lg px-4">Register</Link>
        </div>
        </div>
    </div>
    )
    
}
