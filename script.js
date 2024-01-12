function validation(){
    var error = document.querySelector(".error-massage");
    var email = document.querySelector(".email");
    var isvalid = true;
     if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        error.innerHTML = "input valid email";
        email.style.borderColor = "red";
        email.style.backgroundColor = "rgba(255, 0, 0, 0.192)";
        isvalid = false;
     }
     else{
        error.innerHTML = "";
        email.style.borderColor = "";
        email.style.backgroundColor = "";
        isvalid = true;
     }

     return isvalid
    
}
let backbtn = document.querySelector("#submit-btn");

  backbtn.addEventListener("click", () =>{
    window.history.back();
  });