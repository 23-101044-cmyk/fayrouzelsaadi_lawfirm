import React from 'react';
import './card1.css'

const Card1 = (props) => {
    return ( 
        <article className='card1'>
            <img className='cardicon' src={props.cardicon} alt="" />
            <h5 className='cardtitle'>{props.cardtitle}</h5>
            <p className='cardp'>{props.cardp}</p>
        </article>
     );
}
 
export default Card1;