const secund1 = document.querySelector(".box1");
const secund2 = document.querySelector(".box2");
const secund3 = document.querySelector(".box3");
// const secund = document.querySelector(".box");

let d=new Date()
let second=d.getSeconds()
let minutes = d.getMinutes()
let hour = d.getHours();
let m=minutes/10*6

function time(T) {
  if (T == 36100) {
    return 0;
  }
  secund1.style.transform = `rotateZ(${(hour*30)+T+m}deg)`;
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
  secund2.style.transform = `rotateZ(${(minutes*6)+T}deg)`;
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
  secund3.style.transform = `rotateZ(${(second*6)+T}deg)`;
  return setTimeout(function () {
    time3(T + 6);
  }, 900);
}
time3(0);

// console.log(second*6);
// console.log(minutes*6);
// console.log(hour*6);

// console.log('=======================================');
// console.log(second);
// console.log(minutes);
// console.log(hour);