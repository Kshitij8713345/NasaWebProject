let arrows = document.querySelectorAll(".arrow-diagonal");

for (let arrow of arrows) {
  arrow.addEventListener("click", function () {
    this.classList.toggle("rotate");
  });
}

let lis = document.querySelectorAll(".padding-nav");


for (li of lis) {
  li.addEventListener("click", function () {
    this.classList.toggle("blueBorder");
  });
}

let logo = document.querySelector("img");

logo.addEventListener("click", function () {
  this.classList.toggle("blueBorder");
});

// let inp = document.querySelector("input");
// inp.addEventListener("click", function () {
//   this.setAttribute("id", "inp-blueBorder");
// });

let navs = document.querySelectorAll("#news");

for (nav of navs) {
  nav.addEventListener("click", function () {
    let items = document.querySelector(".hidden-Info");
    items.classList.toggle("hide");
  });
}

let navs2 = document.querySelectorAll("#multi");

for (nav of navs2) {
  nav.addEventListener("click", function () {
    let items = document.querySelector(".hidden-Info2");
    items.classList.toggle("hide");
  });
}

let navItems = document.querySelectorAll("span")[1];

let arrow = document.querySelectorAll(".arrow-diagonal")[1];

  navItems.addEventListener("click", function () {
    arrow.classList.toggle("rotate");
  });


let navItems2 = document.querySelectorAll("span")[2];
let arrow2 = document.querySelectorAll(".arrow-diagonal")[2];

  navItems2.addEventListener("click", function () {
    arrow2.classList.toggle("rotate");
  });

