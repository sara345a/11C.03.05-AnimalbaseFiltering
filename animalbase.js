"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

// The prototype for all animals: 
const Animal = {
    name: "",
    desc: "-unknown animal-",
    type: "",
    age: 0

    console.log(Animal);
};

function start( ) {
    console.log("ready");

    // TODO: Add event-listeners to filter and sort buttons

    loadJSON();
}


function loadJSON() {
    fetch("animals.json").then((response) => response.json()).then((jsonData) => {
        
        //when JSON is loaded prepare objects and bring parameter with
        prepareObjects(jsonData);
      });

    console.log("loadJSON");
  }



function prepareObjects( jsonData ) {
    allAnimals = jsonData.map( preapareObject );

    //create object
    const oneAnimal = Object.create(Animal);

    //define type, name, desc and age
    oneAnimal.type = typeCapitalized;
    oneAnimal.name = splitFullName[0].trim();
    oneAnimal.desc = descCapitalized;
    oneAnimal.age = jsonObject.age;
    allAnimals.push(oneAnimal);
    console.log(oneAnimal);


    //create const for each thing that needs to be done
    const firstSpace = jsonObject.fullname.indexof(" ");
    const lastSpace = jsonObject.fullname.lastIndexOf(" ");
    const splitFullName = jsonObject.fullname.split(" ");
    const typeCapitalized = splitFullName[3].substring(0, 1).toUpperCase() + splitFullName[3].substring(1, firstSpace).toLowerCase();

    const descCapitalized = splitFullName[2].substring(0, 1).toUpperCase() + splitFullName[2].substring(1, lastSpace).toLowerCase();

    
}




function preapareObject( jsonObject ) {
    const animal = Object.create(Animal);
    
    const texts = jsonObject.fullname.split(" ");
    animal.name = texts[0];
    animal.desc = texts[2];
    animal.type = texts[3];
    animal.age = jsonObject.age;

    return animal;
}


function displayList(animals) {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    animals.forEach( displayAnimal );
}

function displayAnimal( animal ) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone );
}


