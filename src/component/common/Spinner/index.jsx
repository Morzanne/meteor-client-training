import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Spinner = ({ size }) => {
    return (
        <FontAwesomeIcon size={size} spin icon={faSpinner} />
    )
};

Spinner.defaultProps = {
    size: "3x"
};

export default Spinner;