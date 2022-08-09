import {
  regularPolygonPoints,
  starPolygonPoints,
} from "../utils/polygonPoints";
import { editor, fillStroke, freeDrawingMode } from "../store/store";
import { fabric } from "fabric";

let canvas;
editor.subscribe((val) => (canvas = val));

export const addText = () => {
  remomveFreeDrawing();
  const text = new fabric.Textbox("Click to edit", {
    width: 200,
  });
  canvas.centerObject(text).add(text).setActiveObject(text);
};

export const addTriangle = () => {
  remomveFreeDrawing();
  const triangle = new fabric.Triangle();
  canvas.centerObject(triangle).add(triangle).setActiveObject(triangle);
};

export const addRectangle = () => {
  remomveFreeDrawing();
  const rect = new fabric.Rect({
    width: 100,
    height: 100,
  });
  canvas.centerObject(rect).add(rect).setActiveObject(rect);
  canvas.calcOffset();
};

export const addCircle = () => {
  remomveFreeDrawing();
  const circle = new fabric.Circle({
    radius: 50,
  });
  canvas.centerObject(circle).add(circle).setActiveObject(circle);
};

export const addLine = () => {
  remomveFreeDrawing();
  const line = new fabric.Line([50, 100, 200, 200], {
    left: 170,
    top: 150,
    stroke: "000000",
  });

  canvas.centerObject(line).add(line).setActiveObject(line);
};

const polyPoints = regularPolygonPoints(5, 100);
export const addPolygon = () => {
  remomveFreeDrawing();
  const polygon = new fabric.Polygon(polyPoints, {
    name: "regpoly",
    objectCaching: false,
  });
  canvas.centerObject(polygon).add(polygon).setActiveObject(polygon);
};

const starPoints = starPolygonPoints(5, 50, 100);
export const addStar = () => {
  remomveFreeDrawing();
  const star = new fabric.Polygon(starPoints, {
    name: "star",
    objectCaching: false,
  });
  canvas.centerObject(star).add(star).setActiveObject(star);
};

export const remomveFreeDrawing = () => {
  canvas.isDrawingMode = false;
  freeDrawingMode.set(false);
};

export const addFreeDrawing = () => {
  canvas.isDrawingMode = !canvas.isDrawingMode;
  fillStroke.set("stroke");
  freeDrawingMode.update((val) => !val);
};