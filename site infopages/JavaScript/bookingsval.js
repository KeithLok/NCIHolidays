function validateEmail()
{
var x=document.forms["myForm"]["email"].value;
var atpos=x.indexOf("@");
var dotpos=x.lastIndexOf(".");
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
  {
  alert("Not a valid e-mail address");
  return false;
  }
}

function validateForm()
{
var x=document.forms["myBooking"]["fname"].value;
if (x==null || x=="")
  {
  alert("First name must be filled out");
  return false;
  }
  
  var x=document.forms["myBooking"]["lname"].value;
if (x==null || x=="")
  {
  alert("Last name must be filled out");
  return false;
  }
  
  var e=document.forms["myBooking"]["email"].value;
var atpos=e.indexOf("@");
var dotpos=e.lastIndexOf(".");
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=e.length)
  {
  alert("Not a valid e-mail address");
  return false;
  }
  
   var x=document.forms["myBooking"]["dob"].value;
if (x==null || x=="")
  {
  alert("You must provide a Date of Birth");
  return false;
  }
  
   var x=document.forms["myBooking"]["address"].value;
if (x==null || x=="")
  {
  alert("You must provide the first line of Address ");
  return false;
  }
  
   var x=document.forms["myBooking"]["address2"].value;
if (x==null || x=="")
  {
  alert("You must provide the second line of Address");
  return false;
  }
  
     var x=document.forms["myBooking"]["add3"].value;
if (x==null || x=="")
  {
  alert("You must provde a postal address");
  return false;
  }
  
     var x=document.forms["myBooking"]["add4"].value;
if (x==null || x=="")
  {
  alert("You must provide a State of Province");
  return false;
  }
  
   var x=document.forms["myBooking"]["country"].value;
if (x==null || x=="")
  {
  alert("You must provide a Country");
  return false;
  }
  
   var x=document.forms["myBooking"]["depart"].value;
if (x==null || x=="")
  {
  alert("Please choose a departure date");
  return false;
  }
  
   var x=document.forms["myBooking"]["return"].value;
if (x==null || x=="")
  {
  alert("Please choose a return date");
  return false;
  }
  
     var x=document.forms["myBooking"]["city1"].value;
if (x==null || x=="")
  {
  alert("Please choose a departing City");
  return false;
  }
  
     var x=document.forms["myBooking"]["city2"].value;
if (x==null || x=="")
  {
  alert("Please choose a destination City");
  return false;
  }
  

  
 
}

/*function validateForm()
{
var x=document.forms["myForm"]["fname"].value;
if (x==null || x=="")
  {
  alert("First name must be filled out");
  return false;
  }
} */