import React from 'react';
import { Form, Button,Row,Col } from 'react-bootstrap';

const EmployeeForm = (props) => {
    let phoneChildren=[],addressChildren=[];
    for(let i=0;i<props.phoneCount;i++){
        phoneChildren.push(<Form.Control type="text" key={i} data-id ={i} placeholder="Number" name='phone' value={props.phone[i]||''} onChange={props.handleChange} />) 
    }
    for(let i=0;i<props.addressCount;i++){
        addressChildren.push(<Form.Control as="textarea" key={i} data-id ={i} rows="3" placeholder="Address" name='address' value={props.address[i]} onChange={props.handleChange} />)
    }
    return (
        <div className='employeeForm'>
            <Form className='employeeForm__form' onSubmit={props.submitForm}>
                <Form.Group controlId="formGroupName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" name='name' value={props.name} onChange={props.handleChange} />
                </Form.Group>

                <Form.Group controlId="formGroupAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="text" placeholder="Age" name='age' value={props.age} onChange={props.handleChange} />
                </Form.Group>
                
                <Form.Group controlId="formGroupdep">
                    <Form.Label>Department</Form.Label>
                    <Form.Control type="text" placeholder="Department" name='department' value={props.department} onChange={props.handleChange} />
                </Form.Group>
                <Form.Group controlId="formGroupblood">
                    <Form.Label>Blood Group</Form.Label>
                    <Form.Control type="text" placeholder="Blood Group" name='bloodg' value={props.bloodg} onChange={props.handleChange} />
                </Form.Group>
                <Form.Group controlId="formGroupNumber">
                    <Form.Label>Contact Number</Form.Label>
                    {
                        phoneChildren
                    }
                    <Button variant="link" href="#" name='address link' onClick={(e)=>props.onLinkClick(e,"phone")}>+ Add another phone</Button>
                </Form.Group>
                <Form.Group controlId="formGroupaddr">
                    <Form.Label>Address</Form.Label>
                    {
                        addressChildren
                    }
                    <Button variant="link" href="#" name='address link' onClick={(e)=>props.onLinkClick(e,"address")}>+ Add another address</Button>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col sm={{ span: 10 }}>
                        <Button type="submit">Submit</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
};

export default EmployeeForm;