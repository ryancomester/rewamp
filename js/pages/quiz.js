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
    let q7 = document.forms.quizForm["q7"];
    let q8 = document.forms.quizForm["q8"];
    let q9 = document.forms.quizForm["q9"];
    let q10 = document.forms.quizForm["q10"];

    let err_msg = document.getElementById("errMsg");
    let result_modal_header = document.getElementById("resultsModalHeader");
    let results_modal_body = document.getElementById("resultsModalBody");
    let result_msg = document.getElementById("Msg");

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
        if(q7.value === "Vinodi" || q7.value === "satheesh"){
            score +=2;
        }else{
            score -= 1;
        }
        if(q8.value === "fashiondesigin"){
            score +=2;
        }else{
            score -= 1;
        }
        if(q9.value === "Friday"){
             score +=2;
        }else{
             score -= 1;
        }
        if(q10.value === "Email"){
             score +=2;
        }else{
             score -= 1;
        }
    
         if(score < 0) {
             score = 0;
         }else if(score > 20){
             score = 20;
         }
    
        if(score > 12){
            result_modal_header.classList.toggle("congragulate-modal");
            results_modal_body.classList.toggle("congragulate-modal");
            result_msg.innerHTML = `congrats you have score ${score} out of 20`;
            $("#resultsModal").modal('show');
        }else{
            result_modal_header.classList.toggle("failed-modal");
            results_modal_body.classList.toggle("failed-modal");
            result_msg.innerHTML = `Try harder next time! You have received only ${score} out of 20 points`;
            $("#resultsModal").modal('show');
        }

        //empties the feilds
        q1.value = "";
        q2Color.value = "";
        q3.value = "";
        q4.value = "";
        q5.value = "";
        q5.value = "";
        q6.value = "";
        q7.value = "";
        q8.value = "";
        q9.value = "";
        q10.value = "";
    }
}

//clears the student id & name from localstorage
window.onbeforeunload = function(){
    localStorage.removeItem("student_name");
    localStorage.removeItem('student_id');
};
