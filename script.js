const input = document.querySelector("#input-box");
const btnsubmit = document.querySelector("#btn-submit");
const btnclear = document.querySelector("#btn-clear");
const unOrderedList = document.querySelector(".list");

//Event Listners
btnsubmit.addEventListener("click", function (e) {
  e.preventDefault();
  if (input.value === "") {
    alert("You must enter a To-Do");
  } else {
    unOrderedList.innerHTML += `<div class="list-item-container">
    <li class="list-item">
      <span id="text"> ${input.value}</span>
      <div class="list-buttons">
      <button id="btn-done"><i class="fas fa-check" style="user-select: auto;"></i></button>
      <button id="btn-delete"><i class="fas fa-trash"></i></button>
      </div>
    </li>
  </div>`;
    input.value = "";
    const deletebtn = document.querySelectorAll("#btn-delete");
    for (let i = 0; i < deletebtn.length; i++) {
      deletebtn[i].onclick = function () {
        this.parentNode.parentNode.parentNode.remove();
      };
    }
    const donebtn = document.querySelectorAll("#btn-done");
    for (let i = 0; i < donebtn.length; i++) {
      donebtn[i].onclick = function () {
        this.parentNode.previousElementSibling.classList.add("done");
        this.parentNode.parentNode.style.opacity = "0.5";
      };
    }
  }
});

btnclear.addEventListener("click", function () {
  unOrderedList.innerHTML = "";
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
