let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");

canvas.width = 904;
canvas.height = 378;

let ground = new Image();
ground.src = "backgraound.png"
let player = new Image();
player.src = "osakka.png"
let cheto = new Image();
cheto.src = "chetocvhant.png"
let wal = new Image();
wal.src = "wallter.png"
let dinoStart = false;

let groundX = 0
let playerY = 180
let chetoX = 980
let walX = 1680
let time = 0
let move = "none"

ground.onload = function(){
    ctx.drawImage(ground, 0, 0, 1808, 378)
}
document.addEventListener("keydown", moveUp);

function moveUp(event) {
    if (event.key=="Enter" && dinoStart == false) {
        dinoStart = true; requestAnimationFrame(draw);}
    if (event.code=="Space" && move=="none"){
        move="up";
    }
}
function draw(){
    if (dinoStart==true) requestAnimationFrame(draw);
    time++;
    ctx.clearRect (0, 0, 904, 378);
    //animation ground
    groundX -= 2;
    if (groundX <= -904) (groundX = 0);
    //otrisovka
    ctx.drawImage(ground, groundX, 0);
    ctx.drawImage(player, 100, playerY);
    //poyavlenie препятсвий
    ctx.drawImage(cheto, chetoX, 240);
    chetoX -= 2;
    if (chetoX <= -64) (chetoX = 980);
    if (chetoX > 100 && chetoX < 159 && playerY > 100) {
        dinoStart=false
    }
    //poyavlenie wallov
    ctx.drawImage(wal, walX, 260);
    walX -= 2;
    if (walX <= -87) (walX = 1680);
    if (walX > 100 && walX < 169 && playerY > 100) {
        dinoStart=false
    }
    //jump
    if (move == 'up'){
        playerY -= 4.5;
        if (playerY <= 0) {move = 'down'; playerY = 0;}
    } else if (move == 'down') {
        playerY += 1.5;
        if (playerY >= 180) {move = 'none'; playerY = 180;}
    }
    if (dinoStart == false) {
        ctx.font = "40px Comic Sans MS";
        ctx.fillText('Ваш счёт ' + time, 450, 160);
    }
    if (dinoStart == true) {
        ctx.font = "40px Comic Sans MS";
        ctx.fillText('Ваш счёт ' + time, 450, 160);
    }
}

    platwo.addEventListener('click', function() {
        player.src = 'osksa.png';
    });

    plaone.addEventListener('click', function() {
        player.src = 'osakka.png';
    });

    enetwo.addEventListener('click', function() {
        cheto.src = 'chetochan.png';
    });

    eneone.addEventListener('click', function() {
        cheto.src = 'chetocvhant.png';
    });

    fontwo.addEventListener('click', function() {
        ground.src = 'bacround.png';
    });

    fonone.addEventListener('click', function() {
        ground.src = 'backgraound.png';
    });
