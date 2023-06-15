const form = document.querySelector(".form");
const inputs = document.querySelectorAll("input");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let fullName = document.querySelector("#fullName").value.split("");
  let phoneNumber = document.querySelector("#phoneNumber").value.split("");
  let password = document.querySelector("#password");
  let passwordConfirmstion = document.querySelector("#passwordConfirmstion");

  let letters = ["q", "w", "e", "r", "t", "y", "u", "i"];
  let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  for (let i of numbers) {
    if (fullName.includes(i)) {
      alert("Введите правильное имя!");
      return;
    }
  }
  for (let i of letters) {
    if (phoneNumber.includes(i)) {
      alert("Введите правильный номер телефона!");
      return;
    }
  }
  if (password.value.length < 8) {
    alert("the password must be at least 8 characters long");
    return;
  } else if (passwordConfirmstion.value !== password.value) {
    alert("Password mismatch");
    return;
  }
  alert("Данные формы прошли проверку!");
});
//!-------------------
/*Описание задачи:
Ваша задача - создать простую веб-страницу, которая будет использовать localStorage для сохранения и извлечения данных пользователя.
Требования:
Создайте HTML-страницу с полями ввода и кнопками.
Добавьте поле ввода для имени пользователя и кнопку "Сохранить".
При нажатии на кнопку "Сохранить" имя пользователя должно быть сохранено в localStorage.
Добавьте кнопку "Загрузить", которая будет извлекать сохраненное имя пользователя из localStorage и отображать его на странице.
Добавьте кнопку "Очистить", которая будет удалять сохраненное имя пользователя из localStorage.
Проверьте, что данные сохраняются и извлекаются корректно, а также очищаются при необходимости.
Примерный порядок действий:
Создайте файл HTML и добавьте необходимые элементы: поле ввода, кнопки и элемент для отображения сохраненного имени пользователя.
Используйте JavaScript для обработки событий нажатия на кнопки.
При нажатии на кнопку "Сохранить" получите значение из поля ввода и сохраните его в localStorage.
При нажатии на кнопку "Загрузить" извлеките сохраненное значение из localStorage и отобразите его на странице.
При нажатии на кнопку "Очистить" удалите сохраненное значение из localStorage.
Протестируйте функциональность страницы, убедитесь, что данные сохраняются, извлекаются и очищаются корректно.
Уточнение:
Задача описывает основные шаги для работы с localStorage. Вы можете расширить функциональность, добавив возможность сохранять и извлекать другие данные, или улучшить пользовательский интерфейс. */

const saveButton = document.querySelector("#saveButton");
const displayButton = document.querySelector("#displayButton");
const clearButton = document.querySelector("#clearButton");
const inputSecondTask = document.querySelector("#inputSecondTask");
const result = document.querySelector("#result");

const resultUl = document.querySelector(".result_ul");

saveButton.addEventListener("click", (e) => {
  e.preventDefault();
  inputSecondTask.value.innerText = "";
  localStorage.setItem("userName", inputSecondTask.value);
});

displayButton.addEventListener("click", (e) => {
  e.preventDefault();
  inputSecondTask.value.innerText = "";
  const li = document.createElement("li");
  li.innerText = localStorage.getItem("userName");
  resultUl.append(li);
});

clearButton.addEventListener("click", () => {
  localStorage.removeItem("userName");
});

// !--------------------------------
//? Создайте HTML-страницу с кнопкой "Нажми меня". При нажатии на кнопку текст внутри нее должен изменяться на "Я нажата!".

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", (e) => {
//   btn.innerHTML === "Я нажата!"
//     ? (btn.innerHTML = "Нажми меня")
//     : (btn.innerHTML = "Я нажата!");
// });

// ? Создайте HTML-страницу с изображением. При наведении курсора мыши на изображение, измените его источник на другую картинку. При убирании курсора мыши с изображения, верните исходный источник.
// const img1 = document.querySelector("#img1");
// const img2 = document.querySelector("#img2");
// img1.addEventListener("mouseover", () => {
//   img1.setAttribute("src", "./assets/2023-05-22_19-53-43.png");
// });
// img2.addEventListener("mouseout", () => {
//   img2.setAttribute("src", "./assets/article-050819090154.png");
// });

// function changeImage() {
//   let image = document.getElementById("myImage");
//   image.src = "./assets/2023-05-22_19-53-43.png";
// }
// function restoreImage() {
//   let image = document.getElementById("myImage");
//   image.src = "./assets/article-050819090154.png";
// }

//? Создайте HTML-страницу с текстовым полем ввода и кнопкой "Сохранить". При вводе текста в поле ввода и нажатии на кнопку, сохраните введенное значение в localStorage. Затем обновите страницу и проверьте, что сохраненное значение по-прежнему отображается в поле ввода.
// const inp = document.querySelector("#inputText");
// const button = document.querySelector("#button");
