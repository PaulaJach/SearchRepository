import React from 'react';
import Button from './Button';
import ModalContent from './ModalContent';
import EscapeOutside from 'react-escape-outside';

import '../index.scss';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: '',
            modalShow: true,
            items: [],
            info: (<div></div>),  
        };
        this.handleEscapeOutside = this.handleEscapeOutside.bind(this);
    }

    inputChangeHandler = (event) => {
        this.setState({userInput: event.target.value});
    }

    componentDidMount() {
        this.buttonClickHandler = (event) => {
            event.preventDefault();
            this.search();
            this.setState({modalShow: true});

        }
    }
    
    handleEscapeOutside = () => {
        this.setState({modalShow: false});
    }

    closeModalHandler = () => {
        this.setState({modalShow: false});
    }

    search() {
        if(this.state.userInput === ""){
            this.setState({info: 
                (
                    <div className="warning">
                        <h2>Error</h2>
                        <h3>1Please type repository name!</h3>
                    </div>
                )
            })
            return
        }
            const url = `https://api.github.com/search/repositories?q=${this.state.userInput}`;

            fetch(url, {
                method: 'GET',
                headers: {
                    "Accept": "application.json"
                }
            })
            .then(response => response.json())
            .then(body => {
                console.log(body)
                if (body.items === undefined) {
                    this.setState({
                        info: (
                            <div className="warning">
                                <h2>Error</h2>
                                <h3>2Please type repository name!</h3>
                            </div>
                        )
                    }) 

                    return
                } 

                if (body.items.length === 0) {
                    this.setState({ info: (<div>Not found!</div>),
                    items: []});
                    return
                }

                if (body.items.length !== 0) {
                    this.setState({ items: body.items, info: (<div></div>) });
                    
                }
            })
            .catch(response => this.setState({
                    info: (
                        <div className="warning">
                            <h2>Error:</h2>
                            <h3>3Please type repository name!</h3>
                        </div>)
                })
            )
    }

    render() {
        let modal = (<div></div>);
        if (this.state.modalShow) {
            modal = (
                <div>
                        <div className="modal__content">
                            {
                                this.state.items !== undefined && this.state.items.map((item, id) => {
                                    return <ModalContent
                                        name={item.name}
                                        key={item.id}
                                        link={item.html_url}/>
                                })
                            }
                            {
                                this.state.items !== undefined && this.state.items.length !== 0 &&
                                    <
                                    Button close = {
                                        this.closeModalHandler
                                    }

                                />
                            }
                        </div>
                </div>
            )
        }
        return (
            <div className="content">
                <h1 className="content__title">Search Repository on Github</h1>
                <input 
                    className="input"
                    type="text"
                    placeholder="repository name"
                    onChange={this.inputChangeHandler}
                />
                <button 
                    className="button__submit" 
                    onClick={this.buttonClickHandler}>Search
                </button>
                    {this.state.info}
                <EscapeOutside 
                    onEscapeOutside={this.handleEscapeOutside}> 
                    { modal}
                </EscapeOutside>
            </div>
        )
    }
}

export default App;