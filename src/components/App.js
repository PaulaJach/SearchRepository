import React from 'react';
import Button from './Button';
import ModalContent from './ModalContent';

import '../index.scss';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: '',
            modalShow: true,
            items: []    
        };
    }

    inputChangeHandler = (event) => {
        this.setState({userInput: event.target.value});
    }

    componentDidMount() {
        this.buttonClickHandler = (event) => {
            event.preventDefault();
            this.search()
        }
    }

    toggleModalHandler = () => {
        const showModal = this.state.modalShow;
        this.setState({
            modalShow: !showModal
        });
    }

    closeModalHandler = () => {
        this.setState({
            modalShow: false
        });
    }
    
    search() {
        const url = `https://api.github.com/search/repositories?q=${this.state.userInput}`;
        console.log('this.state', this.state);

        fetch(url, {
            method: 'GET',
            headers: {
                "Accept": "application.json"
            }
        })
        .then(response => response.json())
        .then(body => this.setState({
            items: body.items
        }))
        .catch(response => console.log("Error: " + response));
    }

    render() {
        let modal = null;
        if (this.state.modalShow) {
            modal = (
                <div>
                    <div>
                        {
                            this.state.items.map((item, id) => {
                                return <ModalContent
                                    name={item.name}
                                    key={item.id}
                                    link={item.html_url}/>
                            })
                        }
                    </div>
                    <div>
                        {
                            this.state.items.length !==0 &&
                            <Button close={this.closeModalHandler}/>
                        }
                    </div>

                </div>
            )
        }
        return (
            <div>
                <h1>Search Repository on Github</h1>
                <input type="text"
                onChange={this.inputChangeHandler}/>
                <button onClick={this.buttonClickHandler}>Submit</button>
                {modal}
            </div>

        )
    }
}

export default App;