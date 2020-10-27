import { observable, computed, action, decorate } from 'mobx';

class Cart{
     products = getProducts()

     get total(){
        return this.products.reduce((t, pr) => t + pr.price * pr.current, 0);
    }

     change(i, cnt){
        this.products[i].current = cnt;
    }

     remove(i){
        this.products.splice(i, 1);
    }
}
decorate(Cart,{
    products:observable,
    total:computed,
    change: action,
    remove:action
});

export default new Cart();





// server api
function getProducts(){
    return [
        {
            id: 100,
            title: 'Ipnone 11Pro',
            price: 450000,
            rest: 10,
            current: 1
        },
        {
            id: 101,
            title: 'Samsung Galaxy s10',
            price: 230000,
            rest: 5,
            current: 1
        },
        {
            id: 103,
            title: 'Nokia C2',
            price: 150000,
            rest: 2,
            current: 1
        },
        {
            id: 105,
            title: 'Huawei p30 pro',
            price: 340000,
            rest: 8,
            current: 1
        }
    ];
}