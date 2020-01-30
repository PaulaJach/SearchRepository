import React from 'react';

const ModalContent = (props) => {
    return (
        <div>
            <div key={props.id}>
                <p>{props.name}</p>
                <a href={props.link}>{props.link}</a>
            </div>
        </div>
    )
}


export default ModalContent;