document.addEventListener("DOMContentLoaded" , function(){
   const data = document.getElementById("data");
var storage = localStorage.getItem("guardar");
data.innerHTML =  storage;
});
