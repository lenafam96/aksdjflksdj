//Câu 2
var countries = ["Vietnam", "Singapore", "Malaysia", "Indonesia", "Philippine", "Lao", "Cambodia"];
var positions = ["Operator", "Manager", "Developer", "Designer", "Tester"];



var countrySelect = document.getElementById("country");
var positionSelect = document.getElementById("position");
console.log(countrySelect);


for (var i = 0; i < countries.length; i++) {
  var option = document.createElement("option");
  option.value = countries[i];
  option.text = countries[i];
  countrySelect.appendChild(option);
}


for (var i = 0; i < positions.length; i++) {
  var option = document.createElement("option");
  option.value = positions[i];
  option.text = positions[i];
  positionSelect.appendChild(option);
}
//Câu 3
function validate() {
    var firstName = document.getElementById("firstName").value;
    if (firstName.length === 0) {
        alert("The First Name should not be blank.");
        return false;
    }
    var lastName = document.getElementById("lastName").value;
    if (lastName.length === 0) {
        alert("The Last Name should not be blank.");
        return false;
    }
    var email = document.getElementById("email").value;
    if (email.length === 0) {
        alert("The Email should not be blank.");
        return false;
    }
    var email = document.getElementById("email").value;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        alert("Please input your correct email address.");
        return false;
    }
    var phone = document.getElementById("phone").value;
    var phoneRegex = /^\d{3}-\d{3}-\d{6}$/;
    if (!phoneRegex.test(phone)) {
        alert("Please input your correct phone number.");
        return false;
    }
    var select = document.getElementById("country");
    var selectedOption = select.options[select.selectedIndex].value;
    if (selectedOption == "") {
        alert("Please select your country.");
        return false;
    }
    var select = document.getElementById("position");
    var selectedOption = select.options[select.selectedIndex].value;
    if (selectedOption == "") {
        alert("Please select the position.");
        return false;
    }
    return true;
}

//Câu 4
$(document).ready(function(){
    $("#myform").validate({
        rules: {
            name: "required",
            firstName:{
                required:true
            },
            lastName:{
                required:true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                regex: /^[0-9]{3}-[0-9]{3}-[0-9]{6}$/
            },
            country: {
                required: true
            },
            position: {
                required: true
            }
        },
        messages: {
            name: "Please enter your name",
            firstName:{
                required: "The First Name should not be blank."
            },
            lastName:{
                required: "The Last Name should not be blank."
            },
            email: {
                required: "The Email should not be blank.",
                email: "Please input your correct email address."
            },
            phone:{
                required: "Please input your correct phone number."
            },
            country:{
                required: "Please select your country."
            },
            position:{
                required: "Please select the position."
            },
        }
    });
});

