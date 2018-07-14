namespace s06canvas {
    let board = document.querySelector('#board') as HTMLCanvasElement;
    let ctx = board.getContext('2d');

    let ballX = 400;
    let ballY = 300;


    let ballDx = 10;
    let ballDy = 10;

    function drawBall(){
        ctx.beginPath();
        ctx.arc(ballX, ballY,10,0,Math.PI*2,false);
        ctx.fillStyle = "#00f0f0";
        ctx.fill();
        ctx.closePath();

    }

    function draw(){
        ctx.clearRect(0,0,board.width, board.height)
        drawBall();
        if(ballX < 0 || ballX > 800){
            ballDx *= -1;
        }
        if(ballY < 0 || ballY > 600){
            ballDy *= -1;
        }
        ballX += ballDx;
        ballY += ballDy;
    }


    window.setInterval(draw, 30);
}    