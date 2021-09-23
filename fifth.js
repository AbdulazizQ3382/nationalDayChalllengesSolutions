function replaceFunc(character) {
	// write your code here
    let alphabet = generatingAlphabet();
    let count1 = alphabet.indexOf(character);
    let reversing = alphabet.split('').reverse().join('');
    // let reversedChar = alphabet[alphabet.length-count1];
    return reversing.charAt(count1);  
}

function generatingAlphabet() {
    let a;
    for(i=9,a='';++i<36;)a+=i.toString(36)
    return a.toLocaleUpperCase('en-US');
}
console.log(replaceFunc("A"));
console.log(replaceFunc("B"));
console.log(replaceFunc("C"));
console.log(replaceFunc("D"));
console.log(replaceFunc("E"));
console.log(replaceFunc("F"));
console.log(replaceFunc("G"));
console.log(replaceFunc("H"));
console.log(replaceFunc("I"));
console.log(replaceFunc("J"));
console.log(replaceFunc("K"));
console.log(replaceFunc("L"));
console.log(replaceFunc("M"));
console.log(replaceFunc("N"));
console.log(replaceFunc("O"));
console.log(replaceFunc("P"));
console.log(replaceFunc("Q"));
console.log(replaceFunc("R"));
console.log(replaceFunc("S"));
console.log(replaceFunc("T"));
console.log(replaceFunc("U"));
console.log(replaceFunc("V"));
console.log(replaceFunc("W"));
console.log(replaceFunc("X"));
console.log(replaceFunc("Y"));
console.log(replaceFunc("Z"));
