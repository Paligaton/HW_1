let arrBasket = [[1,2,3],[1,1,3],[10,15,3]] /// первый массив - id товара, второй массив - коилчество товаров, третий - стоимость товара
function countBasketPrice(arr){
    let price = 0
    for (let i = 0; i<arr[0].length;i++ ){
        price += arr[1][i]*arr[2][i]
    }
    return price
}
console.log(countBasketPrice(arrBasket))