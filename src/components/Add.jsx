import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from 'react-bootstrap';
import User from './User';
import {v4 as uuid} from "uuid";
import { useNavigate} from 'react-router-dom';


export default function Add() {

    let histroy = useNavigate();
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[dob,setDob] = useState("");
    const[phone,setPhone] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        const id = uuid();
        let uniqueId = id.slice(0,1);
         
        let Name=name,Email=email,Dob=dob,Phone=phone;

        User.push({id:uniqueId, name:Name, email:Email, dob:Dob, phone:Phone});
        histroy("/");

    }
  return (
    <div>
      <Form className='d-grid gap-2' style={{margin:'12rem'}} >
        <Form.Group className='mb-3' controlId='formName'>
        <Form.Control type='text' placeholder='Enter Name' required onChange={(e)=>setName(e.target.value)}/>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formEmail'>
        <Form.Control type='email' placeholder='Email' required onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formDob'>
        <Form.Control type='date'  required onChange={(e)=>setDob(e.target.value)}/>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formPhone'>
        <Form.Control type='number' placeholder='Phone number' required onChange={(e)=>setPhone(e.target.value)}/>
        </Form.Group>
        <Button type='submit' onClick={(e)=>handleSubmit(e)}>Submit</Button>
      </Form>
    </div>
  )
}
