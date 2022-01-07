// const $NumberofCousres4 = document.getElementById("activeProcess4");
// $NumberofCousres4.addEventListener("click", numberofCousres4);

//the calculations

function numberofCousres(selectValue) {
  document.getElementById("firstSemester-section").style.padding = "0% 0% 0%";
  tablemover(selectValue);
}

//helps me to convert strings from the number of courses to actural values
function table1(select2) {
  return parseInt(select2);
}

let $selectedOptions;

/// CALCULATING THE RESULTS AND SOME CONTROLLERS
function tablemover(selectValue) {
  
  $selectedOptions = selectValue.value;

  switch (table1($selectedOptions)) {
    case 7:
      document.getElementById("the8th").style.display = "none";
      document.getElementById("the9th").style.display = "none";
      document.getElementById("the10th").style.display = "none";
      document.getElementById("the11th").style.display = "none";
      document.getElementById("the12th").style.display = "none";

      sevenCourses();

      break;

    case 8:
       document.getElementById("the9th").style.display = "none";
       document.getElementById("the10th").style.display = "none";
       document.getElementById("the11th").style.display = "none";
       document.getElementById("the12th").style.display = "none";
      sevenCourses();
      break;

    case 9:
      document.getElementById("the10th").style.display = "none";
      document.getElementById("the11th").style.display = "none";
      document.getElementById("the12th").style.display = "none";
      sevenCourses();
      break;

    case 10:
      document.getElementById("the11th").style.display = "none";
      document.getElementById("the12th").style.display = "none";
      sevenCourses();
      break;

    case 11:
      document.getElementById("the12th").style.display = "none";
      sevenCourses();
      break;

    case 12:
      sevenCourses();
      break;

    default:
      break;
  }
}

//DISPLAYING SELECTED TABLE OPTIONS

function sevenCourses() {
  document.getElementById("result-section7").style.display = "block";
  document.getElementById("result-section7").style.backgroundColor = "#ffff";
  subsectionRemover();
}

function subsectionRemover(){
  document.getElementById("col-sec").style.display = "none";
  //document.getElementById("col-sec22").style.display = "none";
  document.getElementById("col-sec33").style.display = "none";
  document.getElementById("col-sec44").style.display = "none";
}