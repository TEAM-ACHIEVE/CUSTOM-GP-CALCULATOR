// SUBMIT AND CANCEL OPERATIONS

//option section
const $canProcess = document.getElementById("closeProcess");
$canProcess.addEventListener("click", cancelAll);

function cancelAll() {
  document.getElementById("options-section").style.display = "inline-block";
  document.getElementById("topBar").style.display = "inline-block";
  document.getElementById("firstSemester-section").style.display = "none";
  document.getElementById("secondSemester-section").style.display = "none";
  document.getElementById("normalGPA-section").style.display = "none";
  document.getElementById("normalCGPA-section").style.display = "none";
  document.getElementById("result-section7").style.display = "none";
  document.getElementById("result-section8").style.display = "none"; 
  document.getElementById("result-section9").style.display = "none"; 
  document.getElementById("result-section10").style.display = "none";
  document.getElementById("result-section11").style.display = "none";
  document.getElementById("result-section12").style.display = "none"; 
}

// // first semester
// const $NumberofCousres = document.getElementById("activeProcess1");
// $NumberofCousres.addEventListener("click", numberofCousres);

const $canProcessFS = document.getElementById("closeProcess-fs");
$canProcessFS.addEventListener("click", cancelAllFS);

function cancelAllFS(params) {
  document.getElementById("options-section").style.display = "inline-block";
  document.getElementById("topBar").style.display = "inline-block";
  document.getElementById("firstSemester-section").style.display = "none";
  document.getElementById("secondSemester-section").style.display = "none";
  document.getElementById("normalGPA-section").style.display = "none";
  document.getElementById("normalCGPA-section").style.display = "none";
  document.getElementById("result-section7").style.display = "none";
  document.getElementById("result-section8").style.display = "none";
  document.getElementById("result-section9").style.display = "none";
  document.getElementById("result-section10").style.display = "none";
  document.getElementById("result-section11").style.display = "none";
  document.getElementById("result-section12").style.display = "none"; 
}

// second semester
// const $NumberofCousres2 = document.getElementById("activeProcess2");
// $NumberofCousres2.addEventListener("click", numberofCousres2);

const $canProcess2 = document.getElementById("closeProcess-ss");
$canProcess2.addEventListener("click", $cancelAllSS);

function $cancelAllSS() {
  document.getElementById("options-section").style.display = "inline-block";
  document.getElementById("topBar").style.display = "inline-block";
  document.getElementById("firstSemester-section").style.display = "none";
  document.getElementById("secondSemester-section").style.display = "none";
  document.getElementById("normalGPA-section").style.display = "none";
  document.getElementById("normalCGPA-section").style.display = "none";

  document.getElementById("result-section7").style.display = "none";
  document.getElementById("result-section8").style.display = "none";
  document.getElementById("result-section9").style.display = "none";
  document.getElementById("result-section10").style.display = "none";
  document.getElementById("result-section11").style.display = "none";
  document.getElementById("result-section12").style.display = "none"; 
}

//normal gpa 
// const $NumberofCousres3 = document.getElementById("activeProcess3");
// $NumberofCousres3.addEventListener("click", numberofCousres3);

const $canProcess3 = document.getElementById("closeProcess-gpa");
$canProcess3.addEventListener("click", $cancelGpa);

function $cancelGpa() {
  document.getElementById("options-section").style.display = "inline-block";
  document.getElementById("topBar").style.display = "inline-block";
  document.getElementById("firstSemester-section").style.display = "none";
  document.getElementById("secondSemester-section").style.display = "none";
  document.getElementById("normalGPA-section").style.display = "none";
  document.getElementById("normalCGPA-section").style.display = "none";
  document.getElementById("result-section7").style.display = "none";
  document.getElementById("result-section8").style.display = "none";
  document.getElementById("result-section9").style.display = "none";
  document.getElementById("result-section10").style.display = "none";
  document.getElementById("result-section11").style.display = "none";
  document.getElementById("result-section12").style.display = "none"; 
}

