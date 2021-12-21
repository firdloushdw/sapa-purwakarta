function toggleSignup(){
  document.getElementById("login-toggle").style.backgroundColor="#EEEFF4";
   document.getElementById("login-toggle").style.color="#222";
   document.getElementById("signup-toggle").style.textDecoration="underline";
   document.getElementById("login-toggle").style.textDecoration="none";
   document.getElementById("signup-toggle").style.backgroundColor="#fff";
   document.getElementById("signup-toggle").style.color="#A41212";
   document.getElementById("login-form").style.display="none";
   document.getElementById("signup-form").style.display="block";
}

function toggleLogin(){
   document.getElementById("login-toggle").style.backgroundColor="#fff";
   document.getElementById("signup-toggle").style.textDecoration="none";
   document.getElementById("login-toggle").style.textDecoration="underline";
   document.getElementById("login-toggle").style.textDecoration="bold";
   document.getElementById("login-toggle").style.color="#A41212";
   document.getElementById("signup-toggle").style.backgroundColor="#EEEFF4";
   document.getElementById("signup-toggle").style.color="#222";
   document.getElementById("signup-form").style.display="none";
   document.getElementById("login-form").style.display="block";
   
}

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
