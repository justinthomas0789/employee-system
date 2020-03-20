import React, { useState } from 'react';
import { Table, Button, ButtonGroup, Alert } from 'react-bootstrap';

const EmployeeTable = (props) => {
    let [empId, setEmpid] = useState(null);
    let updateUser = (e,id) => {
        let action = e.target.getAttribute("data-action");
        if(action === 'edit'){
            e.target.setAttribute("data-action","update");
            e.target.innerHTML="Save";
            setEmpid(id);
        } else{
            e.target.setAttribute("data-action","edit");
            e.target.innerHTML="Edit";
            setEmpid(null);
            let parent = document.getElementById("emp"+id);
            let inputElements = parent.querySelectorAll("input, textarea");
            let user={
                id:id+1,
                name: '',
                age: '',
                department: '',
                bloodg:'',
                address: [],
                phone: []
            };
            Array.prototype.map.call(inputElements,(element,key)=>{
                if(element.name==="phone"||element.name==="address"){
                    user[element.name].push(element.value)
                } else{
                    user[element.name]=element.value
                }
            })      
            props.updateUser(id,user);
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
                            <th>Number</th>
                            <th>Address</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.users.map((item,key)=>{
                            return(
                                <tr key={key} id={"emp"+key} className={(empId===key)?"edit":"update"}>
                                    <td><p>{item.id}</p></td>
                                    <td>
                                        <p>{item.name}</p>
                                        <input type="text" name='name' defaultValue={item.name}/>
                                    </td>
                                    <td>
                                        <p>{item.age}</p>
                                        <input type="text" name='age' defaultValue={item.age}/>
                                    </td>
                                    <td>
                                        <p>{item.department}</p>
                                        <input type="text" name='department' defaultValue={item.department}/>    
                                    </td>
                                    <td>
                                        <p>{item.bloodg}</p>
                                        <input type="text" name='bloodg' defaultValue={item.bloodg}/>
                                    </td>
                                    <td>{
                                        item.phone.map((item,index)=>{
                                            return(
                                              <div key={index} data-id={index}><p>{item}</p><input type="text" defaultValue={item} data-id={index} name='phone'/></div>  
                                            )
                                        })
                                    }</td>
                                    <td>{
                                        item.address.map((item,index)=>{
                                            return(
                                                <div key={index} data-id={index}><p>{item}</p><input type="text" defaultValue={item} data-id={index}  name='address'/></div> 
                                            )
                                        })    
                                    }</td>
                                    <td>
                                        <ButtonGroup>
                                            <Button variant="primary" data-action="edit" data-id={key} onClick={(e)=>updateUser(e,key)}>Edit</Button>
                                            <Button variant="danger" data-id={key} onClick={(e)=>deleteUser(e,key)}>Delete</Button>
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