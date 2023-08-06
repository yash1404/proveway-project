function toggleSelection(boxNumber) {
  var selectionDiv = document.getElementById("selection" + boxNumber);
  var boxDiv = document.getElementById("box" + boxNumber);
  var radioButton = document.getElementById("radioButton" + boxNumber);

  if (radioButton.checked) {
    selectionDiv.style.display = "block";
    boxDiv.style.border = "2px solid #007f61";
    boxDiv.style.backgroundColor = "#F4FBF9";
  } else {
    selectionDiv.style.display = "none";
  }
}
