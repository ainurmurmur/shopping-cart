import React from 'react';
import {observable, computed, action, decorate} from 'mobx';
import Cart from '../pages/cart/cart';
import Order from '../pages/order/order';
import Result from '../pages/result/result';
import Items from '../pages/items/items'
import Item from '../pages/item/item'

class Router{
    routes = {
        items: ()=> <Items />,
        item: () => <Item />,
        cart: () => <Cart/>,
        order: () => <Order/>,
        result: () => <Result/>,
    }

     activeRoute = 'items'

     get component(){
        // проверка есть ли роут в списке, если нет -> p404
        return this.routes[this.activeRoute]();
    }

     moveTo(route){
        // проверка есть ли роут в списке
        this.activeRoute = route;
    }
}
decorate(Router,{
    activeRoute:observable,
    component:computed,
    moveTo: action,
});
export default new Router();


// server api
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