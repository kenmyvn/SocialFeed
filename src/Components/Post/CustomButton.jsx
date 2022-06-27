import React, { useState } from 'react';
import "./CustomButton.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'


const CustomButton = (props) => {

    const [buttonClass, setButtonClass] = useState("inactive");

    function handleClick(){
        if(buttonClass ==="inactive"){
            if (props.type === 'up') {
                setButtonClass("activelike");
            }
            else if (props.type === 'down') {
                setButtonClass("activedislike");
            }
        }
        else {
            setButtonClass("inactive");
        }
    }

    return ( 
        <div className='button'>
            <button className={buttonClass} onClick={handleClick}>{props.message}
            {props.type === 'up'
            ? <FontAwesomeIcon icon={faThumbsUp} size='lg'/>
            : <FontAwesomeIcon icon={faThumbsDown} size='lg'/>
            }
            </button>
        </div>
     );
}
 
export default CustomButton;