import React from 'react';
import cartModel from '../../store/cart';
import orderModel from '../../store/order';
import { observer } from 'mobx-react';
import classes from './result.module.scss';
import router from '../../store/router.js';
import PropTypes from 'prop-types';


 class Result extends React.Component{

 
    static propTypes = {
        reset: PropTypes.func,
    }
   
    render(){
       let resetCart=()=>{
            cartModel.reset()
            router.moveTo('content');
             
         }
       
        return (
            <div className={classes.result}>
                <b><h2>Спасибо за заказ, {orderModel.state.formData.name.value}!</h2></b>
                <h5> Сумма к оплате <strong>{cartModel.total} тенге</strong>. Наши менеджеры свяжутся с вами в ближайшее время.</h5>
                <button className={classes.result__btn} onClick={()=>resetCart()}>
                    Вернуться на главную
                </button>
            </div>
        )
    }
}

export default observer(Result)