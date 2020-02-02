import React from 'react';

const Button = (props) => {

    return <button className="button__modal" onClick={props.close} 
    >Close</button>;
}

export default Button;