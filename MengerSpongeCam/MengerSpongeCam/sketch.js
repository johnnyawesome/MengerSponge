/// <reference path="../TSDef/p5.global-mode.d.ts" />

"use strict";

const cubeSize = 100;

function setup() {
  angleMode(DEGREES);
  createCanvas(650, 650, WEBGL);
  background(0);
  //stroke(0, 255, 0);
  noStroke();
  smooth();

  //EasyCam
  createEasyCam();

}

function draw() {
  background(0);
  directionalLight(color(200), 100, 100, -300);
  rotateY(frameCount / 2);
  //rotateX(frameCount / 2);
  mengerSponge(cubeSize);
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

function displayCubes(x, y, z, cubeSize) {
  push();
  translate(x, y, z, cubeSize);
  if (cubeSize > 15) {
    mengerSponge(cubeSize / 3);
  } else {
    box(cubeSize);
  }
  pop();
}

