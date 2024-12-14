const heartbeat = document.querySelector(".heartbeat");


function firstHeart(){
        document.getElementById("monitor").style.backgroundImage = "url(heart1.gif)";
        document.querySelector("h3").innerHTML = 'HEALTHY';
        heartbeat.classList.remove("animate-red");
        heartbeat.classList.remove("animate-yellow");
}
function secondHeart(){
    document.getElementById("monitor").style.backgroundImage = "url(heart2.gif)";
    document.querySelector("h3").innerHTML = 'WARNING!';
    heartbeat.classList.add("animate-yellow");
    heartbeat.classList.remove("animate-red");
}
function thirdHeart(){
        document.getElementById("monitor").style.backgroundImage = "url(heart3.gif)";
        document.querySelector("h3").innerHTML = 'DANGER!';
        heartbeat.classList.add("animate-red");
        heartbeat.classList.remove("animate-yellow");
}

const clickDiv = document.querySelectorAll('.row');

clickDiv.forEach(div => {
        div.addEventListener('click', function() {

        const sleep = div.getAttribute('data-sleep');
        const major = div.getAttribute('data-major');
        const finance = div.getAttribute('data-finance');
        const future = div.getAttribute('data-future');
        

        document.getElementById('result-one').innerText = sleep;
        document.getElementById('result-two').innerText = major;
        document.getElementById('result-three').innerText = finance;
        document.getElementById('result-four').innerText = future;
        });
});