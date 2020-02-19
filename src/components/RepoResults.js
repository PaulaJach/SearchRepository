import React from 'react';
import RepoListItem from './RepoListItem';
import RepoError from './RepoError';
import RepoList from './RepoList';

const RepoResults = props => {
    if(props.results.error){
        return <RepoError ></RepoError>
    }
    
    return (
        <RepoList items={props.results.items}></RepoList>
    )
};

export default RepoResults;