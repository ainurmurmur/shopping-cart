import { observable, computed, action, decorate } from 'mobx';
// import donut1 from '../../public/donut1.png'



let cnt;

 

class Cart {
    products = getProducts()
    
    
    get totalCount() {
        
    let totalSweetCnt = this.products.sweet.reduce((t, pr) => t + pr.current, 0);
    let totalWithCremeCnt = this.products.withCreme.reduce((t, pr) => t + pr.current, 0);
    let totalNotSweetCnt = this.products.notSweet.reduce((t, pr) => t +  pr.current, 0);
    let totalCoffeeCnt = this.products.coffee.reduce((t, pr) => t +  pr.current, 0);
    return totalSweetCnt + totalWithCremeCnt + totalNotSweetCnt + totalCoffeeCnt
    }

    get total() {
        let totalSweet = this.products.sweet.reduce((t, pr) => t + pr.price * pr.current, 0);
        let totalWithCreme = this.products.withCreme.reduce((t, pr) => t + pr.price * pr.current, 0);
        let totalNotSweet = this.products.notSweet.reduce((t, pr) => t + pr.price * pr.current, 0);
        let totalCoffee = this.products.coffee.reduce((t, pr) => t + pr.price * pr.current, 0);
        return totalSweet + totalWithCreme + totalNotSweet + totalCoffee
     }
     
    change(i, cnt, type) {
        this.products[type][i].current = cnt;
         
     }
    remove(i) {
        this.products.splice(i, 1);
    }
    add(i, type){
        this.products[type][i].current = cnt;
    }
}
decorate(Cart, {
    products: observable,
    total: computed,
    change: action,
    remove: action,
    totalCount: computed
});

export default new Cart();



function getProducts() {
    return {
        sweet: [
            {
                src: './donut8.PNG',
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
                src: './donut5.PNG',
                id: 3,
                title: 'Малиновый пончик',
                price: 600,
                rest: 2,
                current: 0
            },
            {
                src: './donut4.PNG',
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
                src: './donuts8.PNG',
                id: 6,
                title: 'Пончик с шариками',
                price: 900,
                rest: 8,
                current: 0
            },
            {
                src: './donuts13.PNG',
                id: 7,
                title: 'Пончик с поливкой',
                price: 700,
                rest: 8,
                current: 0
            },
            {
                src: './donuts4.PNG',
                id: 8,
                title: 'Клубнично-банановый',
                price: 800,
                rest: 8,
                current: 0
            }
        ],
        withCreme: [
            {
                src: './donuts9.PNG',
                id: 9,
                title: 'Молочный шоколад',
                price: 800,
                rest: 8,
                current: 0
            },
            {
                src: './donuts12.PNG',
                id: 10,
                title: 'Горкий шоколад',
                price: 500,
                rest: 8,
                current: 0
            },
            {
                src: './donuts10.PNG',
                id: 11,
                title: 'Карамельный пончик',
                price: 750,
                rest: 8,
                current: 0
            },
            {
                src: './donuts11.PNG',
                id: 12,
                title: 'Ореховая сгущенка',
                price: 700,
                rest: 8,
                current: 0
            }
        ],
        notSweet: [
            {
                src: './donuts0.PNG',
                id: 12,
                title: 'Вкусно просто так',
                price: 700,
                rest: 8,
                current: 0
            },
            {
                src: './donuts14.PNG',
                id: 13,
                title: 'Несладкая сладость',
                price: 450,
                rest: 8,
                current: 0
            }, {
                src: './donut4.PNG',
                id: 14,
                title: 'Фруктовый джаз',
                price: 600,
                rest: 45,
                current: 0
            }
        ],
        coffee: [
            {
                src: './coffee.PNG',
                id: 15,
                title: 'Эспрессо',
                price: 600,
                rest: 40,
                current: 0
            },
            {
                src: './coffee5.PNG',
                id: 16,
                title: 'Латте',
                price: 700,
                rest: 30,
                current: 0
            },
            {
                src: './coffe4.PNG',
                id: 17,
                title: 'Карамельный со льдом',
                price: 1200,
                rest: 25,
                current: 0
            },
            {
                src: './coffee6.PNG',
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
