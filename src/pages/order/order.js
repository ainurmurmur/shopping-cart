import React from 'react';
import {Form, Button, Modal} from 'react-bootstrap';
import OrderModel from '../../store/order'
import { observer } from 'mobx-react';
import router from '../../store/router.js';

let Order = observer( class Order extends React.Component{

    render(){
        let formFields = [];

        for(let name in OrderModel.state.formData){
            let field =  OrderModel.state.formData[name];
            
            formFields.push(
                <Form.Group key={name} controlId={'order-form-' + name}>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={field.value}
                        onChange={(e) => OrderModel.changeFormData(name, e.target.value)}
                    />
                </Form.Group>
            );
        }

        return (
            <div>
                <h2>Order</h2>
                <hr/>
                <Form>
                    {formFields}
                </Form>
                <Button variant="warning"  onClick={() => router.moveTo('cart')}>
                    Back to cart
                </Button>
                &nbsp;
                <Button variant="primary" onClick={OrderModel.showModal}>
                    Apply order
                </Button>
                <Modal show={OrderModel.showModal} backdrop="static">
                    <Modal.Header closeButton>
                        <Modal.Title>Check information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        content
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary">
                            Back
                        </Button>
                        <Button variant="primary" >
                            Send
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
)

export default Order