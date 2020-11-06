import React from 'react';
import { observer } from 'mobx-react';
import classes from './header.module.scss';
import NavBar from './../navbar/navbar';
import router from '../../store/router';
import cartModel from '../../store/cart'
import cartImg from '../../Images/cart.png'



let  Header = () => {

    
    
        return (
            <div className={classes.header}>
                <div className={classes.header__logo}>
                <img src='./logo.PNG' alt={'logo'} className={classes.header__logo_size} onClick={() => router.moveTo('content')}/>
                </div>
                <div className={classes.header__navbar}>
                    <NavBar />
                </div>
                <div className={classes.header__cart}>
                    +7-(707)-777-77-77
                    <img src={cartImg} alt={'cart'} onClick={() => router.moveTo('cart')} className={classes.header__cart_img}/>
                   {cartModel.cart.length}
            </div>
            </div>
        )
    }



export default observer(Header);