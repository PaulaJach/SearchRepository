import React from 'react';

const ModalContent = props => {
    return (
        <div>
            <div key={props.id} className="list__item">
                <p><em className="name">repository name:</em> <span className="bold">{props.name}</span></p>
                <a className="link" href = {props.link}
                    target = "_blank"
                    rel ="noopener noreferrer">
                    <button className="btn__link">LINK TO GITHUB</button></a>
            </div>
        </div>
    )
};

export default ModalContent;