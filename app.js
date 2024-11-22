let arrows = document.querySelectorAll(".arrow-diagonal");

for (arrow of arrows) {
  arrow.addEventListener("click", function () {
    this.classList.toggle("rotate");
  });
}

let lis = document.querySelectorAll("li");

for (li of lis) {
  li.addEventListener("click", function () {
    this.classList.toggle("blueBorder");
  });
}

let logo = document.querySelector("img");

logo.addEventListener("click", function () {
  this.classList.toggle("blueBorder");
});



let inp = document.querySelector("input");
console.log(inp);
inp.addEventListener("click", function () {
  this.setAttribute('id','inp-blueBorder');
  
//   inp.setAttribute("style", "border: 5px solid blue");


});
