function myFunction() {
    document.getElementById("demo").innerHTML = "Rafał Jaśkowski";
    document.getElementById("demo").style.color = 'rgba(1, 128, 187, 0.685)';
    document.getElementById("demo").style.fontSize = '60px';
}
function getColor() {
    const getDemo = document.getElementById("demo")
    document.getElementById("h1").innerHTML = "Rafał Jaśkowski";
    document.getElementById("h1").style.fontSize = '60px';
    document.getElementById("getcolor").style.color = 'rgba(421, 363, 17, 1.678)';
    document.getElementById("test").innerHTML = "tak dla sprawdzenia";
}

function openCity1() {

    const myDiv = document.createElement('div')
    myDiv.setAttribute('id', 'newCreatedDiv')
    myDiv.innerHTML = "przykladowy tekst"

    document.getElementById("h1").appendChild(myDiv)
}

function openCity2() {
    document.getElementById("newCreatedDiv").style.color = 'red'
}

function openCity3() {
    let place = document.createElement('input');
    place.setAttribute('id', 'myInput')
    document.getElementById('newCreatedDiv').appendChild(place);
}

function openCity4() {
    document.getElementById('myInput').setAttribute('value', 'dodany tekst')
}



// function sum(fistNumber , secondNumber) {
	
// 	return firstNumber + secondNumber ;
// }

// let person = new Object();
// person.name = "Kamil";
// person.age = 31;

// console.log(person.name);
// console.log(person.age);

