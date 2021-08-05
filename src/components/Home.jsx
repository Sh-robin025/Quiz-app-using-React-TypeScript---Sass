import axios from 'axios';
import React, { useEffect } from 'react';
import { Row, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { clickedPost, loadPost } from '../state/actions/postAction';
import PopUp from './PopUp';
import SinglePost from './SinglePost';

const Home = () => {
    const dispatch = useDispatch()
    const allPost = useSelector(state => state.allPost.post)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                dispatch(loadPost(res.data))
                dispatch(clickedPost({}))
            })
    }, [dispatch])

    return (
        <main className="container">
            <section className="mt-2 text-center">
                <PopUp />
            </section>
            <Row >
                {
                    allPost.map(post => <SinglePost key={post.id} post={post} />)
                }
            </Row>

        </main>
    );
};

export default Home;