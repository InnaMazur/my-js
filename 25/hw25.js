window.onload = function(){

    const canvas = document.getElementById('rectangles');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';  
ctx.fillRect( 10,10,150,100);

ctx.fillStyle = 'green'; 
ctx.fillRect(110,30,150,100);

ctx.fillStyle = 'yellow'; 
ctx.fillRect(210,50,150,100);

//2

function drawGradient(color1, color2){
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

const gradient = ctx.createLinearGradient(0,0,200,0);
gradient.addColorStop(0, color1);
gradient.addColorStop(1, color2);

ctx.fillStyle = gradient;
ctx.fillRect(0,0,200,100);
}
drawGradient('blue', 'red');


//3

function drawLine(xStart, yStart, xEnd, yEnd,color){
    const canvas = document.getElementById('canvasline');
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xEnd, yEnd);
    ctx.strokeStyle = color;
    ctx.stroke();

}
drawLine(50,50,350,70,'yellow');

//4

function drawSvgLine(x1, y1, x2, y2, color, width) {
    const svgNs = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNs, 'svg');

    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100vh');

    const line = document.createElementNS(svgNs, 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke', color);
    line.setAttribute('stroke-width', width);

    svg.appendChild(line);
    document.body.appendChild(svg);
}
drawSvgLine(100,100,400,400,'blue',10);


//5


function createSvgRectangle(width, height, fillColor, strokeColor, strokeWidth) {
    const svgNs = "http://www.w3.org/2000/svg";
  
    const svg = document.createElementNS(svgNs, 'svg');
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
  
    const rect = document.createElementNS(svgNs, 'rect');
    rect.setAttribute("x", 0);
    rect.setAttribute("y", 0);
    rect.setAttribute("width", width);
    rect.setAttribute("height", height);
    rect.setAttribute("fill", fillColor);
    rect.setAttribute("stroke", strokeColor);
    rect.setAttribute("stroke-width", strokeWidth);
  
    svg.appendChild(rect);
    document.body.appendChild(svg);
  }
    createSvgRectangle(200, 100, "orange", "black", 5);


}