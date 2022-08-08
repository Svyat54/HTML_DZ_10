{
  let header = ["Firstname", "Secondname", "Age", "Company"];
  let zuckerberg = ["Mark", "Zuckerberg", 34, "Facebook"];
  let page = ["Larry", "Page", 45, "Google"];
  let cook = ["Timothy", "Cook", 57, "Apple"];
  let gates = ["Bill", "Gates", 62, "Microsoft"];
  let durov = ["Pavel", "Durov", 37, "Vkontakte"];
  let jun = ["Lei", "Jun", 52, "Xiaomi"];
  let arrRichies = new Array();
  arrRichies.push(header);
  arrRichies.push(zuckerberg);
  arrRichies.push(page);
  arrRichies.push(cook);
  arrRichies.push(gates);
  arrRichies.push(durov);
  arrRichies.push(jun);

  function drawTable() {
    // let table = document.createElement("table");
    let table = document.getElementById("table");
    for (let i = 1; i < arrRichies.length; i++) {
      table = addRow(table, arrRichies, i);
    }
    table.setAttribute("class", "table");
    document.getElementById("container").appendChild(table);
  }
  function addRow(table, array, index) {
    let row = document.createElement("tr");
    for (let i = 0; i < array[index].length; i++) {
      let d = document.createElement("td");
      d.innerHTML = array[index][i];
      d.setAttribute("class", "cells");
      row.appendChild(d);
    }
    table.appendChild(row);
    return table;
  }
  function sort(column) {
    for (let i = arrRichies.length - 1; i > 1; i--)
      for (let j = 1; j < i; j++)
        if (arrRichies[j][column] > arrRichies[j + 1][column]) {
          let temp = arrRichies[j];
          arrRichies[j] = arrRichies[j + 1];
          arrRichies[j + 1] = temp;
        }
    while (document.querySelectorAll("tr").length > 1)
      document.getElementById("table").lastChild.remove();
    drawTable();
  }
  drawTable();
  console.log(document.querySelectorAll("tr"));
}
