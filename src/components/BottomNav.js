
import React, { Component } from 'react'
import {IoMdPerson}     from "react-icons/io";
import {AiOutlineShop, AiOutlineUnorderedList}     from "react-icons/ai";
import { NavLink } from 'react-router-dom';
const activeClassName ='text-white-50 ';
const classes = 'd-flex flex-column align-items-center fs-3 mx-2 my-auto text-decoration-none';
export default class BottomNav extends Component {
    render() {
        return (
            
            <nav 
                className='d-flex align-items-center justify-content-center position-fixed position-absolute bottom-0 start-0 bg-primary container-fluid text-white py-1'
                style={{zIndex:1022}}    
            >
                
                <NavLink to="/user/profile"  className={({ isActive }) =>isActive ? activeClassName+classes : 'text-white '+classes}>
                    <IoMdPerson />
                    <p className='fs-6 my-0'>Profile</p>
                </NavLink>

                <NavLink to="/user/last-orders" className={({ isActive }) =>isActive ? activeClassName+classes : 'text-white '+classes}>
                <AiOutlineUnorderedList />
                    <p className='fs-6 my-0'>Last Orders</p>
                </NavLink>

                <NavLink to="/user/products" className={({ isActive }) =>isActive ? activeClassName+classes : 'text-white '+classes}>
                    <AiOutlineShop />
                    <p className='fs-6 my-0'>Products</p>
                </NavLink>
                
                
            </nav>
        )
    }
}

