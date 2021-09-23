function repeatFunc(str1, count) {
	// write your code here
    let assemble = ""
    while(count >0){
        assemble+=str1
        count--;
    }
    return assemble
}

console.log(repeatFunc('hello',4));