//final result structuring

function cgpaResult() {
  theNamerchanger1();
  displayController();

 $fsCourses();
 //$ssCourses();

 //totalassigner()

  // cgpa = ( (18 + 21 ) / ( 56 + 87 )  );
  cgpa1 = (gpa + cgpa) / 2;
  console.log(cgpa);
  //rounding the gpa calculated value to 2 decimal points
  rounded = Math.round((cgpa1 + Number.EPSILON) * 100) / 100;

  $cgpa.textContent = "your cgpa is = " + rounded;
  document.getElementById("finalbuttonREMOVER2").style.display = "none";
}

// function  totalassigner(params) {
  
//   //fs
//  $fsunitcalc.textContent= moverunit1;
//  $fsgradecalc.textContent= movergrade1;

  //ss
  // $ssunitcalc.textContent= moverunit2;
  // $ssgradecalc.textContent= movergrade2;
//}
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
