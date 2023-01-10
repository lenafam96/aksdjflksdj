var countries = ["Vietnam", "Singapore", "Malaysia", "Indonesia", "Philippine", "Lao", "Cambodia"];
var positions = ["Operator", "Manager", "Developer", "Designer", "Tester"];

// Get references to the select elements
var countrySelect = document.getElementById("country");
var positionSelect = document.getElementById("position");
console.log(countrySelect);
// Create options for countries
for (var i = 0; i < countries.length; i++) {
  var option = document.createElement("option");
  option.value = countries[i];
  option.text = countries[i];
  countrySelect.appendChild(option);
}

// Create options for positions
for (var i = 0; i < positions.length; i++) {
  var option = document.createElement("option");
  option.value = positions[i];
  option.text = positions[i];
  positionSelect.appendChild(option);
}