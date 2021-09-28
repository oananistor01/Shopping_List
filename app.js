var newTaskInput = document.querySelector("#new-task");
var errorMsg = document.querySelector(".error-message");
var table = document.querySelector("#table");
var firstRowTh = document.querySelector(".first-row-th");

function addTask() {
  // input validation
  if (newTaskInput.value == "") {
    errorMsg.style.display = "block";
    return;
  } else {
    errorMsg.style.display = "none";

    firstRowTh.style.display = "table-row";

    //adding a new list item + button
    //create row
    var tr = document.createElement("tr");

    //create first td + user Input
    var td1 = tr.appendChild(document.createElement("td"));
    td1.innerHTML = newTaskInput.value;

    //create second td + button
    var td2 = tr.appendChild(document.createElement("td"));
    var btn = td2.appendChild(document.createElement("button"));
    btn.classList.add("hidden-btn");
    btn.innerText = "Mark as purchased";

    //append entire row to table
    table.appendChild(tr);
  }

  btn.addEventListener("click", strikeThrough);
  function strikeThrough() {
    td1.classList.add("strikethrough");
  }

  //clearing the input text
  newTaskInput.value = "";
}

//call function addTask() if 'enter' key is pressed
newTaskInput.addEventListener("keydown", keyEvent);
function keyEvent(e) {
  if (e.keyCode == 13) {
    addTask();
    e.preventDefault();
  }
}

//sort table ASCENDING
function sortTableAsc() {
  var rows, switching, i, x, y, shouldSwitch;
  switching = true;
  while (switching) {
    //no switching is done
    switching = false;
    rows = table.rows;

    //loop through all table rows (except the first, which contains table headers)
    for (i = 1; i < rows.length - 1; i++) {
      //no switching
      shouldSwitch = false;

      //get the two elements to compare; current row + next row
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];

      //check if the two rows should switch place
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      //make the switch and mark that a switch has been done
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

//sort table DESCENDING
function sortTableDesc() {
  var rows, switching, i, x, y, shouldSwitch;
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];

      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
