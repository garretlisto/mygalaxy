function mySun(){
    var c = document.getElementById("mycanvas");
    var draw = c.getContext("2d");
    draw.beginPath();
    draw.fillStyle = "orange";
    draw.arc(-15, -15, 200, 0, Math.PI * 2, true);
    draw.closePath();
draw.fill();
}
function myMercury(){
    var c = document.getElementById("mycanvas");
    var draw = c.getContext("2d");
    draw.beginPath();
    draw.fillStyle = "tan";
    draw.arc(125, 300, 5, 0, Math.PI * 2, true);
    draw.closePath();
draw.fill();
}

function myVenus(){
    var c = document.getElementById("mycanvas");
    var draw = c.getContext("2d");
    draw.beginPath();
    draw.fillStyle = "tan";
    draw.arc(200, 250, 15, 0, Math.PI * 2, true);
    draw.closePath();
draw.fill();
}
function myEarth(){
    var c = document.getElementById("mycanvas");
    var draw = c.getContext("2d");
    draw.beginPath();
    draw.fillStyle = "teal";
    draw.arc(300, 200, 25, 0, Math.PI * 2, true);
    draw.closePath();
draw.fill();
}
function myMars(){
    var c = document.getElementById("mycanvas");
    var draw = c.getContext("2d");
    draw.beginPath();
    draw.fillStyle = "red";
    draw.arc(375, 150, 12, 0, Math.PI * 2, true);
    draw.closePath();
draw.fill();
}
function myJupiter(){
    var c = document.getElementById("mycanvas");
    var draw = c.getContext("2d");
    draw.beginPath();
    draw.fillStyle = "darkorange";
    draw.arc(500, 200, 75, 0, Math.PI * 2, true);
    draw.closePath();
draw.fill();
}
function mySaturn(){
    var c = document.getElementById("mycanvas");
    var draw = c.getContext("2d");
    draw.beginPath();
    draw.fillStyle = "tan";
    draw.arc(645, 300, 60, 0, Math.PI * 2, true);
    draw.closePath();
draw.fill();
}
function mySaturnRing(){
    var c = document.getElementById("mycanvas");
    var draw = c.getContext("2d");
    draw.beginPath();
    draw.moveTo(750, 250);
    draw.lineTo(550, 350);
    draw.strokeStyle = "white";
draw.stroke();
}
function myUranus(){
    var c = document.getElementById("mycanvas");
    var draw = c.getContext("2d");
    draw.beginPath();
    draw.fillStyle = "lightblue";
    draw.arc(800, 200, 30, 0, Math.PI * 2, true);
    draw.closePath();
draw.fill();
}
function myNeptune(){
    var c = document.getElementById("mycanvas");
    var draw = c.getContext("2d");
    draw.beginPath();
    draw.fillStyle = "blue";
    draw.arc(900, 250, 27, 0, Math.PI * 2, true);
    draw.closePath();
draw.fill();
}

function mySpaceshipA(){
    var c = document.getElementById("mycanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = "3";
    ctx.strokeStyle = "white";
    ctx.rect(650, 50, 15, 8);
    ctx.stroke();
}
function mySpaceshipB(){
    var c = document.getElementById("mycanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = "3";
    ctx.strokeStyle = "white";
    ctx.rect(650, 23, 15, 18);
    ctx.stroke();
}
function mySpaceshipC(){
    var c = document.getElementById("mycanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = "3";
    ctx.strokeStyle = "white";
    ctx.rect(650, 67, 15, 18);
    ctx.stroke();
}

function mySpaceshipD(){
    var c = document.getElementById("mycanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = "3";
    ctx.strokeStyle = "white";
    ctx.rect(650, 50, 50, 8);
    ctx.stroke();
}

function mySpaceshipE(){
    var c = document.getElementById("mycanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = "3";
    ctx.strokeStyle = "white";
    ctx.rect(650, 50, -35, 8);
    ctx.stroke();
}

function myGalaxy(){
    mySun();
    myMercury();
    myVenus();
    myEarth();
    myMars();
    myJupiter();
    mySaturn();
    mySaturnRing();
    myUranus();
    myNeptune();
    mySpaceshipA();
    mySpaceshipB();
    mySpaceshipC();
    mySpaceshipD();
    mySpaceshipE();
}