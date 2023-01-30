let count = 0;

function myFunction() {
	count = count + 1

	let newText = "Number of times button clicked: " + count;
	// select the element
	let buttonDiv = document.getElementById("button-div");

	buttonDiv.innerHTML = newText;
}