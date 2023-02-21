import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from 'react-bootstrap';
import User from './User';
import {v4 as uuid} from "uuid";
import { useNavigate, Link } from 'react-router-dom';

export default function Edit(){
    let histroy = useNavigate();
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[dob,setDob] = useState("");
    const[phone,setPhone] = useState("");
    const[id,setId]=useState("");

    var index = User.map(function(e){
        return e.id;
    }).indexOf(id);

    const handleSubmit = (e)=>{
        e.preventDefault();
        let data = User[index];

        data.name = name;
        data.email = email;
        data.dob = dob;
        data.phone = phone;

        histroy('/');
    }

    useEffect(()=>{
        setName(localStorage.getItem('Name'))
        setEmail(localStorage.getItem('Email'))
        setDob(localStorage.getItem('Dob'))
        setPhone(localStorage.getItem('Phone'))
        setId(localStorage.getItem('Id'));
    },[]);

    return (
        <>
            <Form className='d-grid gap-2' style={{margin:'12rem'}} >
                <Form.Group className='mb-3' controlId='formName'>
                <Form.Control type='text' placeholder='Enter Name' value={name} required onChange={(e)=>setName(e.target.value)}/>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formEmail'>
                <Form.Control type='email' placeholder='Email' value={email} required onChange={(e)=>setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formDob'>
                <Form.Control type='date' value={dob}  required onChange={(e)=>setDob(e.target.value)}/>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formPhone'>
                <Form.Control type='number' placeholder='Phone number' value={phone} required onChange={(e)=>setPhone(e.target.value)}/>
                </Form.Group>
                <Button type='submit' onClick={(e)=>handleSubmit(e)}>Update</Button>
            </Form>
        </>
    )
}