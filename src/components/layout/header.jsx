import React from 'react';
import './header.css'
import Btn from '../common/btn';

const Header = () => {
    return ( 
        <section className='hero'>
            <article className='herogradient'>
            <article className='heroinfo'>
                <h2 className='herotitle'>A Law Firm You can Trust</h2>
                <p>Dedicated and efficient business and litigation practice.
Experienced and Skillful labor and employment representation.</p>
                <Btn 
                btn="Contact us"
                btncolor= "btn1"
                />
            </article>
            </article>
        </section>
     );
}
 
export default Header;