import React from 'react';


 function ShowCongrats(props){
    return (
        <div>
            <h2>Thank you for your order! </h2>
            <p>Yout order total price: {props.state.total}</p>
        </div>
    );
}

export default ShowCongrats