{
  let newsArray = new Array();
  for (let i = 0; i < 30; i++) {
    let div = document.createElement("div");
    let header = document.createElement("p");
    header.setAttribute("class", "header");
    header.innerHTML = "Новость " + (i + 5 + 1);
    div.appendChild(header);
    let text = document.createElement("p");
    text.setAttribute("class", "text");
    text.innerHTML =
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, corporis eaque, quos, id dolores sunt ratione quaerat illum at quidem inventore odio officiis magni aspernatur eveniet aperiam debitis minus modi";
    div.appendChild(text);
    newsArray.push(div);
  }

  let counter = 0;

  function checkPos() {
    console.log("checkpos");
    // Нам потребуется знать высоту документа и высоту экрана:
    const height = document.getElementById("container").offsetHeight;
    const scrHeight = window.innerHeight;
    // Они могут отличаться: если на странице много контента,
    // высота документа будет больше высоты экрана (отсюда и скролл).

    // Записываем, сколько пикселей пользователь уже проскроллил:
    const scrolled = window.scrollY;
    // Обозначим порог, по приближении к которому
    // будем вызывать какое-то действие.
    // В нашем случае — четверть экрана до конца страницы:
    const thresHold = height - scrHeight / 10;
    // Отслеживаем, где находится низ экрана относительно страницы:
    const position = scrolled + scrHeight;
    if (position >= thresHold && counter < newsArray.length) {
      for (let i = 0; i < 3; i++) {
        document
          .getElementById("container")
          .appendChild(newsArray[i + counter]);
        counter++;
      }
    }
  }

  (() => {
    window.addEventListener("scroll", checkPos);
    window.addEventListener("resize", checkPos);
  })();
}
