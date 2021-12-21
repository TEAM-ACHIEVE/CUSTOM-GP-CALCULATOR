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

  // removing the button
  document.getElementById("finalbuttonREMOVER1").style.display = "none";
}

function theNamerchanger(){
  $firstNameMover.textContent = $firstName1();
  $lastNamemover.textContent = $lastName1();
}
//final result structuring

function $sevenCourses() {
  let rounded;
  let gpa;
  let calfactor;
  let totalUnitload7;

  theNamerchanger();
  displayController();
  //7 courses
  if (table1($selectedOptions) == 7) {
    totalUnitload7 = unit1() + unit2() + unit3() + unit4() + unit5() + unit6() + unit7();

    calfactor =
      $course(course1()) * unit1() +
      $course(course2()) * unit2() +
      $course(course3()) * unit3() +
      $course(course4()) * unit4() +
      $course(course5()) * unit5() +
      $course(course6()) * unit6() +
      $course(course7()) * unit7();

    gpa = calfactor / totalUnitload7;

    //rounding the gpa calculated value to 2 decimal points
    rounded = Math.round((gpa + Number.EPSILON) * 100) / 100;

    $gpa.textContent = "your gp is = " + rounded;

    if (isNaN(totalUnitload7)) {
      console.log("is not a Num");
    } else {
      console.log("A big number");
    }

    console.log(unit3(), unit2(), calfactor, totalUnitload7, course1());
  }

  //8 courses
  else if (table1($selectedOptions) == 8) {
    let totalUnitload8 =
      unit1() +
      unit2() +
      unit3() +
      unit4() +
      unit5() +
      unit6() +
      unit7() +
      unit8();

    let calfactor1 =
      $course(course1()) * unit1() +
      $course(course2()) * unit2() +
      $course(course3()) * unit3() +
      $course(course4()) * unit4() +
      $course(course5()) * unit5() +
      $course(course6()) * unit6() +
      $course(course7()) * unit7() +
      $course(course8()) * unit8();

    gpa = calfactor1 / totalUnitload8;

    //rounding the gpa calculated value to 2 decimal points
    rounded = Math.round((gpa + Number.EPSILON) * 100) / 100;

    $gpa.textContent = "your gp is = " + rounded;
  }

  //9 courses
  else if (table1($selectedOptions) == 9) {
    let totalUnitload9 =
      unit1() +
      unit2() +
      unit3() +
      unit4() +
      unit5() +
      unit6() +
      unit7() +
      unit8() +
      unit9();

    let calfactor2 =
      $course(course1()) * unit1() +
      $course(course2()) * unit2() +
      $course(course3()) * unit3() +
      $course(course4()) * unit4() +
      $course(course5()) * unit5() +
      $course(course6()) * unit6() +
      $course(course7()) * unit7() +
      $course(course8()) * unit8() +
      $course(course9()) * unit9();

    gpa = calfactor2 / totalUnitload9;

    //rounding the gpa calculated value to 2 decimal points
    rounded = Math.round((gpa + Number.EPSILON) * 100) / 100;

    $gpa.textContent = "your gp is = " + rounded;
  }

  //10 courses
  else if (table1($selectedOptions) == 10) {
    totalUnitload9 =
      unit1() +
      unit2() +
      unit3() +
      unit4() +
      unit5() +
      unit6() +
      unit7() +
      unit8() +
      unit9() +
      unit10();

    calfactor2 =
      $course(course1()) * unit1() +
      $course(course2()) * unit2() +
      $course(course3()) * unit3() +
      $course(course4()) * unit4() +
      $course(course5()) * unit5() +
      $course(course6()) * unit6() +
      $course(course7()) * unit7() +
      $course(course8()) * unit8() +
      $course(course9()) * unit9() +
      $course(course10()) * unit10();

    let gpa11 = calfactor2 / totalUnitload9;

    //rounding the gpa calculated value to 2 decimal points
    let rounded2 = Math.round((gpa11 + Number.EPSILON) * 100) / 100;

    $gpa.textContent = "your gp is = " + rounded2;

    if (isNaN(totalUnitload7)) {
      console.log("is not a Num");
    } else {
      console.log("A big number");
    }

    console.log(
      unit3(),
      unit2(),
      calfactor2,
      totalUnitload9,
      course1(),
      unit11()
    );
  }

  //11 COURSES
  else if ( table1($selectedOptions) == 11) {
    let totalUnitload12 =
      unit1() +
      unit2() +
      unit3() +
      unit4() +
      unit5() +
      unit6() +
      unit7() +
      unit8() +
      unit9() +
      unit10() +
      unit11()//+
      //unit12();

    let calfactor5 =
      $course(course1()) * unit1() +
      $course(course2()) * unit2() +
      $course(course3()) * unit3() +
      $course(course4()) * unit4() +
      $course(course5()) * unit5() +
      $course(course6()) * unit6() +
      $course(course7()) * unit7() +
      $course(course8()) * unit8() +
      $course(course9()) * unit9() +
      $course(course10()) * unit10() +
      $course(course11()) * unit11() //+
      //$course(course12()) * unit12();

    gpa = calfactor5 / totalUnitload12;

    //rounding the gpa calculated value to 2 decimal points
    rounded = Math.round((gpa + Number.EPSILON) * 100) / 100;

    $gpa.textContent = "your gp is = " + rounded;
    if (isNaN(totalUnitload12)) {
      console.log("is not a Num");
    } else {
      console.log("A big number");
    }

    console.log(
      unit3(),
      unit2(),
      calfactor5,
      totalUnitload12,
      course1(),
      unit11()
    );
  }

  //12 COURSES
  else if (table1($selectedOptions) == 12) {
    let totalUnitload12 =
      unit1() +
      unit2() +
      unit3() +
      unit4() +
      unit5() +
      unit6() +
      unit7() +
      unit8() +
      unit9() +
      unit10() +
      unit11() +
      unit12();

    let calfactor5 =
      $course(course1()) * unit1() +
      $course(course2()) * unit2() +
      $course(course3()) * unit3() +
      $course(course4()) * unit4() +
      $course(course5()) * unit5() +
      $course(course6()) * unit6() +
      $course(course7()) * unit7() +
      $course(course8()) * unit8() +
      $course(course9()) * unit9() +
      $course(course10()) * unit10() +
      $course(course11()) * unit11() +
      $course(course12()) * unit12();

    gpa = calfactor5 / totalUnitload12;

    //rounding the gpa calculated value to 2 decimal points
    rounded = Math.round((gpa + Number.EPSILON) * 100) / 100;

    $gpa.textContent = "your gp is = " + rounded;
  }
}