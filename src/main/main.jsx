import React from 'react';
import {observer} from 'mobx-react';
import router from '../store/router';
import Header from '../main/header/header'
import classes from './main.module.scss';


const MainPage = observer (class MainPage extends React.Component{
    render(){
        return (
            <div>
              <header>
              <Header />
              </header>
              <div className={classes.content}>
                 {router.component}
              </div>
              <footer>
              </footer>

            </div>
        )
    }
})


export default MainPage;