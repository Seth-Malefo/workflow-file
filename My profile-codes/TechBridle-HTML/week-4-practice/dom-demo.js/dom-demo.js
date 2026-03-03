let heading = document.getElementById("title");
let button = document.querySelector("#changeBtn");

button.addEventListener("click", function() {
    heading.textContent = "JavaScript is Powerful!";
    heading.style.color = "red";
}); 

button.addEventListener("click", function(event) {
    console.log(event);
});