import React from 'react';
import Button from './Button';

const ModalContent = ({ items = []}) => {

    const onButtonClick = (event) => {
        console.log("Clicked");
        
    }


    return (
        <div>
            
            <div>
                {items.length !== 0  &&
                items.map((item, id) => {
                        return(
                        <div key={id}>
                            <div>
                                <h5>{item.name}</h5>
                                <h6>
                                    <a href={item.html_url}>{item.html_url}</a>
                                </h6>
                            </div> 
                        </div>
                        )
                    }
                )
            }

            {items.length !== 0 && (
                <Button click={onButtonClick} />
            )
            }
            </div>
        </div>
    );
}

export default ModalContent;