import axios from 'axios';
import React from 'react';
import { Button, Card, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import image from '../asset/images/unnamed.jpg';

const SinglePost = ({ post }) => {
    const { title, id } = post;

    const handleDelete = id => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                if (res.status === 200) {
                    alert(`Post no ${id} deleted successfully`)
                }
            })
    }

    return (
        <Col lg={4} md={6} className="mt-3">
            <Card style={{
                margin: "auto",
                minHeight: "57vh"
            }}>
                <OverlayTrigger
                    key="top"
                    placement="top"
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            <strong>Click to see details</strong>.
                        </Tooltip>
                    }>
                    <Link to={`/posts/${id}`}>
                        <Card.Img variant="top" src={image} height="200" />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                        </Card.Body>
                    </Link>
                </OverlayTrigger>

                <Button variant="outline-danger"
                    className="mt-auto fs-5"
                    onClick={() => handleDelete(id)}
                >
                    <AiFillDelete />
                </Button>
            </Card>
        </Col >
    );
};

export default SinglePost;