import React from 'react';
import ModalContent from './ModalContent';

class SearchBar extends React.Component {
    constructor() {
        super()
        this.state = {keyword: "", items: []}
    }

    onInputChange = event => {
        this.setState({ keyword: event.target.value});
    }
    onButtonSubmit = event => {
        event.preventDefault();
        this.search()
    }




    search() {
        const url = `https://api.github.com/search/repositories?q=${this.state.keyword}`;
        console.log('state', this.state);

        fetch(url, {
            method: 'GET',
            headers: {
                "Accept": "application.json"
            }
        }).then(response => response.json())
        .then(body => this.setState({items: body.items}))
        .catch(response => console.log("Error:" + response));
        
    }
    render() {
        return (
            <div>
                <form className="formGroup">
                    <input
                        type="text"
                        placeholder="search repository"
                        onChange={this.onInputChange} />
                    <button onClick={this.onButtonSubmit}>Submit</button>
                </form>
                <ModalContent title={this.keyword} items={this.state.items}/>
            </div>
        );
    }
}

export default SearchBar;