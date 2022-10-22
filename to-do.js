"use strict";
// import { use } from "/swup/lib/modules/plugins.js";
import { showDate, showDay, searchInput, addList } from "./dom.js";
let userData = [];
function DelteListCode(e) {
  e.target.closest(".list").remove();

  const userarr = e.target.closest(".content").textContent;
  //prettier-ignore
  const userData2 = userData.flat(userData.length).filter((val) => val !== userarr);
  userData = [];
  userData.push(userData2);
  console.log(userData);
  localStorage.removeItem("todaylist");
  //prettier-ignore
  localStorage.setItem("todaylist",JSON.stringify(userData.flat(userData.length)));
}
window.addEventListener("load", function (e) {
  const localList = JSON.parse(this.localStorage.getItem("todaylist"));
  userData.push(localList);
  userData.flat(userData.length).forEach((val) => {
    const html = `
        <div class='list flex  text-yellow-400 mt-3 p-2  rounded-xl hover:bg-zinc-800'>
            <input type="checkbox" abled class="tick-box ml-16  mr-4 rounded-lg bg-zinc-800 accent-red-600">
            <p class="content">${val}<i class="delete-list fa fa-eye-slash text-white ml-5"></i></p>
        </div>
  `;
    addList.insertAdjacentHTML("afterbegin", html);
    //creating delte list btn here
    const deletelist = document.querySelector(".delete-list");
    //prettier-ignore
    deletelist.addEventListener('click',function(e){DelteListCode(e)

})
  });
});

searchInput.addEventListener("keydown", function (e) {
  if (e.key !== "Enter") return;
  if (searchInput.value === "") return;

  userData.push(searchInput.value);
  localStorage.setItem(
    "todaylist",
    JSON.stringify(userData.flat(userData.length))
  );
  console.log(userData);

  const html = `
        <div class='list flex  text-yellow-400 mt-3 p-2  rounded-xl hover:bg-zinc-800'>
            <input type="checkbox" abled class="tick-box ml-16  mr-4 rounded-lg bg-zinc-800 accent-red-600">
            <p class="content">${searchInput.value}<i class="delete-list fa fa-eye-slash text-white ml-5"></i></p>
        </div>
  `;
  addList.insertAdjacentHTML("afterbegin", html);
  searchInput.value = "";

  //creating delte list btn here
  const deletelist = document.querySelector(".delete-list");
  //prettier-ignore
  deletelist.addEventListener('click',function(e){e.target.closest('.list').remove()

  const userarr=e.target.closest(".content").textContent;
  const  userData2= userData.flat(userData.length).filter(val=>val !==userarr)
  userData=[]
  userData.push(userData2)
  console.log(userData)
  localStorage.removeItem('todaylist')
  localStorage.setItem('todaylist',JSON.stringify(userData.flat(userData.length)))

})
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
