import React, { useState } from 'react';
import { Table, Button, ButtonGroup, Alert } from 'react-bootstrap';

const EmployeeTable = (props) => {
    let phoneChildren=[],addressChildren=[];
    props.users.map((user)=>{
        user.phone.forEach((item,index)=>{
            phoneChildren.push(<div key={index}><p>{item}</p><input className="d-none" type="text" value={item} data-id={index} name='phone' onChange={props.handleChange}/></div>)
        })
        user.address.forEach((item,index)=>{
            addressChildren.push(<div key={index}><p>{item}</p><input className="d-none" type="text" value={item} data-id={index}  name='address' onChange={props.handleChange}/></div>) 
        })
    })
    let updateUser = (e,id) => {
        let action = e.target.getAttribute("data-action");
        if(action === 'edit'){
            e.target.setAttribute("data-action","update");
            e.target.innerHTML="Save";
        } else{
            e.target.setAttribute("data-action","edit");
            props.updateUser(id);
            e.target.innerHTML="Edit";
        }
    }
    let deleteUser = (e,id) => {
        props.deleteUser(id);
    }
    return (
        <>
            {(props.users.length>0)? 
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Department</th>
                            <th>Blood Group</th>
                            <th>Address</th>
                            <th>Number</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.users.map((item,key)=>{
                            return(
                                <tr key={key}>
                                    <td><p>{item.id}</p></td>
                                    <td>
                                        <p>{item.name}</p>
                                        <input type="text" name='name' className="d-none" value={item.name} onChange={props.handleChange}/>
                                    </td>
                                    <td>
                                        <p>{item.age}</p>
                                        <input type="text" name='age' className="d-none" value={item.age} onChange={props.handleChange}/>
                                    </td>
                                    <td>
                                        <p>{item.department}</p>
                                        <input type="text" name='department' className="d-none" value={item.department} onChange={props.handleChange}/>    
                                    </td>
                                    <td>
                                        <p>{item.bloodg}</p>
                                        <input type="text" name='bloodg' className="d-none" value={item.bloodg} onChange={props.handleChange}/>
                                    </td>
                                    <td>{addressChildren}</td>
                                    <td>{phoneChildren}</td>
                                    <td>
                                        <ButtonGroup>
                                            <Button variant="primary" data-action="edit" onClick={(e)=>updateUser(e,key)}>Edit</Button>
                                            {/* <Button variant="success" onClick={(e)=>editDetails(e,key)}>Save</Button> */}
                                            <Button variant="danger" onClick={(e)=>deleteUser(e,key)}>Delete</Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                :
                <Alert><h1>No data to display</h1></Alert>
            }
        </>
    );
};

export default EmployeeTable;