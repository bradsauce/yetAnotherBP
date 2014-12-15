function validateForm() {
   var email = document.getElementById("email").value;
   var subject = document.getElementById("subject").value;
   var body = document.getElementById("body").value;
   
  	if (validateEmail(email) == false)
  	{
  		alert("please fill in correct email");
    }
    if (subject.length == 0)
    {
    	alert("please fill in title");
    }
    if (body.length == 0);
    {
    	alert("please fill in the body");
    }
}

function validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}