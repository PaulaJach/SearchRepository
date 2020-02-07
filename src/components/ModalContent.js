import React from 'react';

const ModalContent = props => {
    return (
        <div>
            <div key={props.id} className="list__item">
                <p>repository name: <span className="bold">{props.name}</span></p>
                <p>
                    <a className="link" href = {props.link}
                    target = "_blank"
                    rel ="noopener noreferrer">link: {props.link}</a>
                </p>
                <a className="mobile"
                href={props.link}
                target = "_blank"
                rel = "noopener noreferrer"><button className="btn__mobile">LINK</button></a>
            </div>
        </div>
    )
};


export default ModalContent;