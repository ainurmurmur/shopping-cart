import React from 'react';
import { observer } from 'mobx-react';
import classes from './header.module.scss';
import NavBar from './../navbar/navbar';
import router from '../../store/router';
import cartModel from '../../store/cart'


let  Header = () => {

    
    
        return (
            <div className={classes.header}>
                <div className={classes.header__logo}>
                <img src='./logo.PNG' alt={'logo'} className={classes.header__logo_size}/>
                </div>
                <div className={classes.header__navbar}>
                    <NavBar />
                </div>
                <div className={classes.header__cart}>
                    +7-(707)-777-77-77
                    <img src='./cart.PNG' alt={'cart'} onClick={() => router.moveTo('cart')} className={classes.header__cart_img}/>
                   {cartModel.totalCount}
            </div>
            </div>
        )
    }



export default observer(Header);