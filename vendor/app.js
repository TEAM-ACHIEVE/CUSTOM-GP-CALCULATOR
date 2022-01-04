// const $userChoice = document.getElementById("inlineFormSelectPref");
let $firstName = document.getElementById("firstName");
let $lastName = document.getElementById("lastName");


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
  document.getElementById("firstSemester-section").style.display = "block";
  document.getElementById("secondSemester-section").style.display = "block";
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
     normalCGPA();
   } 
   else {
     
   }
}

// page inputs

//name inputs
function $firstName1() {
  return $firstName.value;
}

function $lastName1() {
  return $lastName.value;
}
//7 courses 
let $unitload1 = document.getElementById("unitload1");
let $unitload2 = document.getElementById("unitload2");
let $unitload3 = document.getElementById("unitload3");
let $unitload4 = document.getElementById("unitload4");
let $unitload5 = document.getElementById("unitload5");
let $unitload6 = document.getElementById("unitload6");
let $unitload7 = document.getElementById("unitload7");
let $unitload8 = document.getElementById("unitload8");
let $unitload9 = document.getElementById("unitload9");
let $unitload10 = document.getElementById("unitload10");
let $unitload11 = document.getElementById("unitload11");
let $unitload12 = document.getElementById("unitload12");

//funtions for number convertions
function unit1(){
  return parseInt($unitload1.value);
}
function unit2(){
  return parseInt($unitload2.value);
}
function unit3(){
  return  parseInt($unitload3.value);
}
function unit4() {
  return parseInt($unitload4.value);
}
function unit5() {
  return parseInt($unitload5.value);
}
function unit6() {
  return parseInt($unitload6.value);
}
function unit7() {
  return parseInt($unitload7.value);
}
function unit8() {
  return parseInt($unitload8.value);
}
function unit9() {
  return parseInt($unitload9.value);
}
function unit10() {
  return parseInt($unitload10.value);
}
function unit11() {
  return parseInt($unitload11.value);
}
function unit12() {
  return parseInt($unitload12.value);
}


//grade tables
// const $selectedGrade;
let grading1 = document.getElementById("courseGrade1");
let grading2 = document.getElementById("courseGrade2");
let grading3 = document.getElementById("courseGrade3");
let grading4 = document.getElementById("courseGrade4");
let grading5 = document.getElementById("courseGrade5");
let grading6 = document.getElementById("courseGrade6");
let grading7 = document.getElementById("courseGrade7");
let grading8 = document.getElementById("courseGrade8");
let grading9 = document.getElementById("courseGrade9");
let grading10 = document.getElementById("courseGrade10");
let grading11 = document.getElementById("courseGrade11");
let grading12 = document.getElementById("courseGrade12");

//funtion for string convertion
function course1() {
  return grading1.value
}
function course2() {
  return grading2.value
}
function course3() {
  return grading3.value
}
function course4() {
  return grading4.value
}
function course5() {
  return grading5.value
}
function course6() {
  return grading6.value
}
function course7() {
  return grading7.value
}
function course8() {
  return grading8.value;
}
function course9() {
  return grading9.value;
}
function course10() {
  return grading10.value;
}
function course11() {
  return grading11.value;
}
function course12() {
  return grading12.value;
}

//gp result displayer
const $gpa = document.getElementById("gpaprint");

// REPLACING THE NAMES
let $firstNameMover = document.getElementById("firstNameMover");
let $lastNamemover = document.getElementById("lastNamemover");

//grade value assigner
function $course(grade) {

  if (grade == "a" || grade == "A") {
    return 5;
  } else if (grade == "b" || grade == "B") {
    return 4;
  } else if (grade == "c" || grade == "C") {
    return 3;
  } else if (grade == "d" || grade == "D") {
    return 2;
  } else if (grade == "e" || grade == "E") {
    return 1;
  } else if (grade == "f" || grade == "F") {
    return 0;
  }

}
