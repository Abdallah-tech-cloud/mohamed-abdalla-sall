console.log("Bienvenue sur le site officiel de Mohamed Djafar Abdalla Sall");

document.querySelectorAll("a").forEach(link => {
link.addEventListener("click", function(){
console.log("Navigation sur le site");
});
});
