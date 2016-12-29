node.js project setup
Get into project folder

npm init                         
    Give it a name
npm install gulp --save-dev
npm install browserify --save-dev


When we start a new project, we run the $ npm init command.
Download each package that our project needs using either the --save-dev flag for development dependencies.
Commit the package.json file with the project but not the node_modules/ folder.
When we clone a project to continue working on it, we simply run $ npm install and all packages saved to the manifest file will be downloaded into a new node_modules/ folder.




// --------- Alien Constructor
function Alien(kind, color, scream){
    this.kind = "alien";
    this.shade = "green";
    this.testArray = ["fight", "run"]
    this.scream = function() {console.log("I come in peace")};
};
// Makes Zack an instance of Alien
var zack = new Alien();

// makes a prototype for zack or anyone to use that is considered an alien
Alien.prototype.headSize = function() {
  console.log('proto is working');

};

//calls it
console.log(zack.kind);

//zack.testArray[0] to call array



// ---------- Task List Constructor using categories to pass data into
function Task(name, description, date, difficulty, assigned, notes){
  this.name = name;
  this.description = description;
  this.date = date;
  this.difficulty = difficulty;
  this.assigned = assigned;
  this.notes = notes;
};

// creates new instance of Task called newTask - Passes in var names that input would be signed too
var newTask = new Task (inputtedName,inputtedDescription,inputtedDate,inputtedDifficulty,inputtedAssigned,inputtedNotes);

// Prototype
Task.prototype.nameDate = function () {
  return this.name + " - " + this.date;
};

// Calls it
newTask.name = "code";
// Input value example
var inputtedName = $("input#name").val();
