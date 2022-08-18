//connect time api
var todayDate = moment().format('LLLL'); 
$("#currentDay").html(todayDate)

//connect for past prest future

Function()
let currentHour = parseInt(moment().format('H'));
 var rowHour = [8,9,10,11,12,13,14,15,16,17];
 for (var id of rowHour){
 
if (id < currentHour){
    $(this).addClass('past');
}
else if (id === currentHour){
    $(this).removeClass('past');
    $(this).addClass('present');
}
else {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass('future');
}}
//save button after reload

