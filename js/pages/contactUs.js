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

function ContactUs(){
    let Name = document.forms.contactUs["Name"];
    let Email = document.forms.contactUs["Email"];
    let msg_for = document.getElementById("msgFor");
     let msg_subject = document.forms.contactUs["msgSubject"];
     let msg_content = document.forms.contactUs["MsgContent"];
    let terms_and_conditions = document.getElementById("termsAndConditions");

    let success_msg = document.getElementById("successMsg");
    let err_msg = document.getElementById("errMsg");

         if(terms_and_conditions.checked == 1){
             success_msg.innerHTML = `“Dear ${Name.value}, your email is ${Email.value}, your message will be forwareded to the ${msg_for.value}`;
             $("#resultsModal").modal('show');
         }else{
             err_msg.innerHTML = "agree for teams and conditions";
         }
}

function CloseModal(){
    $('#resultsModal').modal('toggle');
}