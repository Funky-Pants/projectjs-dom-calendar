var day = new Date().getUTCDate();
var month = new Date().getUTCMonth() + 1;
var year = new Date().getUTCFullYear();
var days = ["Понeделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота", "Неделя"];
var daysInWeek = days[6];
  
function createCalendar() {
  var table = "";
  var isStart;
  var dayNumber = "";
  var daysInMonth = new Date(year, month, 0).getDate();
  
  //Fills the table with dates
  for (var i = 0; i < 7; i++) {
    table += "<tr>";
    for (var j = 0; j < 7; j++) {
      if (days[j] === daysInWeek && !isStart) {
        dayNumber = 1;
        isStart = true;
      }
      
      if (dayNumber === day) {
        dayStyle ="btn btn-danger";
      } else {
        dayStyle = "btn btn-outline-danger";
      }
      
      if (dayNumber <= daysInMonth) {
        table +=
          "<td><div class='" + dayStyle + "'>" + dayNumber + "</div></td>";
      }
      if (dayNumber !== "") {
        dayNumber++;
      };
    }
    table += "</tr>";
  }

  var WeekDays = "";
  for (var i = 0; i < 7; i++) {
    WeekDays += "<th>" + days[i] + "</th>";
  }

 //Create calendar nav
  myDOM.setHTML(
    "#calendar",
    '<nav id="nav" class="navbar bg-dark"> <div class="navbar-brand text-danger">' + day + "/" + month + "/" + year + '</div></nav>'
  );

  //Create the table
  myDOM.setHTML(
    "#calendar",
    '<table id="table" class="table table-light text-center"> <thead> <tr> ' + WeekDays + "</tr> </thead><tbody>" + table + "</tbody></table>",
    true
  );

  //Create prev month btn
  myDOM.setHTML(
    "#calendar",
    '<div id="prev" class="btn btn-danger btn-lg">Prev month</div>',
    true
  );

  //Create next/prev month btn
  myDOM.setHTML(
    "#calendar",
    '<div class="float-right"><div id="next" class="btn btn-danger btn-lg">Next month</div>',
    true
  );
  
  myDOM.addEvent("#prev", "click", prevMonth);
  myDOM.addEvent("#next", "click", nextMonth);
}

//Prev month btn
function prevMonth() {
  month -= 1;
  if (month <= 0) {
    year -= 1;
    month = 12;
  }
  clearHtml();
  createCalendar();
}  

//Next month bnt
function nextMonth() {
  month += 1;
  if (month > 12) {
    year += 1;
    month = 1;
  }
  clearHtml();
  createCalendar();
}

//CLear the prev calendar
function clearHtml() {
  myDOM.deleteElement("#table");
  myDOM.deleteElement("#prev");
  myDOM.deleteElement("#next");
  myDOM.deleteElement("#nav");
}