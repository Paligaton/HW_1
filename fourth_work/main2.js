shop_cart={
    id:[1,2,3],
    count:[1,1,3],
    price:[10,15,3],
    fprice:0,
    name:["наушники","смартфон","телевизор"],
    counting:function (){for(let i= 0;i<this.id.length;this.fprice+=(this.count[i]*this.price[i]),i++,console.log(i)){}
    }
}
shop_cart.counting()
console.log(shop_cart)