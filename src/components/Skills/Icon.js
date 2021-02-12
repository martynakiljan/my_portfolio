import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Icon = ({icon}) => {
    return (
        <a>
        <FontAwesomeIcon icon={icon} />
        </a>
    )
     
}

export default Icon;