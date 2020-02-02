import React from 'react';

const ModalContent = (props) => {
    return (
        <div>
            <div key={props.id} className="list__item">
                <p className="bold">{props.name}</p>
                <p>link to repository: 
                    <a className="link" href = {props.link}
                    target = "_blank"
                    rel ="noopener noreferrer"> {props.link}</a>
                </p>
            </div>
        </div>
    )
}


export default ModalContent;