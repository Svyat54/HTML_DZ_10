let array = Array.from(document.getElementsByTagName("a"));
for (let i of array) {
  if (i.href.indexOf("http") == 0) {
    i.style.borderBottom = "dashed";
    i.style.borderWidth = "1px";
  }
}
