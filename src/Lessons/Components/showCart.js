import React from 'react';
import AppMinMax from '../hw3/inputs/minmax/minmax';
import PropTypes from 'prop-types';

let showCart = ( props ) =>{

    let total = props.state.products.reduce((t, pr) => {
        return t + (pr.current * pr.price);
    }, 0);

    let productsRows = props.state.products.map((product, i) => {
        return (
            <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                    <AppMinMax min={1} 
                               max={product.rest} 
                               cnt={product.current} 
                               onChange={(cnt) => props.changeCnt(i, cnt)}
                    />
                </td>
                <td>{product.price * product.current}</td>
                <td>
                    <button onClick={() => props.remove(i)}>
                        X
                    </button>
                </td>
            </tr>
        );
    });

    return (
        <div>
            <h2>Cart</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Price</td>
                        <td>Count</td>
                        <td>Total</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {productsRows}
                </tbody> 
            </table>
            <h3>Total: {total}</h3>
            <hr/>
            <button onClick={()=>props.onSend(total)}>Send</button>
        </div>
    );
}

showCart.propTypes = {
    changeCnt: PropTypes.func.isRequired,
    onSend:PropTypes.func.isRequired,
  };



export default showCart

