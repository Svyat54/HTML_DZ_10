let rows = document.querySelectorAll("tr");
rows.forEach((element) => {
  element.onmousedown = paint;
});

let lastRow;

function paint() {
  if (event.shiftKey) {
    if (lastRow.rowIndex < this.rowIndex) {
      for (let i = lastRow.rowIndex; i <= this.rowIndex; i++) {
        rows[i].classList.add("selected");
      }
    } else {
      for (let i = lastRow.rowIndex; i >= this.rowIndex; i--) {
        rows[i].classList.add("selected");
      }
    }
    return;
  }
  if (event.ctrlKey) {
    if (this.classList.contains("selected")) {
      this.classList.remove("selected");
      return;
    } else {
      this.classList.add("selected");
      return;
    }
  }

  document.querySelectorAll(".selected").forEach((elem) => {
    elem.classList.remove("selected");
  });
  if (!this.classList.contains("selected")) {
    this.classList.add("selected");
  }
  if (this.classList.contains("selected")) {
    lastRow = this;
    return;
  }
}
