// What's wrong with the following code and how to fix it:

// We have 5 buttons, and when clicking on each button,
// they should log out their corresponding number (0 - 4)

// const buttons = document. querySelectorAll( 'button');
// for (var i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener( 'click', () => console. log(i));
// }

// The issue is caused by using var in the loop.
// var is function-scoped, not block-scoped,
// so all click handlers share the same i.
// After the loop finishes, i becomes 5, so every button logs 5.

// 1. Fix it with ES6 syntax
const buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => console.log(i));
}

// let is block-scoped,
// so each loop iteration gets its own copy of i.

// 2. Fix it with pre-ES6 syntax
const buttons = document.querySelectorAll("button");
for (var i = 0; i < buttons.length; i++) {
  (function (j) {
    buttons[j].addEventListener("click", () => {
      console.log(j);
    });
  })(i);
}

// The IIFE captures the current value of i as j,
// so each button keeps the correct number.
