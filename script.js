$(document).ready(function(){
const date = new Date();

const renderCalendar = () => {
  date.setDate(1);



  const monthDays = [];

  // First Day of the Calendar
  const firstDay = date.getDay();
  console.log("First" + firstDay)

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  console.log(prevLastDay)

  for (let x = firstDay; x > 0; x--) {
   let  days = prevLastDay - x + 1;
   monthDays.push(days)
  }
  

  // Last day of the month
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  for (let i = 1; i <= lastDay; i++) {
    monthDays.push(i);
  }

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
  console.log("Last" + lastDay)

// Last Day of the Calendar
  const nextDays = 7 - lastDayIndex - 1;
  console.log("Next" + nextDays)


  for (let j = 1; j <= nextDays; j++) {
    monthDays.push(j)
  }
  console.log(monthDays.length)
  let length = monthDays.length

  for(let i = 1; i <= length ; ++i){
    let day = monthDays.shift()
    $('.tableBody').append(`<td class="col-md-2">${day}</td>`)
    if(i % 7 == 0){
      console.log('true')
      $('.tableBody').append(`<tr></tr>`)
    }

  }
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

  document.querySelector(".date h1").innerHTML = `${months[date.getMonth()]} ${date.getFullYear()}` ;

  document.querySelector(".date p").innerHTML = new Date().toDateString();


};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  $('.tableBody').empty()
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  $('.tableBody').empty()
  renderCalendar();
});

renderCalendar();
}) 