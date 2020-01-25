import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = { showButton : true }
    }
   
    
    render() {
        return(
            <div>
                <button onClick={this.props.click}>X</button>
            </div>
        )
    }
    
}

export default Button;