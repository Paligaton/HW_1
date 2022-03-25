let i = 0
while (i<4)console.log(i++)
while (i<100) {
    let flag = true
    let d = 2
    while (flag){
        if (i%d == 0){
            flag = false
        }
        if (d>(i/2)){
            console.log(i)
            break
        }
        d++
    }
    i++
}