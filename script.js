//your JS code here. If required.
const output = document.getElementById("output");
const button = document.getElementById("btn");
async function showOutput(){
	const text = document.getElementById("text").value;
	const delay = document.getElementById("delay").value;
	setTimeout(()=>{
		output.innerText = text;
	},delay)
}

button.addEventListener("click",showOutput);

