import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../../features/postsSlice';
import PostItem from './PostItem';
import './PostList.css';

const PostList = () => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul className="post-list">
            {items.map((post) => (
                <PostItem key={post.id} title={post.title} body={post.body} />
            ))}
        </ul>
    );
};

export default PostList;
