
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
