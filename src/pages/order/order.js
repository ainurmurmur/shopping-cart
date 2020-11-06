import React from 'react';
import {Form, Button, Modal} from 'react-bootstrap';
import OrderModel from '../../store/order';
import { observer } from 'mobx-react';
import router from '../../store/router.js';
import classes from './order.module.scss';
import PropTypes from 'prop-types';

let Order = observer( class Order extends React.Component{


    static propTypes = {
        value: PropTypes.any,
        onChange: PropTypes.func,
        nativeProps: PropTypes.object,
        show:PropTypes.func,
        changeFormData: PropTypes.func,
        formData:PropTypes.any,
        confirm: PropTypes.func,
    }

    render(){
        let formFields = [];

        for(let name in OrderModel.state.formData){
            let field =  OrderModel.state.formData[name];
            
            formFields.push(
                <Form.Group key={name} controlId={'order-form-' + name} className={classes.order__form}>
                    <Form.Control 
                        className={classes.order__input}
                        type="text" 
                        value={field.value}
                        placeholder={field.label}
                        onChange={(e) => OrderModel.changeFormData(name, e.target.value)}
                    />
                </Form.Group>
            );
        }
        let checkForm = [];
        for(let key in OrderModel.state.formData){
            let data =  OrderModel.state.formData[key];
            
            checkForm.push(
                <div key={key} controlId={'order-form-' + key} className={classes.order__modal}>
                   <h5>{data.label}:  {data.value}</h5>
                </div>
            );
        }

        return (
            <div className={classes.order}>
                <b><h2>Заказ пончиков</h2></b>
                <Form>
                    {formFields}
                </Form>
                <Button onClick={() => router.moveTo('cart')}  className={classes.order__btn_back}>
                    Назад
                </Button>
                &nbsp;
                <Button onClick={() =>OrderModel.show()}  className={classes.order__btn_order}
                 disabled={!OrderModel.state.formData.name.value 
                    || !OrderModel.state.formData.adress.value 
                    || !OrderModel.state.formData.phone.value }
                >
                    Заказать
                </Button>
                <Modal show={OrderModel.showModal} backdrop="static" >
                    <Modal.Header>
                        <Modal.Title>Просим проверить информацию</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {checkForm}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() =>OrderModel.hide()}>
                            Назад
                        </Button>
                        <Button variant="primary" onClick={() => router.moveTo('result')}  
                        >
                           Отправить
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
)

export default Order