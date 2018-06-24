
var phones = [];

var submitBtn = document.getElementById('submit');
container = document.querySelector(".container")

submitBtn.addEventListener("click", function (element, event) {
    console.log('cliqué');
    var httpRequest = new XMLHttpRequest();

    //définition de la fonction de gestion de réponse HTTP
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            phones = JSON.parse(httpRequest.response);
            var out = "";
            for (i = 0; i < phones.length; i++) {              

                out += '<img src=' + phones[i].imageUrl + ' alt="phone thumbnail" />';
                 
            }
            document.getElementById("phonesImg").innerHTML = out;
        }
    };


    //fabrication de la requête
    httpRequest.open('GET', 'phones.json', true);

    //envoi de la requête
    httpRequest.send();

})

// container.addEventListener('mouseenter', mouseEnterContainer);

// function mouseEnterContainer() {
//     console.log('mouseenter event triggered');
//     container.removeEventListener('mouseenter', mouseEnterContainer);


// }

// document.addEventListener("keyup", returnButtonReact);

// function returnButtonReact(event) {

//     if (event.keyCode === 13) {
//         console.log("return button pressed!");

//     }

// }













// var item1 = document.getElementById('item-1'),

// myList = document.getElementsByClassName("myList"),

// paragraphs = document.getElementsByTagName('p'),

// images = document.querySelectorAll('img');

// console.log(document.body);
// console.log(document.images);
// console.log(item1);
// console.log(paragraphs);

// item1.style.color="red";

// myList[1].style.display='none';

// for(i=0; i<paragraphs.length; i++){
//     paragraphs[i].style.color="green";
// }











// var myName = "john";
// var nameList = ['john', 'sandra', 'cat', 32, false];

// var person = new Object();




// person.name = "philippe";
// person.age = 70;
// person.married = false;
// person.car = {};
// person.car.model = "Kia";
// person.car["model"] = "ford";


// function sayHello() {
//     myName = prompt('Quel est ton nom ?');
//     alert('Bonjour ' + myName);

// }

// if (person.age < 18) {
//     console.log('adolescent');
// } else if (person.age < 70) {
//     console.log('jeune homme');
// } else {
//     console.log('papi');
// }


// for (var i = 1; i < 10; i++) {
//     console.log(i);
// }

// for (var j = 0; j < nameList.length; j++) {
//     console.log(nameList[j]);
// }

// var x = 0;
// do {
//      console.log(nameList[x]);
//      x++;
// } while (x < nameList.length);

// while (x < nameList.length) {
//     console.log(nameList[x]);
//     x++;
// }