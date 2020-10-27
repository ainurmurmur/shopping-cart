import React from 'react';
import AppMinMax from './hw2/5-norm.js';

export default class extends React.Component{
    state = {
        products: [
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
        ]
    }

    changeCnt(i, cnt){
        // по смысле this.state.products[i].current = cnt;

        let newProducts = [...this.state.products];
        let newProduct = {...newProducts[i]};
        newProduct.current = cnt;
        newProducts[i] = newProduct;
        this.setState({products: newProducts});
    }
    onDelete(id){
    
         this.setState({...this.state,
                                products:[...this.state.products.filter(el=>el.id !==id)]})
       
    }
    
    render(){
        let sum=this.state.products.reduce((sum,product) => {
            return sum +(product.price*product.current);
        },0)
        let productsRows = this.state.products.map((product, i) => {
             
            let totalPrice = product.price * product.current
            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <AppMinMax min={1} 
                                   max={product.rest} 
                                   cnt={product.current} 
                                   onChange={(cnt) => this.changeCnt(i, cnt)}
                        />
                    </td>
                    <td>{totalPrice}</td>
                    <td><button onClick={()=>this.onDelete(product.id)}>Delete</button></td>
                </tr>

            );
        });
//console.log(this.state.products[products.length].price)
        return (
            <div>
                <h2>Cart</h2>
                <table>
                    <tbody>
                        <tr>
                            <td><b>Title</b></td>
                            <td><b>Price</b></td>
                            <td><b>Count</b></td>
                            <td><b>Total</b></td>
                        </tr>
                        {productsRows}
                         <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><b>{sum}</b></td>
                         </tr>
                    </tbody> 
                </table>
            </div>
        );
    }
}