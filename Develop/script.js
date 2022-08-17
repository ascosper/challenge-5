//connect time api
var todayDate = moment().format('LLLL'); 
$("#currentDay").html(todayDate)

//connect for past prest future


const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    if (currentHour > rowHour) {
      addClass(past);
    } else if (currentHour < rowHour) {
        removeClass(past)
        addClass(future)
  }}
});

//save button after reload

