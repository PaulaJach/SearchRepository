import React from 'react';

class Search extends React.Component {
    state = {
        userInput: '',
        isLoading: false,
        isLoaded: false,
        hasError: false,
        hasEmptyInputError: false
    }

    constructor(props){
        super(props);

        console.log(props);
    }

    inputBlurHandler = e => {
        if (this.state.userInput === "") {
            this.setState({
                hasEmptyInputError: true
            }) 
        } else {
            this.setState({
                hasEmptyInputError: false
            }) 
        }
    }

    buttonClickHandler = event => {
        const url = `https://api.github.com/search/repositories?q=${this.state.userInput}`;

        if (this.state.userInput === "") {
            return;
        }

        fetch(url, {
            method: 'GET',
                headers: {
                    "Accept": "application.json"
                }
            })
            .then(response => response.json())
            .then(this.props.onItemsFetched)
    }
    
    inputChangeHandler = event => this.setState({userInput: event.target.value});

    render(props) {
        return (
             <form className="searchInput"
             onSubmit={(e)=>e.preventDefault()}>
                <input  className="input" 
                        type="text"
                        placeholder="repository name"
                        onChange={this.inputChangeHandler}
                        onBlur={this.inputBlurHandler}/> 
                <button className="btn button__submit"
                        onClick={this.buttonClickHandler}>Search 
                </button> 
              {this.state.hasEmptyInputError && <div>Input is empty</div>}
            </form>
        )
    }
}

export default Search;