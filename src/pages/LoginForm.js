import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import { useAuth } from '../context/AuthContext';
import { useNavigate,Navigate } from 'react-router-dom';
import Loading from '../img/Loading.svg';

const reactSwal = withReactContent(Swal);

const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: false,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});


export default function LoginForm(props){
    
    const [email, setEmail]         = useState(0);
    const [password, setPassword]   = useState(0);

    const navigate = useNavigate();
    const {setUser} = useAuth();
    
    const handleChangeEmail = (e) =>{
        setEmail( e.target.value );
    }
    const handleChangePassword = (e) => {
        setPassword( e.target.value );
    }
    const setUsr = e=>{
        setUser(e)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        reactSwal.fire({
            html:(<img alt="loader icon" src={Loading }/>),
            allowOutsideClick   : false,
            showConfirmButton:false
        });
            //return false;
        const query = `
            mutation {
                login(email: "${email}", password: "${password}")
            }
        `;
        fetch(process.env.REACT_APP_API_URL,{
            method:'POST',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({query:query}),
        }).then(r=>r.json()).then(response=>{
            reactSwal.hideLoading();
            let data = response.data;
            if(data.login == null){
                let message = JSON.parse(response.errors[0].message).message
                Swal.fire({
                    icon                : 'error',
                    title               : 'Error',
                    text                : message?message:'There is an error with server. Please try again later.',
                    confirmButtonText   : 'Okay'
                })
            }
            else{
                const TOKEN = data.login;
                //this.setState({token:TOKEN});
                
                setUsr({
                    email:email,
                    token:TOKEN
                });
                Toast.fire({
                    icon                : 'success',
                    title               : 'Success',
                    text                : 'Logged in successfully',
                    timer: 1000,
                });
                setTimeout(() => {
                    //this.props.login(TOKEN);
                    navigate("/user/profile");
                }, 700);
            }
        });
    }
    const { user } = useAuth();
    if(user){
        return <Navigate to="/profile" />
    }
    return (
        <form onSubmit={handleSubmit} className='mx-auto d-flex flex-column' style={{maxWidth:"24rem"}}>
            <h1 className='mb-3'>Login</h1>
            <hr />
            <div className="form-floating mb-3">
                <input onChange={handleChangeEmail} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required/>
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChangePassword} type="password" className="form-control" id="floatingPassword" placeholder="Password" required autoComplete='true'/>
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className='btn btn-primary ms-auto px-4 fs-5 mb-1' type="submit">Login</button>
            <hr />
            <p className="text-muted">Don't you have an account? <Link to="/register">Register</Link></p>
        </form>
    )
    
}
