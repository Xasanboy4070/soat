const secund1 = document.querySelector(".box1");
const secund2 = document.querySelector(".box2");
const secund3 = document.querySelector(".box3");
// const secund = document.querySelector(".box");

function time(T) {
  if (T == 36100) {
    return 0;
  }
  secund1.style.transform = `rotateZ(${240+T}deg)`;
  return setTimeout(function () {
    time(T + 6);
  }, 300000);
}
time(0);
//===========================================================
function time2(T) {
  if (T == 361000) {
    return 0;
  }
  secund2.style.transform = `rotateZ(${150+T}deg)`;
  return setTimeout(function () {
    time2(T + 6);
  }, 60000);
}
time2(0);
//====================================================
function time3(T) {
  if (T == 3610000) {
    return 0;
  }
  secund3.style.transform = `rotateZ(${T}deg)`;
  return setTimeout(function () {
    time3(T + 6);
  }, 900);
}
time3(0);
