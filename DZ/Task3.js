let add = document.getElementsByClassName("add");
let i = 0;

for (let i = 0; i < add.length; i++) {
  add[i].addEventListener("click", function () {
    let panel = this.nextElementSibling;
    if (panel.getAttribute("class") == "toggleContent") {
      panel.setAttribute("class", "toggle");
    } else {
      panel.setAttribute("class", "toggleContent");
    }
    let id = panel.getAttribute("id");
    for (let j = 0; j < add.length; j++) {
      let str = "panel" + (j + 1);
      if (str != id) {
        document.getElementById(str).setAttribute("class", "toggle");
      }
    }
  });
}
