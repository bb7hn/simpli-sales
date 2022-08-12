import React from 'react'
import { useAuth } from '../context/AuthContext';

export default function Profile(){
    const {setUser} = useAuth();
    const logout = _=> {
        setUser(false);
    }
        return (
        <>
            <h1>Profile</h1>
            <button onClick={logout} className='btn btn-danger'>Logout</button>
        </>
        )
    
}
