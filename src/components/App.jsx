import React from 'react';
import SearchBar from './SearchBar';


import '../index.scss';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: '',
            items: []    
        };
    }

    render() {
        return (
            <div>
                <h1>Search Repository on Github</h1>
                <SearchBar keyword={this.state.keyword} />
            </div>
        )
    }
}

export default App;