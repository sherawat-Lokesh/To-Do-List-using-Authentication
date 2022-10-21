"use strict";
import { showDate, showDay, searchInput, addList } from "./dom.js";

const loadList = [];
searchInput.addEventListener("keydown", function (e) {
  if (e.key !== "Enter") return;
  if (searchInput.value === "") return;

  const html = `
        <div class='list flex  text-yellow-400 mt-3 p-2  rounded-xl hover:bg-zinc-800'>
            <input type="checkbox" abled class="tick-box ml-16  mr-4 rounded-lg bg-zinc-800 accent-red-600">
            <p class="content">${searchInput.value}</p>
        </div>
  `;
  loadList.push(searchInput.value);
  addList.insertAdjacentHTML("afterbegin", html);
  searchInput.value = "";
});

const date = new Date();
const day = date.getDay();
const currDate = `${date.getDate()}`.padStart(2, 0);
const currMonth = `${date.getMonth()}`.padStart(2, 0);
const currYear = `${date.getFullYear()}`;
const completeDate = `${currDate}/${currMonth}/${currYear}`;
switch (day) {
  case 1: {
    showDay.textContent = "Monday";
    break;
  }
  case 2: {
    showDay.textContent = "Tuesday";

    break;
  }
  case 3: {
    showDay.textContent = "Wednesday";

    break;
  }
  case 4: {
    showDay.textContent = "Thrusday";

    break;
  }
  case 5: {
    showDay.textContent = "Friday";

    break;
  }
  case 6: {
    showDay.textContent = "Saturday";

    break;
  }
  case 7: {
    showDay.textContent = "Sunday";

    break;
  }
}
showDate.textContent = completeDate;
