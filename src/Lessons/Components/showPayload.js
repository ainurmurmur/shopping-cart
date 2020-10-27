import React from 'react';
import PropTypes from 'prop-types';
import ShowCongrats  from './showCongrats';
import { Button, Modal, Form } from 'react-bootstrap';

 class showPayload extends React.Component {

    
    render(){
              
        console.log(this.props.state)
    return ( 
        <div className="container">
             {this.props.state.showModal && !this.props.state.close ? <ModalDialog toClose={this.props.toClose}
             showCongratsForm={this.props.showCongratsForm} state={this.props.state}/> :
           
            <Form>
                <h1>Fill the form</h1>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name:</Form.Label>
              <Form.Control defaultValue={this.props.state.payload.name}
                 placeholder={'Name'} onBlur={(e)=>this.props.saveDataName(e.target.value)}/>
            </Form.Group>
          
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Surname:</Form.Label>
              <Form.Control defaultValue={this.props.state.payload.surname} placeholder={'Surname'} 
                onBlur={(e)=>this.props.saveDataSurname(e.target.value)}  />
            </Form.Group>
            
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Adress:</Form.Label>
              <Form.Control defaultValue={this.props.state.payload.adress} placeholder={'Adress'} 
                onBlur={(e)=>this.props.saveDataAdress(e.target.value)}/>
            </Form.Group>
            
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Email:</Form.Label>
              <Form.Control defaultValue={this.props.state.payload.email} placeholder={'email'}
                 onBlur={(e)=>this.props.saveDataLogin(e.target.value)} />
            </Form.Group>
            
            <Button onClick={this.props.showModalForm} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          }
        </div>

    );
}}

export let ModalDialog =(props) => {

    
    return (<>
        {props.state.showCongrats  ? <ShowCongrats state={props.state}/> :
    <Modal.Dialog>
  <Modal.Header>
    <Modal.Title>Confirm your order</Modal.Title>
  </Modal.Header>

  <Modal.Body>
        <b>Name:</b><p>{props.state.payload.name}</p>
        <b>Surname:</b><p>{props.state.payload.surname}</p>
        <b>Adress:</b><p>{props.state.payload.adress}</p>
        <b>Email:</b><p>{props.state.payload.email}</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={()=>props.toClose()}>Close</Button>
    <Button variant="primary" onClick={props.showCongratsForm}>Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>}
    </>
    )
}

export default showPayload;

showPayload.propTypes = {
    saveDataName: PropTypes.func.isRequired,
    saveDataAdress:PropTypes.func.isRequired,
    saveDataLogin:PropTypes.func.isRequired,
    saveDataSurname:PropTypes.func.isRequired,
    showCongratsForm:PropTypes.func,
    showModalForm: PropTypes.func
  };


  
            // <form>
            //       <h1>Fill the form</h1>
            //       <br></br>
            //       <hr></hr>
            //     <h2>Name:</h2><input defaultValue={this.props.state.payload.name} placeholder={'Name'} onBlur={(e)=>this.props.saveDataName(e.target.value)} />
            //     <h2>Surname:</h2><input defaultValue={this.props.state.payload.surname} placeholder={'Surname'} onBlur={(e)=>this.props.saveDataSurname(e.target.value)} />
            //     <h2>Adress:</h2><input defaultValue={this.props.state.payload.adress} placeholder={'Adress'} onBlur={(e)=>this.props.saveDataAdress(e.target.value)}/>
            //     <h2>Email:</h2><input defaultValue={this.props.state.payload.email} placeholder={'email'} onBlur={(e)=>this.props.saveDataLogin(e.target.value)} />
            //     <button onClick={this.props.showModalForm}>Save</button>
            // </form>