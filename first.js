function Captalize(str1) {
	// write your code here
    let upper = str1[0].toLocaleUpperCase('en-US');
    return upper+str1.slice(1);
}

console.log(Captalize("Hello All"));
