function validatin(){
    if(document.formfill.username.value==""){
   document.getElementById("result").innerHTML="Enter your name";
   return false;
    }
    else if(document.formfill.username.value.length<6){
        document.getElementById("result").innerHTML="At least six letter";
        return false;
    }
    else if(document.formfill.email.value==""){
        document.getElementById("result").innerHTML="Enter your Email";
        return false;
    }
    else if(document.formfill.password.value==""){
        document.getElementById("result").innerHTML="Enter your password";
        return false;
    }
    else if(document.formfill.password.value.length<6){
        document.getElementById("result").innerHTML="password must be 6-digit at least";
        return false;
    }
    else if(document.formfill.cpassword.value.length!=document.formfill.password.value.length){
        document.getElementById("result").innerHTML="password does not matched";
        return false;
    }
    else if(document.formfill.password.value==""){
        document.getElementById("result").innerHTML="Enter confirm the password";
        return false;
    }
    else if(document.formfill.phonenumber.value.length==""){
        document.getElementById("result").innerHTML="Enter Your phone number";
        return false;
    }
    else if(document.formfill.phonenumber.value.length<11 || document.formfill.phonenumber.value.length>11){
       
        document.getElementById("result").innerHTML="the phone number must be 11-degit";
        return false;
}
}