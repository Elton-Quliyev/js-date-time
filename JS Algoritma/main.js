var container = document.querySelector(".container")

var divim = document.createElement("div")
divim.classList.add("time")


setInterval(function(){
var tarix = new Date
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

//document.write(month[tarix.getMonth()] , ":" , weekday[tarix.getDay()] ,"<br>", ":" , tarix.getDate() , "-" , tarix.getHours() , ":" , tarix.getSeconds() )


container.appendChild(divim)
//divim.textContent = month[tarix.getMonth()] +  weekday[tarix.getDay()] + tarix.getDate() + tarix.getSeconds()
divim.textContent = `${ month[tarix.getMonth()] + ":" + weekday[tarix.getDay()] + ":" + tarix.getDate() + "-------" + tarix.getHours() + ":" + tarix.getMinutes()  + ":" + tarix.getSeconds()}`

}, 1000)
