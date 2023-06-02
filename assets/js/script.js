var time = dayjs().format("MMM D, YYYY hh:mm:ss a");
  $("#time").text(time);

setInterval(function dailyName() {
  time = dayjs().format("MMM D, YYYY hh:mm:ss a");
    $("#time").text(time);
}, 1000);

var myModal = $("myModal");
var myInput = $("myInput");

myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});