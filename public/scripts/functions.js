let lis = document.getElementsByTagName("li");
let animals = [];

for (let i=0; i<lis.length;i++){
    animals.push(lis[i].innerHTML);
}

function addElementToUl () {
    let list = document.getElementById("unorderedList");
    let li = document.createElement("li");
    let randomAnimalIndex = Math.floor(animals.length * Math.random());
    let t = document.createTextNode(animals[randomAnimalIndex]);
    li.appendChild(t);
    list.appendChild(li);
};

function recursiveAdding () {
    timer = setTimeout(() => {
      addElementToUl();
      timer = setTimeout(recursiveAdding, 1000);  
    }, 1000);
}

function random() {
    randomSeconds = 2000 * Math.random();
    console.log(randomSeconds);
    return randomSeconds;
}

function updateLine () {
    randomAnimalName = document.getElementById("randomAnimalName");
    randomNumberName = document.getElementById("randomNumber");
    let newIndex = Math.floor(animals.length * Math.random());
    randomAnimalName.innerText = animals[newIndex];
    randomNumberName.innerText = Math.floor(100 * Math.random());
    setTimeout(updateLine, 3000);
}

function reloadPage() {
    window.location.reload(true);
}

// let timer = setTimeout(updateLine, 0);

// let displayMessage = setTimeout(function caminante() {
//     let answer = prompt("Cuanto quieres esperar? (If you want to stop, just enter a non-numeric value");
//     if (isNumber(answer)){
//         displayMessage = setTimeout(caminante, answer);
//     } else {
//         alert("You wanted to stop this. I understand. Goodbye")
//         let answer2 = prompt("Do you really want to stop?")
//         console.log(answer2 === "yes");
//         if(answer2 === ("y" || "yes")){
//             clearTimeout(displayMessage);
//         } else {
//             displayMessage = setTimeout(caminante, 10);
//         }
//     }
// }, 0);

function isNumber(value) {
    var numberPattern = /^[0-9]+$/; // one or more of digits 0 to 9
    return numberPattern.test(value);
  }