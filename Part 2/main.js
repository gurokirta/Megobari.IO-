"use strict";

const addBtn = document.getElementById("add");
const input = document.getElementById("input");
const toDoContainer = document.querySelector(".list__items");
const toDos = document.querySelectorAll(".list__item");

let inputValue = "";

addBtn.addEventListener("click", function (e) {
  //! შევმქენი ღილაკზე დაჭერისას HTML თეგები
  const li = document.createElement("li");
  const text = document.createElement("span");
  const deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  const doneBtn = document.createElement("button");

  //! ტექსტს მივანიჭე მნიშვნელობა
  text.textContent = inputValue;
  deleteBtn.textContent = "Delete";
  editBtn.textContent = "Edit";
  doneBtn.textContent = "Done";

  //! თეგებს მივეცი კლასები
  li.classList.add("list__item");
  text.classList.add("item__text");
  deleteBtn.classList.add("delete");
  editBtn.classList.add("edit");
  doneBtn.classList.add("done");

  doneBtn.addEventListener("click", function (e) {
    text.classList.add("completed");
  });

  //! ლისტში ჩავსვით ზემოთ შექმნილი თეგები
  //   li.appendChild(text);
  //   li.appendChild(editBtn);
  //   li.appendChild(doneBtn);
  //   li.appendChild(deleteBtn);
  li.append(text, doneBtn, editBtn, deleteBtn);

  //! ლისტი ჩავსვი კონტეინერში (ul-ში)
  toDoContainer.appendChild(li);

  //! გავასუფთავე ინფუთი
  input.value = "";
  //! გავასუფთავე ინფუთის მნიშვნელობა
  inputValue = "";
});

input.addEventListener("keyup", function (e) {
  inputValue = e.target.value;
});
