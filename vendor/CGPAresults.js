function theNamerchanger1() {
  $firstNameMover1.textContent = $firstName1();
  $lastNamemover1.textContent = $lastName1();
}
//final result structuring

function cgpaResult() {
  theNamerchanger1();
  displayController();

  $fsCourses();
  $ssCourses();
  let cgpa;

  // cgpa = ( (18 + 21 ) / ( 56 + 87 )  );
  cgpa = (movergrade1 + movergrade2) / (moverunit1 + moverunit2);
  //rounding the gpa calculated value to 2 decimal points
  rounded = Math.round((cgpa + Number.EPSILON) * 100) / 100;

  $cgpa.textContent = "your cgpa is = " + rounded;
}

// function max1(unitcalc1) {
//   let calchelper1 = unitcalc1.value;
//   return calchelper1;
// }

// function max2(unitcalc2) {
//   let calchelper2 = unitcalc2.value;
//   return calchelper2;
// }

// function max11(graderguide1) {
//   let gradehelper1 = graderguide1.value;
//   return gradehelper1;
// }

// function max22(graderguide2) {
//   let gradehelper2 = graderguide2.value;
//   return gradehelper2;
// }
