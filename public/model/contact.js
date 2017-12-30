var currentTab = 0; // Current tab is set to be the first tab (0)
var current = 1; //keeps track of the current div
var height = $('.roles').height(); //the height of the roles div
var numberDivs = $('.roles').children().length; //the number of children of the roles div
var first = $('.roles div:nth-child(1)'); //the first div nested in roles div



window.onload = function(){
    //   document.getElementById("showWindow").text(window.width() + "X" + window.height());
    console.log("wdth:" + $(window).width());

    setInterval(function() {
    var number = current * -height;
    first.css('margin-top', number + 'px');
    if (current === numberDivs) {
        first.css('margin-top', '0px');
        current = 1;
    } else current++;
    }, 2000);
    showTab(currentTab); // Display the current tab
    $("button.navbar-toggle").click(function(){
        console.log("hello");
        $("ul.navbar-nav").addClass("show");
        $("ul.navbar-nav").toggle();
    })
}


function showTab(n){
    // This function will display the specified tab of the form ...
    var x = document.getElementsByClassName("tab");
    for(var i = 0; i < x.length; i ++){
        x[i].classList.remove("show");
        x[i].classList.add("hide");
    }
    x[n].classList.remove("hide");
    x[n].classList.add("show");

    // ... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    
    if (n == (x.length - 1)){
        document.getElementById("nextBtn").innerHTML="Submit";
    } else {
        document.getElementById("nextBtn").innerHTML="Next";
    }
    // ... and run a function that displays the correct step indicator:
    fixStepIndicator(n);
}

function nextPrev(n){
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    if (n == 1 && !validateForm()){
        return false;
    }
    currentTab += n;
    if(currentTab >= x.length){
        document.getElementById("conForm").submit();
        return false;
    }
    showTab(currentTab);
}

function validateForm(){
    // This function deals with validation of the form fields
    var x, y, valid = true;
    x = document.getElementsByClassName("tab");
    // y = x[currentTab].getElementsByTagName("input");
    y = x[currentTab].childNodes;
    // A loop that checks every input field in the current tab:
    console.log("currentTab: " + currentTab);
    console.log("y: " + y[0]);
    for (var i = 0; i < y.length; i++){
        console.log("y[" + i + "].value: " + y[i].value);
        // If a field is empty...
        if(y[i].value == ""){
            // add an "invalid" class to the field:
            y[i].classList.add("invalid");
            // and set the current valid status to false:
            valid = false;
        }
    }
    if(valid){
        document.getElementsByClassName("step")[currentTab].classList.add("finish");
    }
    console.log("valid: " + valid + "\n");
    return valid;
}

function fixStepIndicator(n){
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i ++){
        x[i].className = x[i].className.replace("active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].classList.add("active");
}