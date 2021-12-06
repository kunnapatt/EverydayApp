import {React, useRef, useEffect} from 'react';

function Sakura(props) {
    const canvasRef = useRef(null) ;
    const number_of_balls = 200 ;

    // componentDidMount() {

    // }

    useEffect(() => {
        const canvas = canvasRef.current ;
        const canvasContext = canvas.getContext('2d') ;
        canvasContext.canvas.width = window.innerWidth ;
        canvasContext.canvas.height = window.innerHeight ;
        const balls = createBalls(canvas, number_of_balls) ;

        const interval = setInterval(() => {
            canvasContext.fillStyle = '#000000' ;
            // canvasContext.fillRect(0, 0, canvas.width, canvas.height) ;
            canvasContext.clearRect(0, 0, canvas.width, canvas.height)
            setUp(canvas, canvasContext, balls) ;
        }, 1000/60) ;

        return () => {clearInterval(interval)} ;
    }, [])



    return (
        <canvas ref={canvasRef} {...props}></canvas>
    ) ;
}

function setUp(canvas, canvasContext, balls) {

    // console.log(canvasContext.width, canvasContext.height) ;
    balls.forEach((ball) => drawBalls(canvasContext, ball)) ;
    balls.forEach((ball) => moveBall(canvas, ball)) ;
}

function createBalls(canvas, number_of_balls) {
    const array = [...Array(number_of_balls)].map(() => {
        return {
            posX: random(0, canvas.width),
            posY: random(0, canvas.height),
            speedX: random(0, 0.5),
            speedY: random(0.5, 1.5),
            size: random(0, 10),
            opacity: random(0.5, 0.9)
        }
    }) ;
    return array ;
}

function moveBall(canvas, ball) {
    ball.posX += ball.speedX ;
    ball.posY += ball.speedY ;

    if (ball.posX > canvas.width) {
        ball.posX = 0 ;
    } else if (ball.posX < 0) {
        ball.posX = canvas.width ;
    }

    if (ball.posY > canvas.height) {
        ball.posY = 0 ;
    }
}

function drawBalls(canvasContext, ball) {

    canvasContext.beginPath() ;
    canvasContext.arc(ball.posX, ball.posY, ball.size, 0, Math.PI * 2) ;
    canvasContext.fillStyle = `rgba(200, 200, 200, ${ball.opacity})` ;
    canvasContext.fill() ;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min ;
}

export default Sakura ;