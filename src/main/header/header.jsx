import React from 'react';
import {observer} from 'mobx-react';
import classes from './header.module.scss';
import router from '../../store/router';
import NavBar from './../navbar/navbar';


const Header = observer (class Header extends React.Component{
    render(){
        return (
            <div className={classes.header}>
                <div  className={classes.__logo}>
            </div>
            <div  className={classes.__navbar}>
                <NavBar />
            </div>
            <div  className={classes.__cart}>
            +7-(707)-777-77-77
            icon
            </div>
            </div>
        )
    }
})


export default Header;