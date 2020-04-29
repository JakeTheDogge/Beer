import React from 'react';
import './Footer.css';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';


export default function Footer(){
    return(
    <div className='footer'>
        <Router>
            <NavLink to='/profile' ><button className='toProfile1'/></NavLink>
            <NavLink to='/profile' ><button className='toProfile2'/></NavLink>
            <NavLink to='/profile' ><button className='toProfile3'/></NavLink>
        </Router>
    </div>
    )
}