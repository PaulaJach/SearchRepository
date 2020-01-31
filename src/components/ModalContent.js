import React from 'react';

const ModalContent = (props) => {
    return (
        <div>
            <div key={props.id} className="list__item">
                <p>Name: {props.name}</p>
                <p> Link to repository: 
                    <a href = {props.link}
                    target = "_blank"
                    rel ="noopener noreferrer"> {props.link}</a>
                </p>
            </div>
        </div>
    )
}


export default ModalContent;