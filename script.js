function changeColor()
{
    
    document.body.style.backgroundColor = `rgb(` + document.getElementById("red").value + `,` + document.getElementById("green").value +  `,` + document.getElementById("blue").value + `)`;

    document.getElementById("span").innerHTML = `RGB(` + document.getElementById("red").value + `,` + document.getElementById("green").value +  `,` + document.getElementById("blue").value + `)`;
}


var x = document.getElementById("redazalt");
x.addEventListener("mousedown",startRedazalt);
x.addEventListener("mouseup",stopRedazalt);

var intervalId;

function startRedazalt() {
  intervalId = setInterval(redazalt, 100);
}

function stopRedazalt() {
  clearInterval(intervalId);
}

function redazalt(){
    if(document.getElementById("red").value > 0 && document.getElementById("red").value <= 250)
    {
        document.getElementById("red").value =  parseInt(document.getElementById("red").value)-1;
    }
}




var y = document.getElementById("redart");
y.addEventListener("mousedown",startRedart);
y.addEventListener("mouseup",stopRedart);

var intervalId2;

function startRedart() {
  intervalId2 = setInterval(redart, 100);
}

function stopRedart() {
  clearInterval(intervalId2);
}

function redart(){
    if(document.getElementById("red").value >= 0 && document.getElementById("red").value < 250)
    {
        document.getElementById("red").value = parseInt(document.getElementById("red").value)+1;
    }
}





var z = document.getElementById("greenazalt");
z.addEventListener("mousedown",startGreenazalt);
z.addEventListener("mouseup",stopGreenazalt);

var intervalId3;

function startGreenazalt() {
  intervalId3 = setInterval(greenazalt, 100);
}

function stopGreenazalt() {
  clearInterval(intervalId3);
}

function greenazalt(){
    if(document.getElementById("green").value > 0 && document.getElementById("green").value <= 250)
    {
        document.getElementById("green").value =  parseInt(document.getElementById("green").value)-1;
    }
}





var a = document.getElementById("greenart");
a.addEventListener("mousedown",startGreenart);
a.addEventListener("mouseup",stopGreenart);

var intervalId4;

function startGreenart() {
  intervalId4 = setInterval(greenart, 100);
}

function stopGreenart() {
  clearInterval(intervalId4);
}

function greenart(){
    if(document.getElementById("green").value >= 0 && document.getElementById("green").value < 250)
    {
        document.getElementById("green").value = parseInt(document.getElementById("green").value)+1;
    }
}





var b = document.getElementById("blueazalt");
b.addEventListener("mousedown",startBlueazalt);
b.addEventListener("mouseup",stopBlueazalt);

var intervalId5;

function startBlueazalt() {
  intervalId5 = setInterval(blueazalt, 100);
}

function stopBlueazalt() {
  clearInterval(intervalId5);
}

function blueazalt(){
    if(document.getElementById("blue").value > 0 && document.getElementById("blue").value <= 250)
    {
        document.getElementById("blue").value =  parseInt(document.getElementById("blue").value)-1;
    }
}




var c = document.getElementById("blueart");
c.addEventListener("mousedown",startBlueart);
c.addEventListener("mouseup",stopBlueart);

var intervalId6;

function startBlueart() {
  intervalId6 = setInterval(blueart, 100);
}

function stopBlueart() {
  clearInterval(intervalId6);
}

function blueart(){
    if(document.getElementById("blue").value >= 0 && document.getElementById("blue").value < 250)
    {
        document.getElementById("blue").value = parseInt(document.getElementById("blue").value)+1;
    }
}