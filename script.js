// ES5 VARIANT
// Определяем внутренные переменные через this
// const TypeEffect = function (txt, txtWait, txtWords) {
//   this.txt = txt;
//   this.txtWait = parseInt(txtWait, 10);
//   this.words = txtWords;
//   this.wordIndex = 0;
//   this.text = "";
//   this.type();
//   this.isDeleted = false;
// };
// // Type прототип-функция
// TypeEffect.prototype.type = function () {
//   // Устанавливаем текущий индекс в массиве слов
//   const current = this.wordIndex % this.words.length;
//   // Получаем текст с массива
//   const full = this.words[current];
//   // Устанавливаем условие добавление элементов и убавление элементов
//   if (this.isDeleted) {
//     this.text = full.substring(0, this.text.length - 1);
//   } else {
//     this.text = full.substring(0, this.text.length + 1);
//   }
//   // Устанавливаем переменную скорости
//   let typeSpeed = 300;
//   if (this.isDeleted) {
//     // Делим на 2
//     typeSpeed = 150;
//   }
//   // Условие при полном тексте и пустом
//   if (!this.isDeleted && this.text == full) {
//     this.isDeleted = true;
//     typeSpeed = this.txtWait;
//   } else if (this.isDeleted && this.text == "") {
//     this.isDeleted = false;
//     this.wordIndex++;
//     typeSpeed = 800;
//   }
//   this.txt.innerHTML = `<span class="txt">${this.text}</span>`;

//   setTimeout(() => this.type(), typeSpeed);
// };
// // Event при каждой загрузке сайта
// document.addEventListener("DOMContentLoaded", init);
// // Init инициализируем переменные с Dom дерева
// function init() {
//   const txt = document.querySelector(".txtText");
//   const txtWait = txt.getAttribute("data-wait");
//   const txtWords = JSON.parse(txt.getAttribute("data-words"));
//   new TypeEffect(txt, txtWait, txtWords);
// }

// ES6 VARIANT
class TypeEffect {
  constructor(txt, txtWait, txtWords) {
    this.txt = txt;
    this.txtWait = parseInt(txtWait, 10);
    this.words = txtWords;
    this.wordIndex = 0;
    this.text = "";
    this.type();
    this.isDeleted = false;
  }
  type() {
    // Устанавливаем текущий индекс в массиве слов
    const current = this.wordIndex % this.words.length;
    // Получаем текст с массива
    const full = this.words[current];
    // Устанавливаем условие добавление элементов и убавление элементов
    if (this.isDeleted) {
      this.text = full.substring(0, this.text.length - 1);
    } else {
      this.text = full.substring(0, this.text.length + 1);
    }
    // Устанавливаем переменную скорости
    let typeSpeed = 300;
    if (this.isDeleted) {
      // Делим на 2
      typeSpeed = 150;
    }
    // Условие при полном тексте и пустом
    if (!this.isDeleted && this.text == full) {
      this.isDeleted = true;
      typeSpeed = this.txtWait;
    } else if (this.isDeleted && this.text == "") {
      this.isDeleted = false;
      this.wordIndex++;
      typeSpeed = 800;
    }
    this.txt.innerHTML = `<span class="txt">${this.text}</span>`;

    setTimeout(() => this.type(), typeSpeed);
  }
}
// Event при каждой загрузке сайта
document.addEventListener("DOMContentLoaded", init);
// Init инициализируем переменные с Dom дерева
function init() {
  const txt = document.querySelector(".txtText");
  const txtWait = txt.getAttribute("data-wait");
  const txtWords = JSON.parse(txt.getAttribute("data-words"));
  new TypeEffect(txt, txtWait, txtWords);
}
