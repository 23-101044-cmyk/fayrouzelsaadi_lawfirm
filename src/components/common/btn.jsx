import React from 'react';
import './btn.css'

const Btn = (props) => {
    return ( 
        <button className={props.btncolor}>
            {props.btn}
        </button>
     );
}
 
export default Btn;