var input = document.getElementById("userinput") ;
var list = document.getElementById("list") ;

function inputLength() {
	return input.value.length;
}

function createListElement() {

	var div = document.createElement("div") ;

	var button = document.createElement("button") ;
	button.appendChild(document.createTextNode("X")) ;

	var p = document.createElement("p") ;
	var pText = document.createTextNode(input.value);
	p.appendChild(pText) ;	
	input.value = "";

	div.appendChild(button) ;
	div.appendChild(p) ;
	div.classList.toggle("item") ;

	list.appendChild(div) ;

	button.addEventListener("click", () => {
		var needToDelete = button.parentElement ;
		list.removeChild(needToDelete) ;
	}) ;
} 

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

input.addEventListener("keypress", addListAfterKeypress);