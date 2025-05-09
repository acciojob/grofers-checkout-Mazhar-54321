const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices = document.getElementsByClassName("price");
	let sum =0 ;
	console.log(prices);
	Array.from(prices).forEach((el)=>console.log(el.innerText))
	sum=Array.from(prices).reduce((acc,curr)=>acc+=Number(curr.innerText),0);
	let tr=document.createElement("tr");
	let td= document.createElement("td");
	td.textContent=sum;
	td.id="ans"
	tr.appendChild(td);
	let table =document.querySelector('table');
	table.appendChild(tr)
  
};

getSumBtn.addEventListener("click", getSum);

