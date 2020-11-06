import React from 'react';
import {observable, computed, action, decorate} from 'mobx';
import Cart from '../pages/cart/cart';
import Order from '../pages/order/order';
import Result from '../pages/result/result';
import Items from '../pages/items/items'
import Item from '../pages/item/item'
import Content from '../pages/content/content';
import Contacts from '../pages/others/contacts';
import WhyWe from '../pages/others/whywe';
import About from '../pages/others/about';

class Router{
    routes = {  
        content:  ()=> <Content />,
        items: ()=> <Items />,
        item: () => <Item />,
        cart: () => <Cart/>,
        order: () => <Order/>,
        result: () => <Result/>,
        about: () => <About/>,
        whywe: () => <WhyWe/>,
        contacts: () => <Contacts/>,
    }

     activeRoute = 'content'

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
