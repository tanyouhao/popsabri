window.onload = function(){
    var img = document.getElementById("popcat1");
    var count = document.getElementById("score");
    var score = 0;
    var audio = new Audio("pkp.mp3");

    img.addEventListener('mousedown', function (){
        increaseScore();
        img.src = 'sabri.png';
        audio.play();
    });

    img.addEventListener('mouseup', function (){
        img.src = 'images.png';
        audio.play();
    });

    function increaseScore(){
        score++;
        count.innerHTML = score;
    }
}