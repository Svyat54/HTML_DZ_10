document.addEventListener("keydown", function (event) {
  if (event.code == "KeyE" && (event.ctrlKey || event.metaKey)) textEdit();
  if (event.code == "KeyS" && (event.ctrlKey || event.metaKey)) textOutput();
});

function textEdit() {
  var str = document.getElementById("textInfo").innerHTML;
  document.getElementById("textInfo").style.display = "none";
  document.getElementById("textArea").style.display = "block";
  document.getElementById("textArea").value = str;
}

function textOutput() {
  var str = document.getElementById("textArea").value;
  document.getElementById("textArea").style.display = "none";
  document.getElementById("textInfo").style.display = "block";
  document.getElementById("textInfo").innerHTML = str;
}
