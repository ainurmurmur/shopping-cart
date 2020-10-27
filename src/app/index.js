import React from 'react';
import { observer } from 'mobx-react';
import router from '../store/router';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage from '../main/main';
import classes from './app.module.scss'

const App = observer(class App extends React.Component {
    render() {
        return (    
            <div className={classes.container}>
                    <MainPage />
            </div>
        )
    }
})


export default App;