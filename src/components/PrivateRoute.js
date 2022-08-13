import React            from 'react'
import { useAuth }      from '../context/AuthContext'
import { Navigate }     from 'react-router';
import BottomNav        from './BottomNav';
export default function PrivateRouter ({children}){
    const { user } = useAuth();
    if(!user){
        return <Navigate to="/login" />
    }
    return (
        <div className='mb-4'>
        {children}
        <BottomNav />
        </div>
    )
}