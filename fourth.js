function findLongestWord(str1) {
	// write your code here
	let max = "";
	let maxCount = 0;
    str1.split(' ').forEach(el => {
	  if(el.length > maxCount){ max = el; maxCount = el.length;}
	})
	return max;
}
console.log(findLongestWord("I Love Saudi Arabia"));
console.log(findLongestWord("I love programming"))
console.log(findLongestWord("It is an easy challenge"))
console.log(findLongestWord("test your skills"))