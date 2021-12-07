const $userChoice = document.getElementById("inlineFormSelectPref");
const $fisrtName = document.getElementById("firstName");
const $lastName = document.getElementById("lastName");

// option section
// const $activeProcess = document.getElementById("activeProcess");
// $activeProcess.addEventListener("click", optionActive);


function optionActive() {
  document.getElementById("options-section").style.display = "none";
  $OptionsSelector();
}

function firstSemester() { 
  document.getElementById("options-section").style.display = "none";
  document.getElementById("firstSemester-section").style.display = "block";
}

function secondSemester() {
  document.getElementById("options-section").style.display = "none";
  document.getElementById("secondSemester-section").style.display = "block";
}

function normalGPA() {
  document.getElementById("options-section").style.display = "none";
  document.getElementById("normalGPA-section").style.display = "block";
}

function normalCGPA() {
  document.getElementById("options-section").style.display = "none";
  document.getElementById("normalCGPA-section").style.display = "block";
}

function $OptionsSelector(selectValue) {
  const selectedOption = selectValue.value;
   
  if (selectedOption == 1) {
    firstSemester();
  }
   else if (selectedOption == 2 ) {
    secondSemester();
   } 
   else if (selectedOption == 3) {
     normalGPA();
   } 
   else if (selectedOption == 4) {
     normalGPA();
   } 
   else {
     
   }
}