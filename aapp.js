var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var cor = "red";

var ultimoX;
var ultimoY;
var largura = 1;
var width = screen.width
var novawidth = width - 70
var novaheight = screen.height - 300

if (width<922) {
canvas.width = novawidth
canvas.height = novaheight
document.body.style.overflow = 'hidden'
}

function meutouchDown(e) {
	cor = document.getElementById("cor").value;
	largura = document.getElementById("largura").value;
	ultimoX =  e.touches [0].clientX - canvas.offsetLeft
    ultimoY=  e.touches [0].clientY - canvas.offsetTop
}
canvas.addEventListener("touchstart", meutouchDown);



function meutouchMove(e) {
	var X = e.touches [0].clientX  - canvas.offsetLeft;
	var Y = e.touches [0].clientY   - canvas.offsetTop;
	
		ctx.beginPath();
		ctx.strokeStyle = cor;
		ctx.lineWidth = largura;
		ctx.moveTo(ultimoX, ultimoY);
		ctx.lineTo(X,Y);
		ctx.stroke();
	

	ultimoX = X;
	ultimoY = Y;
}
canvas.addEventListener("touchmove", meutouchMove);

function limpar() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}










var ctx = canvas.getContext("2d");
var cor = "red";
var eventouMouse = "vazio";
var ultimoX;
var ultimoY;
var largura = 1;

function meuMouseDown() {
	cor = document.getElementById("cor").value;
	largura = document.getElementById("largura").value;
	eventouMouse = "mouseDown";
	console.log("teste down");
}
canvas.addEventListener("mousedown", meuMouseDown);

function meuMouseUp() {
	eventouMouse = "mouseUp";
	console.log("teste up");
}
canvas.addEventListener("mouseup", meuMouseUp);

function meuMouseLeave() {
	eventouMouse = "mouseLeave";
	console.log("teste leave");
}
canvas.addEventListener("mouseleave", meuMouseLeave);

function meuMouseMove(e) {
	var mouseX = e.clientX - canvas.offsetLeft;
	var mouseY = e.clientY - canvas.offsetTop;
	if (eventouMouse == "mouseDown") {
		ctx.beginPath();
		ctx.strokeStyle = cor;
		ctx.lineWidth = largura;
		ctx.moveTo(ultimoX, ultimoY);
		ctx.lineTo(mouseX, mouseY);
		ctx.stroke();
	}

	ultimoX = mouseX;
	ultimoY = mouseY;
}
canvas.addEventListener("mousemove", meuMouseMove);

function limpar() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}