import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table } from 'react-bootstrap';
import User from './User';
import { useNavigate, Link } from 'react-router-dom';

export default function Home() {

    let histroy = useNavigate();

    const handleEdit = (name,email,dob,phone,id)=>{
        localStorage.setItem('Name',name);
        localStorage.setItem('Email',email);
        localStorage.setItem('Dob',dob);
        localStorage.setItem('Phone',phone);
        localStorage.setItem('Id',id);
    }

    const handleDelete=(id)=>{
        var index = User.map(function(e){
            return e.id;
        }).indexOf(id);
        User.splice(index,1);

        histroy('/');
    }
  return (
    <>
        <div style={{margin:'200px'}}>
            <h1 style={{marginLeft:'37%',color:'blue',fontSize:'4em'}}>Create User</h1>
            <Table bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Dob</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        User && User.length > 0 ? User.map((e,i)=>{
                            return (
                                <tr key={i}>
                                    <td>{e.name}</td>
                                    <td>{e.email}</td>
                                    <td>{e.dob}</td>
                                    <td>{e.phone}</td>
                                    <td>
                                    <Link to='/edit'>
                                    <Button onClick={()=>handleEdit(e.name,e.email,e.dob,e.phone,e.id)}>Edit</Button>
                                    </Link>
                                    &nbsp;
                                    <Button onClick={()=>handleDelete(e.id)}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        }) :
                        "No data available"
                    }
                </tbody>
            </Table>
            <br />
            <Link className='d-grid gap-2' to='/create'><Button size='lg'>Create</Button></Link>
        </div>
    </>
  )
}
