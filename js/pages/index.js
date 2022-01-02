//dark mode toggle
function darkModeToggle(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}

//makes the form take only numbers.
function validate(evt) {
    var theEvent = evt || window.event;
  
    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
}

//student quiz
function ProcessStudentId(){
    let student_name = document.forms.quizStudentId["studentName"];
    let student_id = document.forms.quizStudentId["studentID"];
    let error_msg = document.getElementById("error_msg");

    if(student_id.value.trim().length == 0 || student_name.value.trim() == 0){
        error_msg.innerHTML = "Student Name Field Or Student ID is missing";
    }else{
        window.localStorage.setItem("student_name", student_name.value);
        window.localStorage.setItem("student_id", student_id.value);
        location.href = "quiz.html";
    }
}
