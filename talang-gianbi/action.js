let tt1 = 0;
let tt2 = 0;
function hien() {
  document.getElementById("menu").style.display = "block";
  document.getElementById("menu-hien").style.display = "none";
}
function an() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("menu-hien").style.display = "block";
}
function hover() {
  document.getElementById("menu").style.transform = "translateX(200px)";
}

//hiển thị submenu

function hienSub1() {
  document.getElementById("goi-y-ta-lang").style.display = "block";
  document.getElementById("down").style.display = "none";
  document.getElementById("up").style.display = "block";
  document.getElementById("link-map-2").style.backgroundColor = "#aaaaaa";
}
function anSub1() {
  document.getElementById("goi-y-ta-lang").style.display = "none";
  document.getElementById("down").style.display = "block";
  document.getElementById("up").style.display = "none";
  document.getElementById("link-map-2").style.background = "none";
}

function setTT1() {
  if (tt1 % 2 == 0) {
    document.getElementById("dia-diem-1").style.backgroundColor = "#00B46F";
    hienSub();
    anSub1();
    document.getElementById("dia-diem-2").style.background = "none";
  } else {
    document.getElementById("dia-diem-1").style.background = "none";
    anSub();
  }
  console.log(tt1);
  tt1 = tt1 + 1;
}

function setTT2() {
  if (tt2 % 2 == 0) {
    document.getElementById("dia-diem-2").style.backgroundColor = "#00B46F";
    hienSub1();
    anSub();
    document.getElementById("dia-diem-1").style.background = "none";
  } else {
    document.getElementById("dia-diem-2").style.background = "none";
    anSub1();
  }
  console.log(tt2);
  tt2 = tt2 + 1;
}
