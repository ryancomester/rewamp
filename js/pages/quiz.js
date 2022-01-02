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
    var score = 0;

    let q1 = document.forms.quizForm["q1"];
    let q2Color = document.getElementById("q2ColorOption");
    let q3 = document.forms.quizForm["q3"];
    let q4 = document.forms.quizForm["q4"];
    let q5 = document.forms.quizForm["q5"];
    let q6 = document.getElementById("q6");

    let err_msg = document.getElementById("errMsg");

    if(q1.value.trim().length === 0 && q3.value.trim().length === 0 && q4.value.trim().length === 0 && q5.value.trim().length === 0) {
        err_msg.innerHTML = "dont leave questions unanswed";
    } else {
        if(parseInt(q1.value) === 2006){
            score += 2;
        }else{
            score -= 1;
        }
        if(q2Color.value === "Orange"){
            score += 2;
        }else{
            score -= 1;
        }
        if(q3.value === "VFX & Animation"){
            score += 2;
        }else{
            score -= 1;
        }
        if(q4.value === "Amritha"){
            score += 2;
        }else{
            score -= 1;
        }
        if(q5.value === "Creativity starts here"){
            score += 2;
        }else{
            score -= 1;
        }
        if(q6.value === "festivalOfCreativity") {
            score += 2;
        }else{
            score -= 1;
        }
    
        if(score < 0) {
            score = 0;
        }
    
        console.log(score);
    }
}

//clears the student id from localstorage
window.onbeforeunload = function(){
    localStorage.removeItem("student_name");
    localStorage.removeItem('student_id');
};