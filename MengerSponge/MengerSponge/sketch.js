/// <reference path="../TSDef/p5.global-mode.d.ts" />

"use strict";

const cubeSize = 100;

let clickCubeSize = cubeSize;

function setup() {
  angleMode(DEGREES);
  createCanvas(650, 650, WEBGL);
  noStroke();
}

function draw() {
  background(0);
  directionalLight(color(220), 0, 0, -400);
  rotateY(frameCount / 3);
  mengerSponge(cubeSize);
}

function displayCubes(x, y, z, cubeSize) {
  push();
  translate(x, y, z, cubeSize);
  if (cubeSize > clickCubeSize) {
    mengerSponge(cubeSize / 3);
  } else {
    box(cubeSize);
  }
  pop();
}

function mengerSponge(cubeSize) {
  //Middle Layer
  displayCubes(cubeSize, -cubeSize, 0, cubeSize);
  displayCubes(-cubeSize, -cubeSize, 0, cubeSize);
  displayCubes(cubeSize, cubeSize, 0, cubeSize);
  displayCubes(-cubeSize, cubeSize, 0, cubeSize);
  //Back Layer Corners
  displayCubes(-cubeSize, -cubeSize, -cubeSize, cubeSize);
  displayCubes(cubeSize, -cubeSize, -cubeSize, cubeSize);
  displayCubes(-cubeSize, cubeSize, -cubeSize, cubeSize);
  displayCubes(cubeSize, cubeSize, -cubeSize, cubeSize);
  //Back Layer Edges
  displayCubes(0, -cubeSize, -cubeSize, cubeSize);
  displayCubes(0, cubeSize, -cubeSize, cubeSize);
  displayCubes(-cubeSize, 0, -cubeSize, cubeSize);
  displayCubes(cubeSize, 0, -cubeSize, cubeSize);
  //Front Layer Corners
  displayCubes(-cubeSize, -cubeSize, cubeSize, cubeSize);
  displayCubes(cubeSize, -cubeSize, cubeSize, cubeSize);
  displayCubes(-cubeSize, cubeSize, cubeSize, cubeSize);
  displayCubes(cubeSize, cubeSize, cubeSize, cubeSize);
  //Front Layer Edges
  displayCubes(0, -cubeSize, cubeSize, cubeSize);
  displayCubes(0, cubeSize, cubeSize, cubeSize);
  displayCubes(-cubeSize, 0, cubeSize, cubeSize);
  displayCubes(cubeSize, 0, cubeSize, cubeSize);
}

function mouseClicked() {
  clickCubeSize === cubeSize ? clickCubeSize /= 2 : clickCubeSize = cubeSize;
}
