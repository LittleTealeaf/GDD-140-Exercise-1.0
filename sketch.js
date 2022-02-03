/// <reference path="./ref/p5.d.ts" />

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(220);
  strokeWeight(4);
  stroke(0);
  line(0,0,400,400);
  line(0,400,400,0);
  line(0,0,400,0);
  line(0,0,0,400);
  line(400,400,0,400);
  line(400,400,400,0);
  strokeWeight(1);
  fill(255,0,0);
  rect(200,200,100,100);
  fill(255,255,0);
  rect(width/2,height/2,75,75);
  fill(0,255,100);
  ellipse(width/2,height/2,70,40);
  arc(width/2,height/2,200,200,10,10);
}