// input storing containers
//all courses
let $unitload102 = document.getElementById("unitload102");
let $unitload222 = document.getElementById("unitload222");
let $unitload333 = document.getElementById("unitload333");
let $unitload444 = document.getElementById("unitload444");
let $unitload555 = document.getElementById("unitload555");
let $unitload666 = document.getElementById("unitload666");
let $unitload777 = document.getElementById("unitload777");
let $unitload888 = document.getElementById("unitload888");
let $unitload999 = document.getElementById("unitload999");
let $unitload1000 = document.getElementById("unitload1000");
let $unitload1100 = document.getElementById("unitload1100");
let $unitload1200 = document.getElementById("unitload1200");

//funtions for number convertions
function unit102() {
  return parseInt($unitload102.value);
}
function unit222() {
  return parseInt($unitload222.value);
}
function unit333() {
  return parseInt($unitload333.value);
}
function unit444() {
  return parseInt($unitload444.value);
}
function unit555() {
  return parseInt($unitload555.value);
}
function unit666() {
  return parseInt($unitload666.value);
}
function unit777() {
  return parseInt($unitload777.value);
}
function unit888() {
  return parseInt($unitload888.value);
}
function unit999() {
  return parseInt($unitload999.value);
}
function unit1000() {
  return parseInt($unitload1000.value);
}
function unit1100() {
  return parseInt($unitload1100.value);
}
function unit1200() {
  return parseInt($unitload1200.value);
}

//grade tables
// const $selectedGrade;
let grading102 = document.getElementById("courseGrade111");
let grading222 = document.getElementById("courseGrade222");
let grading333 = document.getElementById("courseGrade333");
let grading444 = document.getElementById("courseGrade444");
let grading555 = document.getElementById("courseGrade555");
let grading666 = document.getElementById("courseGrade666");
let grading777 = document.getElementById("courseGrade777");
let grading888 = document.getElementById("courseGrade888");
let grading999 = document.getElementById("courseGrade999");
let grading1000 = document.getElementById("courseGrade1000");
let grading1100 = document.getElementById("courseGrade1100");
let grading1200 = document.getElementById("courseGrade1200");

//funtion for string convertion
function course111() {
  return grading102.value;
}
function course222() {
  return grading222.value;
}
function course333() {
  return grading333.value;
}
function course444() {
  return grading444.value;
}
function course555() {
  return grading555.value;
}
function course666() {
  return grading666.value;
}
function course777() {
  return grading777.value;
}
function course888() {
  return grading888.value;
}
function course999() {
  return grading999.value;
}
function course1000() {
  return grading1000.value;
}
function course1100() {
  return grading1010.value;
}
function course1200() {
  return grading1200.value;
}

// //gp result displayer
// const $gpa = document.getElementById("gpaprint");

// first semester

function ssCourseschanger(selectValue2) {
  tablemover2(selectValue2);
}

//helps me to convert strings from the number of courses to actural values
function table3(select3) {
  return parseInt(select3);
}

/// CALCULATING THE RESULTS AND SOME CONTROLLERS
function tablemover2(selectValue2) {
  $selectedOptions = selectValue2.value;

  switch (table3($selectedOptions)) {
    case 7:
      document.getElementById("ssthe8th").style.display = "none";
      document.getElementById("ssthe9th").style.display = "none";
      document.getElementById("ssthe10th").style.display = "none";
      document.getElementById("ssthe11th").style.display = "none";
      document.getElementById("ssthe12th").style.display = "none";

      ssCourses();

      break;

    case 8:
      document.getElementById("ssthe9th").style.display = "none";
      document.getElementById("ssthe10th").style.display = "none";
      document.getElementById("ssthe11th").style.display = "none";
      document.getElementById("ssthe12th").style.display = "none";
      ssCourses();
      break;

    case 9:
      document.getElementById("ssthe10th").style.display = "none";
      document.getElementById("ssthe11th").style.display = "none";
      document.getElementById("ssthe12th").style.display = "none";
      ssCourses();
      break;

    case 10:
      document.getElementById("ssthe11th").style.display = "none";
      document.getElementById("ssthe12th").style.display = "none";
      ssCourses();
      break;

    case 11:
      document.getElementById("ssthe12th").style.display = "none";
      ssCourses();
      break;

    case 12:
      ssCourses();
      break;

    default:
      break;
  }
}

//DISPLAYING SELECTED TABLE OPTIONS

function ssCourses() {
  document.getElementById("result-sectionSS").style.display = "block";
  document.getElementById("result-sectionSS").style.backgroundColor = "#ffff";
  subsectionRemover2();
}

function subsectionRemover2() {
  document.getElementById("col-sec22").style.display = "none";
  document.getElementById("col-sec33").style.display = "none";
  document.getElementById("col-sec44").style.display = "none";
}


function $ssCourses() {
  //7 courses
  if (table3($selectedOptions) == 7) {
    totalUnitload7 =
      unit102() +
      unit222() +
      unit333() +
      unit444() +
      unit555() +
      unit666() +
      unit777();

    calfactor =
      $course(course102()) * unit102() +
      $course(course222()) * unit222() +
      $course(course333()) * unit333() +
      $course(course444()) * unit444() +
      $course(course555()) * unit555() +
      $course(course666()) * unit666() +
      $course(course777()) * unit777();

    max2(totalUnitload7);
    max22(calfactor);

    if (isNaN(totalUnitload7)) {
      console.log("is not a Num");
    } else {
      console.log("A big number");
    }

    console.log(unit33(), unit22(), calfactor, totalUnitload7, course1());
  }

  //8 courses
  else if (table3($selectedOptions) == 8) {
    let totalUnitload888 =
      unit102() +
      unit222() +
      unit333() +
      unit444() +
      unit555() +
      unit666() +
      unit777() +
      unit888();

    let calfactor111 =
      $course(course102()) * unit102() +
      $course(course222()) * unit222() +
      $course(course333()) * unit333() +
      $course(course444()) * unit444() +
      $course(course555()) * unit555() +
      $course(course666()) * unit666() +
      $course(course777()) * unit777() +
      $course(course888()) * unit888();

    max2(totalUnitload888);
    max22(calfactor111);

    // //rounding the gpa calculated value to 2 decimal points
    // rounded = Math.round((gpa + Number.EPSILON) * 100) / 100;

    // $gpa.textContent = "your gp is = " + rounded;
  }

  //9 courses
  else if (table3($selectedOptions) == 9) {
    let totalUnitload999 =
      unit102() +
      unit222() +
      unit333() +
      unit444() +
      unit555() +
      unit666() +
      unit777() +
      unit888() +
      unit999();

    let calfactor222 =
      $course(course102()) * unit102() +
      $course(course222()) * unit222() +
      $course(course333()) * unit333() +
      $course(course444()) * unit444() +
      $course(course555()) * unit555() +
      $course(course666()) * unit666() +
      $course(course777()) * unit777() +
      $course(course888()) * unit888() +
      $course(course999()) * unit999();

    max2(totalUnitload999);
    max22(calfactor222);
  }

  //10 courses
  else if (table3($selectedOptions) == 10) {
    totalUnitload999 =
      unit102() +
      unit222() +
      unit333() +
      unit444() +
      unit555() +
      unit666() +
      unit777() +
      unit888() +
      unit999() +
      unit1000();

    calfactor22 =
      $course(course102()) * unit102() +
      $course(course222()) * unit222() +
      $course(course333()) * unit333() +
      $course(course444()) * unit444() +
      $course(course555()) * unit555() +
      $course(course666()) * unit666() +
      $course(course777()) * unit777() +
      $course(course888()) * unit888() +
      $course(course999()) * unit999() +
      $course(course1000()) * unit1000();

    max2(totalUnitload999);
    max22(calfactor22);
  }

  //11 COURSES
  else if (table3($selectedOptions) == 11) {
    let totalUnitload1200 =
      unit102() +
      unit222() +
      unit333() +
      unit444() +
      unit555() +
      unit666() +
      unit777() +
      unit888() +
      unit999() +
      unit1000() +
      unit1100(); //+
    //unit12();

    let calfactor500 =
      $course(course102()) * unit102() +
      $course(course222()) * unit222() +
      $course(course333()) * unit333() +
      $course(course444()) * unit444() +
      $course(course555()) * unit555() +
      $course(course666()) * unit666() +
      $course(course777()) * unit777() +
      $course(course888()) * unit888() +
      $course(course999()) * unit999() +
      $course(course1000()) * unit1000() +
      $course(course1100()) * unit1100(); //+
    //$course(course12()) * unit12();

    max2(totalUnitload1200);
    max22(calfactor500);
  }

  //12 COURSES
  else if (table3($selectedOptions) == 12) {
    let totalUnitload1200 =
      unit102() +
      unit222() +
      unit333() +
      unit444() +
      unit555() +
      unit666() +
      unit777() +
      unit888() +
      unit999() +
      unit1000() +
      unit1100() +
      unit1200();

    let calfactor500 =
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
      $course(course1200()) * unit1200();

    max2(totalUnitload1200);
    max22(calfactor500);
  }
}
