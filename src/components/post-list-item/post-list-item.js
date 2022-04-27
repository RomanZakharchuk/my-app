import React from 'react';
import './post-list-item.css';

const PostListItem = ({label, onDelete, onToggleImportant, onToggleLike, important, like}) => {
    let classNames = 'app-list-item d-flex justify-content-between';

    if (important) {
        classNames += ' important';
    }

    if (like) {
        classNames += ' like';
    }

    return (
        <div className={classNames}>
            <span
                className='app-list-item-label'
                onClick={onToggleLike}>
                {label}
            </span>
            <div className='d-flex justify-content-center align-items-center'>
                <button
                    type='button'
                    className='btn-star btn-sm'
                    onClick={onToggleImportant}>
                    <i className='bi bi-star'/>
                </button>
                <button
                    type='button'
                    className='btn-trash btn-sm'
                    onClick={onDelete}>
                    <i className='bi bi-trash'/>
                </button>
                <i className='bi bi-heart'/>
            </div>
        </div>
    )
}

export default PostListItem;