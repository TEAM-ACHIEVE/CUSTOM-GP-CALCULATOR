// input storing containers 
//all courses 
let $unitload101 = document.getElementById("unitload101");
let $unitload22 = document.getElementById("unitload22");
let $unitload33 = document.getElementById("unitload33");
let $unitload44 = document.getElementById("unitload44");
let $unitload55 = document.getElementById("unitload55");
let $unitload66 = document.getElementById("unitload66");
let $unitload77 = document.getElementById("unitload77");
let $unitload88 = document.getElementById("unitload88");
let $unitload99 = document.getElementById("unitload99");
let $unitload100 = document.getElementById("unitload100");
let $unitload110 = document.getElementById("unitload110");
let $unitload120 = document.getElementById("unitload120");

//funtions for number convertions
function unit101(){
  return parseInt($unitload101.value);
}
function unit22(){
  return parseInt($unitload22.value);
}
function unit33(){
  return  parseInt($unitload33.value);
}
function unit44() {
  return parseInt($unitload44.value);
}
function unit55() {
  return parseInt($unitload55.value);
}
function unit66() {
  return parseInt($unitload66.value);
}
function unit77() {
  return parseInt($unitload77.value);
}
function unit88() {
  return parseInt($unitload88.value);
}
function unit99() {
  return parseInt($unitload99.value);
}
function unit100() {
  return parseInt($unitload100.value);
}
function unit110() {
  return parseInt($unitload110.value);
}
function unit120() {
  return parseInt($unitload120.value);
}


//grade tables
// const $selectedGrade;
let grading101 = document.getElementById("courseGrade101");
let grading22 = document.getElementById("courseGrade22");
let grading33 = document.getElementById("courseGrade33");
let grading44 = document.getElementById("courseGrade44");
let grading55 = document.getElementById("courseGrade55");
let grading66 = document.getElementById("courseGrade66");
let grading77 = document.getElementById("courseGrade77");
let grading88 = document.getElementById("courseGrade88");
let grading99 = document.getElementById("courseGrade99");
let grading100 = document.getElementById("courseGrade100");
let grading110 = document.getElementById("courseGrade110");
let grading120 = document.getElementById("courseGrade120");

//funtion for string convertion
function course101() {
  return grading101.value
}
function course22() {
  return grading22.value
}
function course33() {
  return grading33.value
}
function course44() {
  return grading44.value
}
function course55() {
  return grading55.value
}
function course66() {
  return grading66.value
}
function course77() {
  return grading77.value
}
function course88() {
  return grading88.value;
}
function course99() {
  return grading99.value;
}
function course100() {
  return grading100.value;
}
function course110() {
  return grading101.value;
}
function course120() {
  return grading120.value;
}

// //gp result displayer
// const $gpa = document.getElementById("gpaprint");


// first semester 

function fsCourseschanger(selectValue1) {
  document.getElementById("firstSemester-section").style.padding = "0% 0% 0%";
  tablemover1(selectValue1);
}

//helps me to convert strings from the number of courses to actural values
function table2(select2) {
  return parseInt(select2);
}

/// CALCULATING THE RESULTS AND SOME CONTROLLERS
function tablemover1(selectValue1) {
  $selectedOptions = selectValue1.value;

  switch (table2($selectedOptions)) {
    case 7:
      document.getElementById("fsthe8th").style.display = "none";
      document.getElementById("fsthe9th").style.display = "none";
      document.getElementById("fsthe10th").style.display = "none";
      document.getElementById("fsthe11th").style.display = "none";
      document.getElementById("fsthe12th").style.display = "none";

      fsCourses();
      fs7();
      break;

    case 8:
      document.getElementById("fsthe9th").style.display = "none";
      document.getElementById("fsthe10th").style.display = "none";
      document.getElementById("fsthe11th").style.display = "none";
      document.getElementById("fsthe12th").style.display = "none";
      fsCourses();
      fs8();

      break;

    case 9:
      document.getElementById("fsthe10th").style.display = "none";
      document.getElementById("fsthe11th").style.display = "none";
      document.getElementById("fsthe12th").style.display = "none";
      fsCourses();
      fs9();

      break;

    case 10:
      document.getElementById("fsthe11th").style.display = "none";
      document.getElementById("fsthe12th").style.display = "none";
      fsCourses();
      fs10();

      break;

    case 11:
      document.getElementById("fsthe12th").style.display = "none";
      fsCourses();
      fs11();

      break;

    case 12:
      fsCourses();
      fs12();
      break;

    default:
      break;
  }
}

//DISPLAYING SELECTED TABLE OPTIONS

function fsCourses() {
  document.getElementById("result-sectionFS").style.display = "block";
  document.getElementById("result-sectionFS").style.backgroundColor = "#ffff";
  subsectionRemover1();
}

function subsectionRemover1() {
  document.getElementById("col-sec").style.display = "none";
  document.getElementById("col-sec33").style.display = "none";
  document.getElementById("col-sec44").style.display = "none";
}
  
//courses and calculations

function fs7(){
  totalUnitload7 =
    unit101() + unit22() + unit33() + unit44() + unit55() + unit66() + unit77();

  calfactor =
    $course(course101()) * unit101() +
    $course(course22()) * unit22() +
    $course(course33()) * unit33() +
    $course(course44()) * unit44() +
    $course(course55()) * unit55() +
    $course(course66()) * unit66() +
    $course(course77()) * unit77();

  moverunit1 = totalUnitload7;
  movergrade1 = calfactor;
}

function fs8() {
   totalUnitload7 =
    unit101() +
    unit22() +
    unit33() +
    unit44() +
    unit55() +
    unit66() +
    unit77() +
    unit88();

   calfactor =
    $course(course101()) * unit101() +
    $course(course22()) * unit22() +
    $course(course33()) * unit33() +
    $course(course44()) * unit44() +
    $course(course55()) * unit55() +
    $course(course66()) * unit66() +
    $course(course77()) * unit77() +
    $course(course88()) * unit88();

  moverunit1 = totalUnitload7;
  movergrade1 = calfactor;
}


function fs9(params) {
  totalUnitload7 =
    unit101() +
    unit22() +
    unit33() +
    unit44() +
    unit55() +
    unit66() +
    unit77() +
    unit88() +
    unit99();

  calfactor =
    $course(course101()) * unit101() +
    $course(course22()) * unit22() +
    $course(course33()) * unit33() +
    $course(course44()) * unit44() +
    $course(course55()) * unit55() +
    $course(course66()) * unit66() +
    $course(course77()) * unit77() +
    $course(course88()) * unit88() +
    $course(course99()) * unit99();

  moverunit1 = totalUnitload7;
  movergrade1 = calfactor;
}


function fs10(params) {
   totalUnitload7 =
     unit101() +
     unit22() +
     unit33() +
     unit44() +
     unit55() +
     unit66() +
     unit77() +
     unit88() +
     unit99() +
     unit100();

   calfactor =
     $course(course101()) * unit101() +
     $course(course22()) * unit22() +
     $course(course33()) * unit33() +
     $course(course44()) * unit44() +
     $course(course55()) * unit55() +
     $course(course66()) * unit66() +
     $course(course77()) * unit77() +
     $course(course88()) * unit88() +
     $course(course99()) * unit99() +
     $course(course100()) * unit100();

  moverunit1 = totalUnitload7;
  movergrade1 = calfactor;
}

function fs11(params) {
   totalUnitload7 =
    unit101() +
    unit22() +
    unit33() +
    unit44() +
    unit55() +
    unit66() +
    unit77() +
    unit88() +
    unit99() +
    unit100() +
    unit110(); 

   calfactor=
    $course(course101()) * unit101() +
    $course(course22()) * unit22() +
    $course(course33()) * unit33() +
    $course(course44()) * unit44() +
    $course(course55()) * unit55() +
    $course(course66()) * unit66() +
    $course(course77()) * unit77() +
    $course(course88()) * unit88() +
    $course(course99()) * unit99() +
    $course(course100()) * unit100() +
    $course(course110()) * unit110();

  moverunit1 = totalUnitload7;
  movergrade1 = calfactor;
}

function fs12(params) {
   totalUnitload7 =
    unit101() +
    unit22() +
    unit33() +
    unit44() +
    unit55() +
    unit66() +
    unit77() +
    unit88() +
    unit99() +
    unit100() +
    unit110() +
    unit120();

   calfactor =
    $course(course101()) * unit101() +
    $course(course22()) * unit22() +
    $course(course33()) * unit33() +
    $course(course44()) * unit44() +
    $course(course55()) * unit55() +
    $course(course66()) * unit66() +
    $course(course77()) * unit77() +
    $course(course88()) * unit88() +
    $course(course99()) * unit99() +
    $course(course100()) * unit100() +
    $course(course110()) * unit110() +
    $course(course120()) * unit120();

    moverunit1 = totalUnitload7;
    movergrade1 = calfactor;
}

// function $fsCourses() {
  
//   //7 courses
//   if (table2($selectedOptions) == 7) {
//     totalUnitload7 =
//       unit101() +
//       unit22() +
//       unit33() +
//       unit44() +
//       unit55() +
//       unit66() +
//       unit77();

//     calfactor =
//       $course(course101()) * unit101() +
//       $course(course22()) * unit22() +
//       $course(course33()) * unit33() +
//       $course(course44()) * unit44() +
//       $course(course55()) * unit55() +
//       $course(course66()) * unit66() +
//       $course(course77()) * unit77();

//     moverunit1 = totalUnitload7;
//     movergrade1 = calfactor;

//     if (isNaN(totalUnitload7)) {
//       console.log("is not a Num");
//     } else {
//       console.log("A big number");
//     }

//     console.log(unit33(), unit22(), calfactor, totalUnitload7);
//   }

//   //8 courses
//   else if (table2($selectedOptions) == 8) {
//     let totalUnitload88 =
//       unit101() +
//       unit22() +
//       unit33() +
//       unit44() +
//       unit55() +
//       unit66() +
//       unit77() +
//       unit88();

//     let calfactor11 =
//       $course(course101()) * unit101() +
//       $course(course22()) * unit22() +
//       $course(course33()) * unit33() +
//       $course(course44()) * unit44() +
//       $course(course55()) * unit55() +
//       $course(course66()) * unit66() +
//       $course(course77()) * unit77() +
//       $course(course88()) * unit88();

//      moverunit1 = totalUnitload88;
//      movergrade1 = calfactor11;

//     // //rounding the gpa calculated value to 2 decimal points
//     // rounded = Math.round((gpa + Number.EPSILON) * 100) / 100;

//     // $gpa.textContent = "your gp is = " + rounded;
//   }

//   //9 courses
//   else if (table2($selectedOptions) == 9) {
//     let totalUnitload99 =
//       unit101() +
//       unit22() +
//       unit33() +
//       unit44() +
//       unit55() +
//       unit66() +
//       unit77() +
//       unit88() +
//       unit99();

//     let calfactor22 =
//       $course(course101()) * unit101() +
//       $course(course22()) * unit22() +
//       $course(course33()) * unit33() +
//       $course(course44()) * unit44() +
//       $course(course55()) * unit55() +
//       $course(course66()) * unit66() +
//       $course(course77()) * unit77() +
//       $course(course88()) * unit88() +
//       $course(course99()) * unit99();

//       moverunit1 = totalUnitload99;
//       movergrade1 = calfactor22;

//   }

//   //10 courses
//   else if (table2($selectedOptions) == 10) {
//     totalUnitload99 =
//       unit101() +
//       unit22() +
//       unit33() +
//       unit44() +
//       unit55() +
//       unit66() +
//       unit77() +
//       unit88() +
//       unit99() +
//       unit100();

//     calfactor22 =
//       $course(course101()) * unit101() +
//       $course(course22()) * unit22() +
//       $course(course33()) * unit33() +
//       $course(course44()) * unit44() +
//       $course(course55()) * unit55() +
//       $course(course66()) * unit66() +
//       $course(course77()) * unit77() +
//       $course(course88()) * unit88() +
//       $course(course99()) * unit99() +
//       $course(course100()) * unit100();

//     moverunit1 = totalUnitload99;
//     movergrade1 = calfactor22;
//   }

//   //11 COURSES
//   else if (table2($selectedOptions) == 11) {
//     let totalUnitload120 =
//       unit101() +
//       unit22() +
//       unit33() +
//       unit44() +
//       unit55() +
//       unit66() +
//       unit77() +
//       unit88() +
//       unit99() +
//       unit100() +
//       unit110(); //+
//     //unit12();

//     let calfactor50 =
//       $course(course101()) * unit101() +
//       $course(course22()) * unit22() +
//       $course(course33()) * unit33() +
//       $course(course44()) * unit44() +
//       $course(course55()) * unit55() +
//       $course(course66()) * unit66() +
//       $course(course77()) * unit77() +
//       $course(course88()) * unit88() +
//       $course(course99()) * unit99() +
//       $course(course100()) * unit100() +
//       $course(course110()) * unit110(); //+
//     //$course(course12()) * unit12();

//     moverunit1 = totalUnitload120;
//     movergrade1 = calfactor50;
//   }

//   //12 COURSES
//   else if (table2($selectedOptions) == 12) {
//     let totalUnitload120 =
//       unit101() +
//       unit22() +
//       unit33() +
//       unit44() +
//       unit55() +
//       unit66() +
//       unit77() +
//       unit88() +
//       unit99() +
//       unit100() +
//       unit110() +
//       unit120();

//     let calfactor50 =
//       $course(course101()) * unit101() +
//       $course(course22()) * unit22() +
//       $course(course33()) * unit33() +
//       $course(course44()) * unit44() +
//       $course(course55()) * unit55() +
//       $course(course66()) * unit66() +
//       $course(course77()) * unit77() +
//       $course(course88()) * unit88() +
//       $course(course99()) * unit99() +
//       $course(course100()) * unit100() +
//       $course(course110()) * unit110() +
//       $course(course120()) * unit120();

//     moverunit1 = totalUnitload120;
//     movergrade1 = calfactor50;
//   }
// }
