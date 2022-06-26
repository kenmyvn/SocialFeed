import React, { useState } from 'react';
import "./CustomButton.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'


const CustomButton = (props) => {

    function handleClick(){


    }

    return ( 
        <div>
            {/* <button className='inactive' onClick={handleClick}>{props.message}</button> */}
            {props.type == 'up'
            ? <FontAwesomeIcon icon={faThumbsUp} />
            : <FontAwesomeIcon icon={faThumbsDown} />
            }
        </div>
     );
}
 
export default CustomButton;