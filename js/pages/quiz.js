//when window is loaded
window.onload = function Onload_func() {
    if(window.localStorage.getItem("student_id") === null && window.localStorage.getItem("student_name") == null){
        location.href = "index.html";
    }else{
        return;
    }
}

let student_name = document.getElementById("student_name");
let student_id = document.getElementById("Student_Id");
let quiz_form_submit_btn = document.getElementById("quizFormSubmitBtn");


student_name.innerHTML = window.localStorage.getItem("student_name");
student_id.innerHTML = window.localStorage.getItem("student_id");

//takes data from form and proccess it.
function QuizLogic(){
    var score = new Set();

    let q1 = document.forms.quizForm["q1"];
    let q2Color = document.getElementById("q2ColorOption");
    let q3 = document.forms.quizForm["q3"];
    let q4 = document.forms.quizForm["q4"];
    let q5 = document.forms.quizForm["q5"];
    let q6 = document.getElementById("q6");
    
    if(parseInt(q1.value) === 2006){
        console.log("yes");
    }else{
        console.log("no");
    }
    if(q2Color.value === "Orange"){
        console.log("yes");
    }else{
        console.log("no");
    }

    console.log(score);
}

//clears the student id from localstorage
window.onbeforeunload = function(){
    //localStorage.removeItem('student_id');
};