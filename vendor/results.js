function displayController() {
  document.getElementById("namechanger").style.display = "inline-block";
  document.getElementById("topBar").style.display = "none";

  subsectionRemover();

  instructionBOXremover();

  document.getElementById("footer").style.display = "none";

  //printPage();
}

//enabing auto printing  by default
function printPage() {
  window.print();
}

//function that help to remove the instruction bar and page submit buttons  add the name of the student
function instructionBOXremover() {
  document.getElementById("insturctionbox1").style.display = "none";
  document.getElementById("insturctionbox2").style.display = "none";
  document.getElementById("insturctionbox6").style.display = "none";
  document.getElementById("insturctionbox3").style.display = "none";
  document.getElementById("insturctionbox4").style.display = "none";
  document.getElementById("insturctionbox5").style.display = "none";

  // removing the button
  document.getElementById("finalbuttonREMOVER1").style.display = "none";
  document.getElementById("finalbuttonREMOVER2").style.display = "none";
  document.getElementById("finalbuttonREMOVER3").style.display = "none";
  document.getElementById("finalbuttonREMOVER4").style.display = "none";
  document.getElementById("finalbuttonREMOVER5").style.display = "none";
  document.getElementById("finalbuttonREMOVER6").style.display = "none";
}

//final result structuring

function $sevenCourses() {
  $firstNameMover.textContent = $firstName1();
  $lastNamemover.textContent = $lastName1();
  displayController();
  
  let totalUnitload7 =
    unit1() +
    unit2() +
    unit3() +
    unit4() +
    unit5() +
    unit6() +
    unit7();

  let calfactor =
  ($course(course1()) * unit1() ) +
  ($course(course2()) * unit2() ) +
  ($course(course3()) * unit3() ) +
  ($course(course4()) * unit4() ) +
  ($course(course5()) * unit5() ) +
  ($course(course6()) * unit6() ) +
  ($course(course7()) * unit7() ) ;

  let gpa = calfactor / totalUnitload7;

  $gpa.textContent = "your gp is = " + gpa;



  if (isNaN(totalUnitload7)) {
      console.log("is not a Num");
    } else {
      console.log("A big number");
    }

  console.log(unit3(), unit2(), calfactor, totalUnitload7, course1());

}

// function $pushingResults() {
//     // theNamerRep();
//     $sevenCourses();
//     document.getElementById("topBar").style.display = "none";

//     subsectionRemover();

//     instructionBOXremover();

//     document.getElementById("footer").style.display = "none";

//     printPage();

// }