$("#newUser").click(function(){
  $("h1").text("Registration");
  $(".logo").css({
    "width":"120px",
    "height":"120px",
    "top":"10px"
  });
  $("#login-form").fadeOut(200);
  $("#registration-form").delay(300).fadeIn(500);
  $(".other-options").fadeOut(200);
});

$("#signup-btn,#getpass-btn").click(function(){
  $("h1").text("Log in");
  $(".logo").css({
    "width":"150px",
    "height":"150px",
    "top":"30px"
  });

  $("#registration-form,#fpass-form").fadeOut(200);
  $("#login-form").delay(300).fadeIn(500);
  $(".other-options").fadeIn(300);
});

$("#fPass").click(function(){
  $("h1").text("Forgotten password");
  $(".logo").css({
    "width":"190px",
    "height":"190px",
    "top":"40px"
  });

  $("#login-form").fadeOut(200);
  $("#fpass-form").delay(300).fadeIn(500);
  $(".other-options").fadeOut(200);
});

/*
function Login(form) { 
username = new Array("user");
password = new Array("password");
page = "../redirect.html";

if (form.username.value == username[0] && form.password.value == password[0]) {
self.location.href = page;
}

else {
alert("Incorrect username or password.");
}
return true;
} 
*/


/*
function checkPassword(){
username = new Array("user");
password = new Array("password");
page = "../test.html";

if (form.username.value == username[0] && form.password.value == password[0] {
self.location.href = page;
}

else {
alert("Incorrect login credentials.");
}

return true;
} */

/*
function validate() {
    var un = document.getElementById("usern").value;
    var pw = document.getElementById("pword").value;
    var valid = -1;

    var unArray = ["markwalt", "jongossy", "lisacain", "jenndemp"];
    var pwArray = ["mark1234", "flomaygo", "lisa1234", "jenny1234"];
    var fnArray = ["Mark Walters","Jonathan Goss","Lisa Cain","Jenny Dempsey"];

    for (var i=0; i <unArray.length; i++) {
        if ((un == unArray[i]) && (pw == pwArray[i])) {
            valid = i;
            break;
        }
    }

    if (valid != -1) {
        alert ("Login was successful");
        document.getElementById("mandatory1").value = fnArray[valid];
    }
    else {
        alert("Invalid Username and/or Password! Please try again. You will not be able to submit this form without a successful login")
        document.getElementById("pword").value = "";
        document.getElementById("usern").value = "";
        document.getElementById("usern").focus();
    }
} */
