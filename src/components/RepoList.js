import React from 'react';
import RepoListItem from './RepoListItem';

const RepoList = props => {
    return (
        props.items.map((item, id) => {
            return <RepoListItem
            name = {item.name}
            key = {item.id}
            link = {item.html_url}
            />
        })
    )
};

export default RepoList;