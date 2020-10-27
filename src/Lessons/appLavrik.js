import React from 'react';
import styles from './hw3/app.module.css';
import { Button } from 'react-bootstrap';
import ShowPayload from './Components/showPayload'
import ShowCart from './Components/showCart'
import PropTypes from 'prop-types';




 class App extends React.Component{
    state = {
        products: getProducts(),
        payload: getPayload(),
        formDone: false,
        showCongrats: false,
        showModal: false,
        close: false,
        total:''
    }

    changeCnt =(i, cnt) =>{
        let products = [...this.state.products];
        products[i] = {...products[i], current: cnt};
        this.setState({products});
    }
    

    remove=(i)=>{
        // let products = [...this.state.products].filter((pr, j) => j !== i)
        let products = [...this.state.products];
        products.splice(i, 1);
        this.setState({products});
    }

    sendForm = (total) => {
        console.log(total)
        this.setState({formDone: true});
        this.setState({total: total})
    }
     saveDataName =(e) => {
        let payload = {...this.state.payload};
        payload = {...payload, name: e};
        this.setState({payload});
    }
     saveDataAdress =(e) => {
        let payload = {...this.state.payload};
        payload = {...payload, adress: e};
        this.setState({payload});
    }
     saveDataLogin =(e) => {
        let payload = {...this.state.payload};
        payload = {...payload, email: e};
        this.setState({payload});
    }
    saveDataSurname =(e) => {
        let payload = {...this.state.payload};
        payload = {...payload, surname: e};
        this.setState({payload});
    }
    showCongratsForm=()=>{
        this.setState({showCongrats: true});
    }
    showModalForm=()=>{
        if(this.state.payload.name && this.state.payload.surname 
            && this.state.payload.email && this.state.payload.adress)  {
        this.setState({showModal: true})
        this.setState({close: false});
    }
    else{
        alert('Add your information!')
    }
    }
    toClose =()=>{
        this.setState({close: true});
        this.setState({showModal: false})
    }
    render(){
        
        // let page = this.state.formDone ? 
        //                 <ShowPayload state={this.state}/> :
        //                 <ShowCart  onSend={this.sendForm} state={this.state}/>
        //(productsRows, total, this.sendForm);
        return (
            <div className="container">
                {/* {page} */}
            {this.state.formDone ? 
                    <ShowPayload state={this.state} saveDataName={this.saveDataName} showModalForm={this.showModalForm}
                    saveDataAdress={this.saveDataAdress} showCongratsForm={this.showCongratsForm}
                    saveDataLogin={this.saveDataLogin} saveDataSurname={this.saveDataSurname}
                    toClose={this.toClose} /> :
                    <ShowCart  onSend={this.sendForm} state={this.state} changeCnt={this.changeCnt} remove={this.remove}/>}
                <hr/>
            </div>
        );
    }
}


function getProducts(){
    return [
        {
            id: 100,
            title: 'Ipnone 200',
            price: 12000,
            rest: 10,
            current: 1
        },
        {
            id: 101,
            title: 'Samsung AAZ8',
            price: 22000,
            rest: 5,
            current: 1
        },
        {
            id: 103,
            title: 'Nokia 3310',
            price: 5000,
            rest: 2,
            current: 1
        },
        {
            id: 105,
            title: 'Huawei ZZ',
            price: 15000,
            rest: 8,
            current: 1
        }
    ];
}

function getPayload(){
    return  {
            name: '',
            adress: '',
            email: '',
            surname: '',
          
        }
    
}

App.propTypes = {
    changeCnt: PropTypes.func,
    sendForm:PropTypes.func,
    remove:PropTypes.func,
    setState:PropTypes.func,
    saveDataName: PropTypes.func,
    saveDataAdress:PropTypes.func,
    saveDataLogin:PropTypes.func,
    saveDataSurname:PropTypes.func,
    toClose:PropTypes.func,
  };

export default App