import React from 'react';
import './nav.css'
import Logo from '../common/logo';
import Navbtn from '../common/navbtn';


const Nav = () => {
    return ( 
        <nav>
            <Logo />
            <div className='container'>
                <Navbtn nav="Home"/>
                <Navbtn nav="Why Choose Us?"/>
                <Navbtn nav="Practice Areas"/>
                <Navbtn nav="REVIEWS"/>
                <Navbtn nav="About Us"/>
                <Navbtn nav="CONTACT US"/>
            </div>
            <div className='consultation'>
                <h5 className='freeconsultation'>FREE CONSULTATION</h5>
                <h5 className='nmbr'>702-849-2598</h5>
            </div>
        </nav>
     );
}
 
export default Nav;