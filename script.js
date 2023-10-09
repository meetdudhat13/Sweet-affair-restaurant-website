let btn = document.getElementById("about");

let modal = document.getElementById("modal");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
    modal.style.display = "block";
    modal.style.color = "red";
}

span.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event){
    if(event.target = modal)
    {
        modal.style.display = "none";
    }
}