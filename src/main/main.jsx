import React from 'react';
import router from '../store/router';
import {observer} from 'mobx-react';


const App = observer (class App extends React.Component{
    render(){
        return (
            <div className="container">
                <hr/>
                {router.component}
            </div>
        )
    }
})


export default App;