const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = `${months[date.getMonth()]}  ${date.getFullYear()}`;

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<td class="prev-date col-md-2">${prevLastDay - x + 1}</td>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<td class="today col-md-2">${i}</td>`;
    } else {
      days += `<td class="col-md-2">${i}</td>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<td class="next-date col-md-2">${j}</td>`;
    // monthDays.innerHTML = days;
  }
  for(let x = 1; x <= totalDays; x++){
    for(let x = 1; x <= 7; x++){
      `<tr></tr>`
      monthDays.innerHTML = days;
    }
  }
  console.log(days)
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
