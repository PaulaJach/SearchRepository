import React from 'react';
import Button from './Button';
import ModalContent from './ModalContent';
import EscapeOutside from 'react-escape-outside';


import '../styles/index.scss';

class App extends React.Component {
    state = {
        userInput: '',
        modalShow: true,
        items: [],
        info: (<div></div>),  
    };
    
    inputChangeHandler = event => this.setState({userInput: event.target.value});

    componentDidMount() {
        this.buttonClickHandler = (event) => {
            event.preventDefault();
            this.search();
            this.setState({modalShow: true});
        }
    }

    handleEscapeOutside = () => this.setState({modalShow: false});
    
    closeModalHandler = () => this.setState({modalShow: false});
    
    search() {
        if (this.state.userInput === "") {
            this.setState({
                info: (<div className="warning">
                    <h3>Please type repository name!</h3> 
                    </div>)
            }) 
            return;
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
                    <div className = "warning" >
                        <h2>Error: </h2> 
                        <h3>Invalid repository name! </h3> 
                        </div>
                    ), items: []
                })
                return;
            }

            if (body.items.length === 0) {
                this.setState({
                    info: (<div className="warning">Not found!</div>),
                    items: []
                })
                return;
            }

            if (body.items.length !== 0) {
                this.setState({
                    items: body.items,
                    info: (<div></div>) })
            }
            return;
            })
            .catch(response => this.setState({
                info: (<div className = "warning">
                        <h2>Error. Please try later.</h2> 
                    </div>)
            })
        )
    }
    
    render() {
        const { modalShow, items, info } = this.state;

        let modal = (<div></div>);
        if (modalShow) {
         modal = 
        (<div>
            <div> 
                { 
                    items !== undefined && items.length !== 0 &&
                    <Button close={this.closeModalHandler}/> 
                }
                <div className="modal__content">
                    {
                        items !== undefined && items.map((item, id) => {
                            return <ModalContent
                            name = {item.name}
                            key = {item.id}
                            link = {item.html_url}
                            />
                        })
                    } 
                </div>
            </div> 
        </div>
        )
    }
    return ( 
        <div className = "content">
            <h1 className="content__title"><span className="icon"><i className="fab fa-github"></i></span>
                Find Repository on Github</h1>
            {info}
            <form className="searchInput">
                <input  className="input" 
                        type="text"
                        placeholder="repository name"
                        onChange={this.inputChangeHandler}/> 
                <button className="btn button__submit"
                        onClick={this.buttonClickHandler}>Search 
                </button> 
            </form>
            <EscapeOutside onEscapeOutside={this.handleEscapeOutside} > 
                {modal} 
            </EscapeOutside> 
        </div>
        )
    }
}
export default App;