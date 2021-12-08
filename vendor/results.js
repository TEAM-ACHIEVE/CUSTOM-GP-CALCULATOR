    function $pushingResults() {
        // theNamerRep();

        document.getElementById("topBar").style.display = "none";

        subsectionRemover();

        instructionBOXremover();

        document.getElementById("footer").style.display = "none";

        printPage();

    }


//function that help to remove the instruction bar and page submit buttons  add the name of the student
    function instructionBOXremover(){
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
//enabing auto printing  by default
    function printPage(){
      window.print()
    }