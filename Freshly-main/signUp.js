document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  var input1 = document.querySelector("#mail").value;
  var input2 = document.querySelector("#input_2").value;

  if(input1 == ""){
    alert("Email must be filled out");
  }

  else if(input2 == ""){
    alert("ZIP code must be filled out");
  }
  else if (input1 !== "" && input2 !== "") {
      window.location.href = "plan.html";
  }
});