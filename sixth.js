function OddOrEven(num) {
	// write your code here
    let strNum = num.toString(10);
    let sum=0;
    for(let i =0;i<strNum.length;i++){
        sum+=Number(strNum[i]);
    }

    return sum%2===0?'even':'odd'
}
console.log(OddOrEven(43))
console.log(OddOrEven(373))
console.log(OddOrEven(4433))
console.log(OddOrEven(4))