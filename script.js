function firstChar(text) {
  // your code here
	let flag=0;
	for(i=0;i<text.length;i++){
		if(text[i]!=" "){
			flag=1;
			return text[i]
		}
	}
	if(flag===0){
		return " "
	}
}
  
// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
