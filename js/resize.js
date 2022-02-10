var size = document.getElementById("size");

window.onresize = function(event){
var innerWidth = window.innerWidth;
size.textContent = innerWidth;
}