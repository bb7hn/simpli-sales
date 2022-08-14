import React,{useEffect, useState} from 'react'
import { useAuth, getToken} from '../context/AuthContext';
import Loading from '../img/Loading.svg';
import LoadingLight from '../img/LoadingLight.svg';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { IoIosExit } from "react-icons/io";
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

export default function Profile(){
    const {setUser} = useAuth();
    const TOKEN = getToken();
    const [userInfo,setUserInfo] = useState({});
    const [loaded,setLoaded] = useState(false);
    const logout = async ()=> {
        reactSwal.fire({
            html:(<img alt="loader icon" src={Loading }/>),
            allowOutsideClick   : false,
            showConfirmButton:false
        });
        const query = `
            mutation {
                logout
            }
        `;
        let bearer = 'Bearer ' + TOKEN;
        await fetch(process.env.REACT_APP_API_URL,{
            method: 'POST',
            body:JSON.stringify({query:query}),
            withCredentials: true,
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'
            }
        }).then(()=>{
            Toast.fire({
                icon                : 'success',
                title               : 'Success',
                text                : 'Logged out successfully',
                timer: 1000,
            });
            setTimeout(() => {
                setUser(false);
            }, 500);
        });
        
    }
    useEffect(() => {
        const query = `
        {
            user {
                name
                firebaseUserUID
                code
                contact
                email
                address1
                address2
                address3
                city
                country
                postCode
                telephone
                telephone2
                mobile
                fax
                companyName
                contactName
                contactEmail
                userCode
                creditLimit
                currencyCode
                marketingEmailEnabled
                marketingSmsEnabled
                marketingNotificationEnabled
                showAllPricesIncludingVat
            }
        }`;
        let bearer = 'Bearer ' + TOKEN;
        fetch(process.env.REACT_APP_API_URL, {
            method: 'POST',
            body:JSON.stringify({query:query}),
            withCredentials: true,
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'
            }
        }).then(r=>r.json()).then(response=>{
            let UserInfo = response.data.user
            setUserInfo(UserInfo);
            console.log(UserInfo);
            setTimeout(() => {
                setLoaded(true);
            }, 50);
        })
        
    },[]);
    const inputClasses = 'form-group mb-3 d-flex align-items-center border-bottom border-gary-50';
    const labelClasses = 'fw-bold col';
    if(!loaded){
        return(
                <div 
                    className='position-fixed top-0 start-0 container-fluid d-flex '
                    style={{width:'100vw',height:'100vh', backgroundColor:'#00000090',zIndex:3}}
                >
                    <img className="m-auto" alt="loader icon" src={LoadingLight }/>
                </div>
        );
    }
    return (
    <>
        <div className='d-flex align-items-center justify-content-between'>
            <h1>Profile</h1>
            <div className='d-flex align-items-center'>
                <button onClick={logout} className='btn btn-danger'>Logout<IoIosExit className='me-1'/></button>
            </div>
        </div>
        <form onSubmit={e=>e.preventDefault()}>
            <h5 className='text-info mt-3'>Informations</h5>
            <hr />
            <div className={inputClasses}>
                <label 
                    className={labelClasses} 
                    htmlFor="">Company Name:</label>
                <span className="form-control-plaintext col">
                    {userInfo.companyName}
                </span>
            </div>

            <div className={inputClasses}>
                <label 
                    className={labelClasses} 
                    htmlFor="">Name:</label>
                <span className="form-control-plaintext col">
                    {userInfo.name}
                </span>
            </div>

            <div className={inputClasses}>
                <label 
                    className={labelClasses} 
                    htmlFor="">Email:</label>
                <span className="form-control-plaintext col">
                    {userInfo.email}
                </span>
            </div>

            <div className={inputClasses}>
                <label 
                    className={labelClasses} 
                    htmlFor="">Address:</label>
                <span className="form-control-plaintext col">
                    { `
                        ${userInfo.address1} ${userInfo.address2} ${userInfo.address3} ${userInfo.city} ${userInfo.postCode} ${userInfo.country} 
                        ` }
                </span>
            </div>

            <div className={inputClasses}>
                <label 
                    className={labelClasses} 
                    htmlFor="">City:</label>
                <span className="form-control-plaintext col">
                    { userInfo.city }
                </span>
            </div>

            <div className={inputClasses}>
                <label 
                    className={labelClasses} 
                    htmlFor="">Post Code:</label>
                <span className="form-control-plaintext col">
                    { userInfo.postCode }
                </span>
            </div>

            <div className={inputClasses}>
                <label 
                    className={labelClasses} 
                    htmlFor="">Country:</label>
                <span className="form-control-plaintext col">
                    { userInfo.country }
                </span>
            </div>

            <h5 className='text-info fw-bold color-information'>Contact Informations</h5><hr/>
            {/* can use as prop for setting display property as none if field is empty: className={inputClasses+`${userInfo.contact===""?' d-none':''}`} */}
            <div className={inputClasses}>
                <label 
                    className={labelClasses} 
                    htmlFor="">Contact:</label>
                <span className="form-control-plaintext col">
                    {userInfo.contact?userInfo.contact:'--'}
                </span>
            </div>

            <div className={inputClasses}>
                <label 
                    className={labelClasses} 
                    htmlFor="">Contact Name:</label>
                <span className="form-control-plaintext col">
                    {userInfo.contactName?userInfo.contactName:'--'}
                </span>
            </div>

            <div className={inputClasses}>
                <label 
                    className={labelClasses} 
                    htmlFor="">Contact Email:</label>
                <span className="form-control-plaintext col">
                    {userInfo.contactEmail?userInfo.contactEmail:'--'}
                </span>
            </div>
            
            <div className={inputClasses}>
                <label 
                    className={labelClasses} 
                    htmlFor="">Code:</label>
                <span className="form-control-plaintext col">
                    {userInfo.code}
                </span>
            </div>

            <div className={inputClasses}>
                <label 
                    className={labelClasses} 
                    htmlFor="">Telephone:</label>
                <span className="form-control-plaintext col">
                    {userInfo.telephone}
                </span>
            </div>

            <div className={inputClasses}>
                <label 
                    className={labelClasses} 
                    htmlFor="">Telephone 2:</label>
                <span className="form-control-plaintext col">
                    {userInfo.telephone2?userInfo.telephone2:'--'}
                </span>
            </div>

            <div className={inputClasses}>
                <label 
                    className={labelClasses} 
                    htmlFor="">Mobile Phone:</label>
                <span className="form-control-plaintext col">
                    {userInfo.mobile}
                </span>
            </div>

            <div className={inputClasses}>
                <label 
                    className={labelClasses} 
                    htmlFor="">Fax:</label>
                <span className="form-control-plaintext col">
                    {userInfo.fax?userInfo.fax:'--'}
                </span>
            </div>

            <h5 className='text-info fw-bold color-information'>App Informations</h5><hr/>

            <div className={inputClasses}>
                <label 
                    className={labelClasses} 
                    htmlFor="">User Code:</label>
                <span className="form-control-plaintext col">
                    {userInfo.userCode?userInfo.userCode:'--'}
                </span>
            </div>

            <div className={inputClasses}>
                <label 
                    className={labelClasses} 
                    htmlFor="">Firebase User ID:</label>
                <span className="form-control-plaintext col">
                    {userInfo.firebaseUserUID?userInfo.firebaseUserUID:'--'}
                </span>
            </div>

            <div className={inputClasses}>
                <label 
                    className={labelClasses} 
                    htmlFor="">Currency Code:</label>
                <span className="form-control-plaintext col">
                    {userInfo.currencyCode?userInfo.currencyCode:'--'}
                </span>
            </div>

            <div className={inputClasses}>
                <label 
                    className={labelClasses} 
                    htmlFor="">Credit Limit:</label>
                <span className="form-control-plaintext col">
                    {userInfo.creditLimit!==""?userInfo.creditLimit:'--'}
                </span>
            </div>

            <div className={inputClasses}>
                <label 
                    className={labelClasses} 
                    htmlFor="">Show All Prices Including Vat:</label>
                <span className="form-control-plaintext col">
                    {userInfo.showAllPricesIncludingVat?'Yes':'No'}
                </span>
            </div>

            <div className={inputClasses}>
                <label 
                    className={labelClasses} 
                    htmlFor="">Marketing Email:</label>
                <span className="form-control-plaintext col">
                {userInfo.marketingEmailEnabled?<span className='text-success'>Enabled</span>:<span className='text-danger'>Disabled</span>}
                </span>
            </div>

            <div className={inputClasses}>
                <label 
                    className={labelClasses} 
                    htmlFor="">Marketing Sms</label>
                <span className="form-control-plaintext col">
                {userInfo.marketingSmsEnabled?<span className='text-success'>Enabled</span>:<span className='text-danger'>Disabled</span>}
                </span>
            </div>

            <div className={inputClasses}>
                <label 
                    className={labelClasses} 
                    htmlFor="">Marketing Notifications:</label>
                <span className="form-control-plaintext col">
                {userInfo.marketingNotificationEnabled?<span className='text-success'>Enabled</span>:<span className='text-danger'>Disabled</span>}
                </span>
            </div>
            
        </form>
        
    </>
    )
}
/*

        */