/* ----------- 
Адаптивное меню*/
const btnMenu = document.getElementById("btn_menu");
const listMenu = document.getElementById("adaptive_menu");
btnMenu.onclick = function () {
  btnMenu.classList.toggle("change");
  listMenu.classList.toggle("show");
};

/* ----------- 
Прокрутка вверх*/

// Получить кнопку:
mybutton = document.getElementById("myBtn");

// Когда пользователь прокручивает вниз 200px от верхней части документа, покажите кнопку
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Когда пользователь нажимает на кнопку, прокрутите до верхней части документа
function topFunction() {
  document.body.scrollTop = 0; // Для Safari
  document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
}

/* -----------
якорь*/
// document.getElementById("anchorMorning").onclick = function () {
//   window.location.href = "programs.html#morning";
// };
// document.getElementById("anchorEvening").onclick = function () {
//   document.location.href = "programs.html#evening";
// };
// document.getElementById("anchorAdaptation").onclick = function () {
//   document.location.href = "programs.html#adaptation";
// };
// document.getElementById("anchorChess").onclick = function () {
//   document.location.href = "programs.html#chess";
// };

// window.onload = function () {
//   document
//     .getElementById("anchorMorning")
//     .addEventListener("click", function (e) {
//       document.location.href = "programs.html#morning";
//       document.location.hash = "morning";
//       e.preventDefault();
//     });
// };

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("anchorMorning").onclick = function () {
    document.location.href = "programs.html#morning";
    addEventListener("load", redirect);
  };
  document.getElementById("anchorEvening").onclick = function () {
    document.location.href = "programs.html#evening";
    addEventListener("load", redirect);
  };
  document.getElementById("anchorAdaptation").onclick = function () {
    document.location.href = "programs.html#adaptation";
    addEventListener("load", redirect);
  };
  document.getElementById("anchorChess").onclick = function () {
    document.location.href = "programs.html#chess";
    addEventListener("load", redirect);
  };
});

// document.addEventListener("DOMContentLoaded", function () {
//   window.getElementById("anchorMorning").onclick = function () {
//     window.location.href = "programs.html#morning";
//   };
//   // window.getElementById("anchorEvening").onclick = function () {
//   //   window.addEventListener("load").location.href = "programs.html#evening";
//   // };
//   window.getElementById("anchorAdaptation").onclick = function () {
//     window.location.href = "programs.html#adaptation";
//   };
//   window.getElementById("anchorChess").onclick = function () {
//     window.location.href = "programs.html#chess";
//   };
// });
