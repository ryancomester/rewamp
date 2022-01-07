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
    // let Phone = document.forms.contactUs["phoneNum"];
    let msg_for = document.getElementById("msgFor");
    // let msg_subject = document.forms.contactUs["msgSubject"];
    // let msg_content = document.forms.contactUs["MsgContent"];
    let terms_and_conditions = document.getElementById("termsAndConditions");
    let priority_level = document.getElementsByName("priority");

    let x;

    let success_msg = document.getElementById("successMsg");
    let err_msg = document.getElementById("errMsg");

    //function loops through the form's feilds and check weather there are any empty feilds.
    function validate_form(){
        //feilds in an array for the validation loop.
        let feilds = ["Name", "phoneNum", "msgSubject", "MsgContent", "Email"];

        //form validation
        let i, l = feilds.length;
        let feild_name;
        
        //loop for validation
        for( i = 0; i < l; i++) {
            feild_name = feilds[i];
            if(document.forms.contactUs[feild_name].value.trim() === ""){
                return false;
            }
        }
        return true;
    }

    if(validate_form()) {
        if(terms_and_conditions.checked == 1){
            for(i = 0; i < priority_level.length; i++){
                if(priority_level[i].type="radio"){
                    if(priority_level[i].checked){
                        x = priority_level[i].value;
                    }                     
                }
            }

            success_msg.innerHTML = `“Dear ${Name.value}, your email is ${Email.value}, your message will be forwareded to the ${msg_for.value}. your priority level is: ${x}`;
            $("#resultsModal").modal('show');
         }else{
             err_msg.innerHTML = "agree for teams and conditions";
         }
    }else{
        err_msg.innerHTML = "fill all feilds.";
    }
}

function CloseModal(){
    $('#resultsModal').modal('toggle');
}