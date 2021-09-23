function isInRange(x, y, z) {
    let max, min;
    if(x>z){
        max = x;
        min = z;
    }
    else if(z>x){
        max = z;
        min = x;        
    }
    else {
        max = z;
        min = x;
    }

    let isHere = false;
    for(let i = min;i<=max;i++){
        if(y === i){
            isHere = true;
        }
    }
    return isHere
}
console.log(isInRange(1,2,3))
console.log(isInRange(-1,2,3))
console.log(isInRange(1,2,-3))
console.log(isInRange(2,3,4))
console.log(isInRange(-10,-20,-21))