import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../state/actions/postAction';
import { FcDocument } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { isLoading } from '../state/actions/loadAction';

const PopUp = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()
    const showPopUp = useSelector(state => state.showPopUp.showPopUp)
    const loading = useSelector(state => state.loading.isLoading)

    const onSubmit = data => {
        dispatch(isLoading(true))
        axios.post("https://jsonplaceholder.typicode.com/posts", data)
            .then(res => {
                if (res.status === 201) {
                    dispatch(isLoading(false))
                    dispatch(createPost(false))
                    alert("new post added successfully")
                }
            })
    }

    return (
        <>
            <Button variant="outline-success"
                onClick={() => dispatch(createPost(true))}
                style={{ width: '45vw' }}>
                <b>Create a new post</b>
            </Button>

            <Modal
                show={showPopUp}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>
                        <FcDocument /> Create a new post
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text"
                                placeholder="Post Title"
                                required
                                {...register("title")}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3}
                                placeholder="Post Body"
                                required
                                {...register("body")}
                            />
                        </Form.Group>
                        <br />
                        <hr />

                        <div className="d-flex justify-content-end">
                            <Button variant="outline-danger"
                                className="me-3"
                                onClick={() => dispatch(createPost(false))}>
                                Close
                            </Button>
                            <Button variant="success" type="submit">
                                {loading ? 'Submitting...' : 'Submit'}
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default PopUp;