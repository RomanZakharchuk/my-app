import React from 'react';
import './app-header.css';

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className='app-header d-flex'>
            <h1>Roman Zakharchuk</h1>
            <h2>{allPosts} записів, сподобалося {liked}</h2>
        </div>
    )
}

export default AppHeader;