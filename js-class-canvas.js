// Create a Dog class. Each dog should have a name and a location.
// Add a speak method that logs "Woof! my name is {name}"
// Add a walk method that accepts two arguments: location (string) and distance (integer)
// Add a display_walks method that console.logs all of the dog's walks
// Add a total_distance method that returns the total distance of all the walks
// Research: what's the difference between console.log and return? Make sure you have a solid understanding


// Beast Mode
// Create a Walk class with properties: location and distance
// Update your Dog class: when the walk method is called, use this new Walk class to create a walk
// Introduce a timestamp to each walk, automatically add the current time when you instantiate a walk

class Walk {
  constructor(location, distance) {
    this.location = location;
    this.distance = distance;
    this.time = new Date();
  }
}

class Dog {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.walks = [];
  }
  speak() {
    console.log(`Woof! my name is ${this.name}`);
  }
  walk(location, distance) {
    // this.walks.push([location, distance]);
    this.walks.push(new Walk(location, distance));
  }
  displayWalks() {
    this.walks.forEach(walk => {
      console.log(`Location: ${walk.location}, Distance: ${walk.distance}km, Time: ${walk.time.toLocaleString()}`)
    })
  }
  totalDistance() {
    let total = 0;
    this.walks.forEach(walk => {
      total += walk.distance;
    });
    return total;
  }
}

let newDogBtn = document.getElementById('newDogBtn');
let dogList = document.getElementById('dogList');
let dogs = [];

newDogBtn.onclick = () => {
  let name = prompt("Enter Dog Name");
  name = name[0].toUpperCase() + name.slice(1);
  let location = prompt(`Enter ${name}'s Location`)
  let dogIndex = dogs.push(new Dog(name, location)) - 1;
  let li = document.createElement('li');
  li.innerHTML = `${name} - ${location}`;
  let btnArray = [["Add Walk", "walk"], ["Display Walks","displayWalks"], ["Total Distance", "totalDistance"]];
  for (let btnString of btnArray) {
    let btn = document.createElement('button');
    btn.innerHTML = btnString[0];
    // btn.setAttribute('data', "dogId: '`${dogIndex}`'");
    btn.dataset.dogId = dogIndex;
    btn.dataset.method = btnString[1];
    btn.classList.add("actionBtn");
    li.appendChild(btn);
    // btn.onclick = addWalk(btn.id);
  }
  dogList.appendChild(li);
  let actionBtns = document.getElementsByClassName("actionBtn");
  // console.log(actionBtns);
  Array.from(actionBtns).forEach(function(element) {
    element.addEventListener('click', doAction);
  });
  // actionBtns.onclick = doAction();
}

let doAction = function() {
  console.log("doing action");
  // console.log(this.dataset.dogId, this.dataset.method);
  switch (this.dataset.method) {
    case "walk":
      addWalk(this.dataset.dogId);
      break;
    case "displayWalks":
      displayWalks(this.dataset.dogId);
      break;
    case "totalDistance":
      totalDistance(this.dataset.dogId);
      break;
  }
}

function addWalk(dogId) {
  console.log("Adding Walk");
  console.log(`Dog Id: ${dogId}`);
  let location = prompt("Enter location");
  let distance = parseInt(prompt("Enter Distance"));
  dogs[dogId].walk(location, distance);
  // alert(`Dog Id: ${dogId}`);
  console.log(dogs);
}

function displayWalks(dogId) {
  console.log("Displaying Walks");
  console.log(`Dog Id: ${dogId}`);
  dogs[dogId].displayWalks();
  // alert(`Dog Id: ${dogId}`);
}

function totalDistance(dogId) {
  console.log("Total Distance");
  console.log(`Dog Id: ${dogId}`);
  console.log(`Total Distance: ${dogs[dogId].totalDistance()}km`);
  // alert(`Dog Id: ${dogId}`);
}

// let jester = new Dog("Jester", "Sydney");
// jester.speak();
// jester.displayWalks();
// jester.totalDistance();

// jester.walk("Park", 10);
// jester.walk("Beach", 20);
// jester.walk("Around Block", 5);

// jester.displayWalks();
// console.log(`Total Distance: ${jester.totalDistance()}km`);


// Beast Mode++
// Create a basic GUI in the browser to interact with your classes. Use buttons, prompts and lists to create and display dogs (view example).
// Add walks to the GUI. I.e. add a `New Walk` button to each dog and display their walks under their name.
