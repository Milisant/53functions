function range(lowEnd, highEnd) {
	var myArray = [];
	for (var i = lowEnd; i <= highEnd; i +=1) {
		myArray.push(i);
	}
	return myArray;
}
console.log(range(3, 17));