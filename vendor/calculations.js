// const $NumberofCousres4 = document.getElementById("activeProcess4");
// $NumberofCousres4.addEventListener("click", numberofCousres4);

//the calculations

function numberofCousres(selectValue) {
  document.getElementById("col-sec").style.display = "none";
  document.getElementById("firstSemester-section").style.padding= "7% 0% 0%";
  //document.getElementById("firstSemester-section").style.backgroundColor = "#ffff";
  tablemover(selectValue);
}

function numberofCousres2(selectValue) {
  document.getElementById("col-sec2").style.display = "none";
  document.getElementById("secondSemester-section").style.padding = "7% 0% 0%";
  // document.getElementById("secondSemester-section").style.backgroundColor = "#ffff";
  tablemover(selectValue);
}

function numberofCousres3(selectValue) {
  document.getElementById("col-sec3").style.display = "none";
  document.getElementById("normalGPA-section").style.padding = "7% 0% 0%";
  //document.getElementById("normalGPA-section").style.backgroundColor = "#ffff";
  tablemover(selectValue);
}

function numberofCousres4(selectValue) {
  document.getElementById("col-sec4").style.display = "none";
  document.getElementById("normalCGPA-section").style.padding = "7% 0% 0%";
  //document.getElementById("normalCGPA-section").style.backgroundColor = "#ffff";
  tablemover(selectValue);
}

/// CALCULATING THE RESULTS AND SOME CONTROLLERS

function tablemover(selectValue){
  const $selectedOptions = selectValue.value;
  if ($selectedOptions == 7) {
    sevenCourses();
  } else if ($selectedOptions == 8) {
    eightCourses();
  } else if ($selectedOptions == 9) {
    nineCourses();
  } else if ($selectedOptions == 10) {
    tenCourses();
  } else if ($selectedOptions == 11) {
    elevenCourses();
  } else if ($selectedOptions == 12) {
    twelvecourses();
  } else alert("please select a vaild option");
}

function sevenCourses(){
  document.getElementById("result-section7").style.display = "block";
  document.getElementById("result-section7").style.backgroundColor = "#ffff";
}

function eightCourses(){
  document.getElementById("result-section8").style.display = "block";
  document.getElementById("result-section8").style.backgroundColor = "#ffff";
}

function nineCourses(){
  document.getElementById("result-section9").style.display = "block";
  document.getElementById("result-section9").style.display = "block";
}

function tenCourses(){
  document.getElementById("result-section10").style.display = "block";
  document.getElementById("result-section10").style.backgroundColor = "#ffff";
}

function elevenCourses(){
  document.getElementById("result-section11").style.display = "block";  
  document.getElementById("result-section11").style.backgroundColor = "#ffff";
}

function twelvecourses(){
  document.getElementById("result-section12").style.display = "block"; 
  document.getElementById("result-section12").style.backgroundColor = "#ffff";
}