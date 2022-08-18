//connect time api
var todayDate = moment().format('LLLL'); 
$("#currentDay").html(todayDate)

//connect for past prest future



const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));
 const rowHour = parseInt(getElementsByClassName("13"));
if (rowHour < currentHour){
    $(this).addClass('past');
}
else if (rowHour === currentHour){
    $(this).removeClass('past');
    $(this).addClass('present');
}
else {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass('future');
}
//save button after reload

