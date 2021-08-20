function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6BafsD0UoBf":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var surname = player.GetVar("surname");
var name = player.GetVar("name");
var email = player.GetVar("email");
var status = player.GetVar("status");
var score = player.GetVar("score");
var region = player.GetVar("region");
var depot = player.GetVar("depot");
var role = player.GetVar("role");
var company = player.GetVar("company");

var formData = new FormData();
formData.append("Surname", surname );
formData.append("Name", name );
formData.append("Email", email );
formData.append("Status", status );
formData.append("Score",  score );
formData.append("Region",  region );
formData.append("Depot",  depot );
formData.append("Role",  role );
formData.append("Company",  company );
formData.append("Elearn", "E5 Resolving Slow Browsing" );


var request = new XMLHttpRequest();
request.open("POST", "https://script.google.com/macros/s/AKfycbzxFN-KJvXxyMgOOINzdOOIcfX55EkJslUPFTWZEh55x3wBGpRTSwdOm7N3Eie-OYS-XQ/exec");
request.send(formData);
}

