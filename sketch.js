function setup(){
x = 150;
y= 0; 
z = 94; 
createCanvas(windowWidth,windowHeight);
}

//birthday month 
//march = (51,51,255)


console.log("print to console");

speed = 2;
circleDims = [10,20,100];

console.log(circleDims[0]);
console.log(circleDims[1]);
console.log(circleDims[2]);






//if x =windowWidth, then * -1

//if(x > windowWidth){

//speed =speed*(-1)
//}
//else{}




function draw(){
    
    background(51,51,250);

console.log(x);
console.log(z);

    stroke(153);
    line(0, 0, 150, 4000)
    stroke(153);
    line(0, 0, 300, 4000);
    stroke(153);
    line(0, 0, 600, 4000);
    stroke(153);
    line(0, 0, 1200, 4000);
    stroke(153);
    line(0, 0, 2400, 4000)
    stroke(153);
    line(0, 0, 3600, 4000)
    stroke(153);
    line(0, 0, 4800, 4000);
    stroke(153);
    line(0, 0, 9600, 4000);
    stroke(153);
    line(0, 0, 19200, 4000);
 
    stroke(153);
    line(1910, 0, 150, 4000)
    stroke(153);
    line(1910, 0, 300, 4000);
    stroke(153);
    line(1910, 0, 600, 4000);
    stroke(153);
    line(1910, 0, 1200, 4000);
    stroke(153);
    line(1910, 0, 2400, 4000)
    stroke(153);
    line(1910, 0, 4800, 4000);
    stroke(153);
    line(1910, 0, 9600, 4000);
    stroke(153);
    line(1910, 0, 19200, 4000);

    

circle (200,250,30)
circle (500,500,30)
circle (windowWidth/2,windowHeight/2,30)
circle (windowWidth/2+300,windowHeight/2+300,30)
circle (windowWidth/2-300,windowHeight/2-300,30)


push();
  translate(width * 0.8, height * 0.5);
  rotate(frameCount / -100.0);
  polygon(0, 0, 70, 7);
  pop();

  function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
}
}