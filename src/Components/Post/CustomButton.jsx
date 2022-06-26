import React, { useState } from 'react';
import "./CustomButton.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'


const CustomButton = (props) => {

    const [buttonClass, setButtonClass] = useState("inactive");

    function handleClick(){
        if(buttonClass ==="inactive"){
            setButtonClass("activelike");
        }
        else {
            setButtonClass("inactive");
        }
    }

    return ( 
        <div>
            <button className={buttonClass} onClick={handleClick}>{props.message}
            {props.type == 'up'
            ? <FontAwesomeIcon icon={faThumbsUp} />
            : <FontAwesomeIcon icon={faThumbsDown} />
            }
            </button>
        </div>
     );
}
 
export default CustomButton;