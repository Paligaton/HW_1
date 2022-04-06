function remake(number) {
    if (number<1000){
        d={}
        if (number>99)d.hundreds=Math.floor(number/100)
        if (number>9)d.dozens=Math.floor((number%100)/10)
        d.units=number%10
        return d
    }
    else {
        console.log('number больше 999')
    }
}
b=remake(596)
console.log(b)