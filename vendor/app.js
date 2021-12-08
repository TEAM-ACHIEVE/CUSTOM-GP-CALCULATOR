const $userChoice = document.getElementById("inlineFormSelectPref");
const $firstName = document.getElementById("firstName");
const $lastName = document.getElementById("lastName");
// const calcDescription = `${$lastName} ${$fisrtName}`;

const $firstNameMover = document.getElementById("firstNameMover");
const $lastNmaemover = document.getElementById("lastNmaemover");
// option section
// const $activeProcess = document.getElementById("activeProcess");
// $activeProcess.addEventListener("click", optionActive);

// displaying the input names
function theNamerRep(){
    document.getElementById("namechanger").style.display = "block";

    // document.getElementById("firstNameMover").textContent= $firstName;
    // document.getElementById("lastNmaemover").textContent = $lastName;
    //$firstNameMover.textContent = calcDescription;
    // $lastNmaemover.textContent = $lastName;
}   

function optionActive() {
  document.getElementById("options-section").style.display = "none";

    if ($fisrtName.value == 0 || $lastName.value == 0){
      alert("PLEASE ENTER A VAILD INPUT");
    }
    else{
      $OptionsSelector();
    }
    
}

function firstSemester() { 
  document.getElementById("options-section").style.display = "none";
  document.getElementById("firstSemester-section").style.display = "block";
  document.getElementById("col-sec").style.display = "block";
}

function secondSemester() {
  document.getElementById("options-section").style.display = "none";
  document.getElementById("secondSemester-section").style.display = "block";
   document.getElementById("col-sec22").style.display = "block";
}

function normalGPA() {
  document.getElementById("options-section").style.display = "none";
  document.getElementById("normalGPA-section").style.display = "block";
  document.getElementById("col-sec33").style.display = "block";
}

function normalCGPA() {
  document.getElementById("options-section").style.display = "none";
  document.getElementById("normalCGPA-section").style.display = "block";
  document.getElementById("col-sec44").style.display = "block";
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