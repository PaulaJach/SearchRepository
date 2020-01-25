import React from 'react';
import { createPortal } from 'react-dom';



const modalRoot = document.getElementById('modal');

class Modal extends React.Component {
    constructor(props, items) {
        super(props);

        this.items = items
        this.element = document.createElement('div');
    }
    componentDidMount() {
        modalRoot.appendChild(this.element);
    }
    componentWillUnmount(){
        modalRoot.removeChild(this.element);
    }

    render() {
        if (this.items !== []) {
            return createPortal(this.props.children, this.element);
        }
               
    }
}

export default Modal;