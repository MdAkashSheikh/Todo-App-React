import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';
import { FaBeer } from 'react-icons/fa';
import todo from '../image/todo-logo.png';

function Todo() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        console.log(name);
        console.log(phone);

        try{
            const data = await fetch('//localhost:8080/send',{
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    name: name,
                    phone: phone,
                })
            })
            await data.json();

            if(data.status === 200) {
                setName("");
                setPhone("");
                console.log("Successfully Send Data...")
            } else {
                console.log("Some error occured...")
            }

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <div>
            <div className='my-5'>
                <figure>
                    <img src={todo} alt='todologo'/>
                </figure>
                <div className='d-flex justify-content-center'> 
                    <Card style={{ width: '30rem' }}>
                        <Card.Body className='bg-secondary'>
                            <Card.Title>Add Todo</Card.Title>
                            <Form.Group as={Row} className="mb-3" controlId="name">
                                <Form.Label className='text-light' column sm="3">
                                    Name
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Write Name..." 
                                        onChange={(e)=> setName(e.target.value)}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="phone">
                                <Form.Label className='text-light' column sm="3">
                                    Phone
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Phone..."
                                        onChange={e => setPhone(e.target.value)}
                                    />
                                </Col>
                            </Form.Group>
                            <Button type='submit' onSubmit={handleSubmit} variant="outline-light">Add</Button>{' '}
                            <FaBeer/>
                        </Card.Body>
                    </Card>
                </div>
            </div>   
        </div>

        </Form>
    )
}

export default Todo