import React from 'react';
import Button from './Button';
import Search from './Search';
import ModalContent from './ModalContent';
import EscapeOutside from 'react-escape-outside';


import '../styles/index.scss';
import RepoListItem from './RepoListItem';
import RepoList from './RepoList';
import RepoResults from './RepoResults';

class App extends React.Component {
    state = {
        modalShow: true,
        results: {},
        info: (<div></div>),  
    };
    

    handleEscapeOutside = () => this.setState({modalShow: false});
    
    closeModalHandler = () => this.setState({modalShow: false});
    
    onItemsFetched = (results) => {
        console.log(results, this.state)
        this.setState({results:results})
        /*
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

                info: (<div className = "warning">
                        <h2>Error. Please try later.</h2> 
                    </div>)
            
        */
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
           <Search title={"abc"} onItemsFetched={this.onItemsFetched}/>
            <EscapeOutside onEscapeOutside={this.handleEscapeOutside} > 
            <RepoResults results={this.state.results}></RepoResults>
            </EscapeOutside> 
        </div>
        )
    }
}
export default App;