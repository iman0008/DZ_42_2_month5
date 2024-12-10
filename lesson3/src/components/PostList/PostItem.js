import React from 'react';

const PostItem = ({ title, body }) => {
    return (
        <li className="post-item">
            <h3>{title}</h3>
            <p>{body}</p>
        </li>
    );
};

export default PostItem;
