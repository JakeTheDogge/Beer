import React from 'react';
import './ConvHeader.css';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

export default function ConvHeader() {
    return(      
        <div className='ceilConvs'>
            <Router>
                <NavLink to='/chats' activeClassName='pushed'><button className='returnButton'  /></NavLink>
                <NavLink to='/newChat' activeClassName='pushed'><button className='startAChat'  /></NavLink>
            </Router>
        </div>)
} 

