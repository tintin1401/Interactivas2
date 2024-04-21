const currentDate = document.querySelector(".current-date"),
 daysTag = document.querySelector(".days"),
 PrevNextIcon = document.querySelectorAll(".icons svg");

let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

const month = ["January", "February", "March", " April", "May", "June", "July", "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

    let liTag = "";

    let highlightedDates = [
        { day: 17, month: 3, color:"bg-yellow-300"},
        { day: 30, month: 2 , color:"bg-blue-300"},
        { day: 14, month: 0, color: "bg-red-300"},
    ];

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<tr><td class="pt-6">
        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
        <li class="list-none inactive">${lastDateofLastMonth - i + 1}</li>
        </div>
    </td></tr>`;
    }


    for (let i = 1; i <= lastDateofMonth; i++) {


        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
            && currYear === new Date().getFullYear() ? "active list-none text-amber-500 bg-blue-500 rounded-full p-1" : "";

        let isHighlighted = true === highlightedDates.some(date => date.day === i && date.month === currMonth) ? "active list-none text-amber-500 rounded-full p-1" : "";
        let bg="";

        if (isHighlighted=="active list-none text-amber-500 rounded-full p-1") {
            let highlightedIndex = highlightedDates.findIndex(date => date.day === i && date.month === currMonth); // Busca la posición del elemento resaltado en el array
            bg = highlightedDates[highlightedIndex].color;
        }

        liTag += `<tr><td class="pt-6">
        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
        <li class="list-none${isToday} ${isHighlighted} ${bg}">${i}</li>
        </div>
         </td></tr>`;

    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<tr><td class="pt-6">
        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
        <li class="list-none inactive">${i - lastDayofMonth + 1}</li>
        </div>
    </td></tr>`;
    }


    currentDate.innerText = `${month[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}

renderCalendar();

PrevNextIcon.forEach(icons => {
    icons.addEventListener("click", () => {

        currMonth = icons.id === "prev" ? currMonth - 1 : currMonth + 1;
        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar();
    })
});


//Create by Taylor Duran Sibaja y Dana Valverde Cardenas 21/04/2024