let Title = document.querySelector("#changingTitle");
let copy = document.querySelector("#copypasta");
let but = document.querySelector("#showP");

let array2 = [];
array2.push("Aloha");
array2.push("Ciao");
array2.push("Hello");
array2.push("Hallo");
array2.push("Hej");
array2.push("Alô");
array2.push("Privyét");
array2.push("Ni hao");
array2.push("Yassou");

document.addEventListener("DOMContentLoaded", () => {
  console.log(copy);
  copy.style.display = "none";
});

setInterval(() => {
  let num = Math.floor(Math.random() * 9);
  console.log(num);
  Title.innerHTML = array2[num];
}, 3000);

but.addEventListener("click", () => {
  copy.style.display = "block";
});
