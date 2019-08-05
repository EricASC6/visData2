const main= document.querySelector("main")

const createCard = (obj,indx) =>{
    //card that contains user info
    const newCard = document.createElement("div")
    newCard.className = "card"
    newCard.id= indx;

//Face of user
    const face = document.createElement('img')
    face.src = obj.picture.medium
    face.alt = "Portrait"

// div that contains name, age and email
    const info = document.createElement("div")
    info.className = "info"
    const lst = document.createElement("ul")
    const name = document.createElement('li')
    const email = document.createElement('li')
    const age = document.createElement('li')
    name.innerHTML= `Name: ${title(list[indx].name.first)}  ${title(list[indx].name.last)}`
    email.innerHTML = `Email: ${list[indx].email}`
    age.innerHTML= `Age: ${list[indx].dob.age}`
    
    lst.appendChild(name)
    lst.appendChild(age)
    lst.appendChild(email)
    newCard.appendChild(face);
    newCard.appendChild(lst)
    main.appendChild(newCard);
}


const loopCreate=arr=>{
    for(let i = 0; i<arr.length; i++){
    createCard(arr[i],i);
    }
}

const title = name => {
    nameArr = name.trim().split(" ");
  
    arr = [];
    for (let word of nameArr) {
      arr.push([...word]);
    }
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (j === 0) {
          let l = arr[i].shift();
          arr[i].unshift(l.toUpperCase());
        }
      }
    }
  
    titleName = ""
    for (const word of arr) {
      titleName += " " +word.join("");
    }
  
    return titleName.trim()
  }

loopCreate(list);

/////////////////////////////////////////////////////////////

//
for (let i = 0; i < list.length; i++) {
    console.log(list[i].name.first);
    console.log(list[i].name.last)
    console.log(list[i].gender)
}
//
const firstNames = [];
for (let i = 0; i < list.length; i++){
    firstNames.push(list[i].name.first);
}
//

//
const lastNames = [];
for (let i = 0; i < list.length; i++){
    lastNames.push(list[i].name.last);
}
//


const submitButton = document.querySelector("button");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");

submitButton.addEventListener("click", filterList)

function filterList(evnt) {
    evnt.preventDefault();

    const cards = document.getElementsByClassName("card")
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "none"
    }

    if (firstNames.includes(firstName.value)) {
        createCard(list[firstNames.indexOf(firstName.value)], firstNames.indexOf(firstName.value))
    } else if (lastNames.includes(lastName.value)) {
        createCard(list[lastNames.indexOf(lastName.value)], lastNames.indexOf(lastName.value))
    }
}

    
