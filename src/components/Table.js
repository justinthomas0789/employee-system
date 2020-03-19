import React from 'react';
import { Table, Alert } from 'react-bootstrap';

const EmployeeTable = (props) => {
    let phoneChildren=[],addressChildren=[];
    props.users.map((user,key)=>{
        user.phone.forEach((item,index)=>{
            phoneChildren.push(<p key={index}>{item}</p>)
        })
        user.address.forEach((item,index)=>{
            addressChildren.push(<p key={index}>{item}</p>) 
        })
    })
    console.log(props.users.phone)
    return (
        <>
            {(props.users.length>0)? 
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Department</th>
                        <th>Blood Group</th>
                        <th>Address</th>
                        <th>Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.users.map((item,key)=>{
                            return(
                                <tr key={key}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.department}</td>
                                    <td>{item.bloodg}</td>
                                    <td>{addressChildren}</td>
                                    <td>{phoneChildren}</td>
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