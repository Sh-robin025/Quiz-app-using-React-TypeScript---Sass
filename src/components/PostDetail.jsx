import axios from 'axios';
import React, { useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import image from '../asset/images/unnamed.jpg';
import { clickedPost } from '../state/actions/postAction';
import { AiFillDelete } from 'react-icons/ai';

const PostDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const selectedPost = useSelector(state => state.selectedPost.clickedPost);
    const { title, body } = selectedPost;

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => dispatch(clickedPost(res.data)))
    }, [dispatch, id]);

    const handleDelete = async id => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                if (res.status === 200) {
                    alert(`Post no ${id} deleted successfully`)
                }
            })
    }

    return (
        <main className="container mt-5">
            <Row>
                <Col lg={6} md={6} className="text-center">
                    <img src={image} width="100%" alt="" />
                </Col>
                <Col lg={6} md={6} className="">
                    <h3>{title}</h3><br />
                    <p>{body}</p> <br />
                    <section className="text-center">
                        <Button variant="outline-danger" onClick={() => handleDelete(id)}>
                            <b><AiFillDelete /> Delete This Post</b>
                        </Button>
                    </section>
                </Col>
            </Row>
        </main>
    );
};

export default PostDetail;