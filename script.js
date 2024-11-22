document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  var fname = document.getElementById("firstname").value;
  var lname = document.getElementById("lastname").value;
  var address = document.getElementById("address").value;
  var pin = document.getElementById("pincode").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var temparr = [];
  var checkbox = document.querySelectorAll('input[name="food"]:checked');

  checkbox.forEach(function (select) {
    temparr.push(select.value);
  });
  if (temparr.length < 2) {
    document.getElementById("food").innerHTML = "Select atleast 2 foods";
    return;
  }
  

  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;

  var table1 = document.getElementById("table").getElementsByTagName("tbody")[0];
  var newRow = table1.insertRow(table1.rows.length);
  var cells = [
    newRow.insertCell(0),
    newRow.insertCell(1),
    newRow.insertCell(2),
    newRow.insertCell(3),
    newRow.insertCell(4),
    newRow.insertCell(5),
    newRow.insertCell(6),
    newRow.insertCell(7),

  ];
  cells[0].innerHTML = fname;
  cells[1].innerHTML = lname;
  cells[2].innerHTML = address;
  cells[3].innerHTML = pin;
  cells[4].innerHTML = gender;
  cells[5].innerHTML = temparr.join(",");
  cells[6].innerHTML = city;
  cells[7].innerHTML = state;



});