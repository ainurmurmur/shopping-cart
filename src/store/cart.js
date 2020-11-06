import { observable, computed, action, decorate } from 'mobx';
// import donut1 from '../../public/donut1.png'




class Cart {

    cnt;
    products = getProducts();
    cart = getCart();

    get total() {
        return this.cart.reduce((t, pr) => t + pr.price * pr.current, 0)
    }
    change(i, cnt, type) {
        this.products[type][i].current = cnt;
    }
    changeInCart(i, cnt) {
        this.cart[i].current = cnt;
    }
    remove(index) {
        this.cart=this.cart.filter(el => el.id !== index)
      
        // this.cart.splice(i, 1);
    }
    add(i, type) {
        if(!this.cart.includes(this.products[type][i])){
            this.cart.push(this.products[type][i])
        }
        
    }
    reset() {
        this.cart = [];
        for(let key in this.products){
            for(let i = 0; i<this.products[key].length; i++ ){
                this.products[key][i].current = 0;
            }
        }
    }
}
decorate(Cart, {
    products: observable,
    total: computed,
    change: action,
    remove: action, 
    cart: observable,
    typeOfItem: observable,
    changeInCart: action,
    reset: action
});

export default new Cart();


function getCart() {
    return []
}


function getProducts() {
    return {
        sweet: [
            {
                src: './donut8.png',
                id: 1,
                title: 'Пончик в шоколаде',
                price: 800,
                rest: 10,
                current: 0
            },
            {
                src: './donut1.png',
                id: 2,
                title: 'Пончик с посыпкой',
                price: 750,
                rest: 5,
                current: 0
            },
            {
                src: './donut5.png',
                id: 3,
                title: 'Малиновый пончик',
                price: 600,
                rest: 2,
                current: 0
            },
            {
                src: './donut4.png',
                id: 4,
                title: 'Классический пончик',
                price: 500,
                rest: 8,
                current: 0
            },
            {
                src: './donuts16.png',
                id: 5,
                title: 'Голубая лагуна',
                price: 600,
                rest: 8,
                current: 0
            },
            {
                src: './donuts8.png',
                id: 6,
                title: 'Пончик с шариками',
                price: 900,
                rest: 8,
                current: 0
            },
            {
                src: './donuts13.png',
                id: 7,
                title: 'Пончик с поливкой',
                price: 700,
                rest: 8,
                current: 0
            },
            {
                src: './donuts4.png',
                id: 8,
                title: 'Клубнично-банановый',
                price: 800,
                rest: 8,
                current: 0
            }
        ],
        withCreme: [
            {
                src: './donuts9.png',
                id: 9,
                title: 'Молочный шоколад',
                price: 800,
                rest: 8,
                current: 0
            },
            {
                src: './donuts12.png',
                id: 10,
                title: 'Горкий шоколад',
                price: 500,
                rest: 8,
                current: 0
            },
            {
                src: './donuts10.png',
                id: 11,
                title: 'Карамельный пончик',
                price: 750,
                rest: 8,
                current: 0
            },
            {
                src: './donuts11.png',
                id: 12,
                title: 'Ореховая сгущенка',
                price: 700,
                rest: 8,
                current: 0
            }
        ],
        notSweet: [
            {
                src: './donuts0.png',
                id: 12,
                title: 'Вкусно просто так',
                price: 700,
                rest: 8,
                current: 0
            },
            {
                src: './donuts14.png',
                id: 13,
                title: 'Несладкая сладость',
                price: 450,
                rest: 8,
                current: 0
            }, {
                src: './donut4.png',
                id: 14,
                title: 'Фруктовый джаз',
                price: 600,
                rest: 45,
                current: 0
            }
        ],
        coffee: [
            {
                src: './coffee.png',
                id: 15,
                title: 'Эспрессо',
                price: 600,
                rest: 40,
                current: 0
            },
            {
                src: './coffee5.png',
                id: 16,
                title: 'Латте',
                price: 700,
                rest: 30,
                current: 0
            },
            {
                src: './coffe4.png',
                id: 17,
                title: 'Карамельный со льдом',
                price: 1200,
                rest: 25,
                current: 0
            },
            {
                src: './coffee6.png',
                id: 18,
                title: 'Крепкий со льдом',
                price: 1100,
                rest: 20,
                current: 0
            },
        ]
    }
}

//




// server api
// function getProducts() {
//     return [
//         {
//             src: './donut8.PNG',
//             id: 100,
//             title: 'Ipnone 11Pro',
//             price: 450000,
//             rest: 10,
//             current: 1
//         },
//         {
//             src: './donut1.png',
//             id: 101,
//             title: 'Samsung Galaxy s10',
//             price: 230000,
//             rest: 5,
//             current: 1
//         },
//         {
//             src: './donut5.PNG',
//             id: 103,
//             title: 'Nokia C2',
//             price: 150000,
//             rest: 2,
//             current: 1
//         },
//         {
//             src: './donut4.PNG',
//             id: 105,
//             title: 'Huawei p30 pro',
//             price: 340000,
//             rest: 8,
//             current: 1
//         },
//         {
//             src: './donuts1.png',
//             id: 105,
//             title: 'Huawei p30 pro',
//             price: 340000,
//             rest: 8,
//             current: 1
//         },
//         {
//             src: './donut4.PNG',
//             id: 105,
//             title: 'Huawei p30 pro',
//             price: 340000,
//             rest: 8,
//             current: 1
//         },
//         {
//             src: './donut4.PNG',
//             id: 105,
//             title: 'Huawei p30 pro',
//             price: 340000,
//             rest: 8,
//             current: 1
//         },
//         {
//             src: './donut4.PNG',
//             id: 105,
//             title: 'Huawei p30 pro',
//             price: 340000,
//             rest: 8,
//             current: 1
//         }
//     ];
// }
