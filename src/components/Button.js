import React from 'react';

const Button = (props) => <button 
    className="btn btn__modal" 
    onClick={props.close}>Close
</button>

export default Button;