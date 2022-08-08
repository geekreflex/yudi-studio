import {
  regularPolygonPoints,
  starPolygonPoints,
} from "../utils/polygonPoints";
import { editor, selectedObj } from "../store/store";
import { fabric } from "fabric";

let canvas;
editor.subscribe((val) => (canvas = val));

export const addText = () => {
  canvas.isDrawingMode = false;
  const text = new fabric.Textbox("Click to edit", {
    width: 200,
  });
  canvas.centerObject(text).add(text).setActiveObject(text);
};

export const addTriangle = () => {
  canvas.isDrawingMode = false;
  const triangle = new fabric.Triangle();
  canvas.centerObject(triangle).add(triangle).setActiveObject(triangle);
};

export const addRectangle = () => {
  canvas.isDrawingMode = false;
  const rect = new fabric.Rect({
    width: 100,
    height: 100,
  });
  canvas.centerObject(rect).add(rect).setActiveObject(rect);
  canvas.calcOffset();
};

export const addCircle = () => {
  canvas.isDrawingMode = false;
  const circle = new fabric.Circle({
    radius: 50,
  });
  canvas.centerObject(circle).add(circle).setActiveObject(circle);
};

export const addLine = () => {
  canvas.isDrawingMode = false;
  const line = new fabric.Line([50, 100, 200, 200], {
    left: 170,
    top: 150,
    stroke: "000000",
  });

  canvas.centerObject(line).add(line).setActiveObject(line);
};

const polyPoints = regularPolygonPoints(5, 100);
export const addPolygon = () => {
  canvas.isDrawingMode = false;
  const polygon = new fabric.Polygon(polyPoints, { name: "regpoly" });
  canvas.centerObject(polygon).add(polygon).setActiveObject(polygon);
};

const starPoints = starPolygonPoints(5, 50, 100);
export const addStar = () => {
  canvas.isDrawingMode = false;
  const star = new fabric.Polygon(starPoints, { name: "star" });
  canvas.centerObject(star).add(star).setActiveObject(star);
};

export const addFreeDrawing = () => {
  canvas.isDrawingMode = !canvas.isDrawingMode;
  if (canvas.isDrawingMode) {
    selectedObj.set({ type: "path" });
  } else {
    selectedObj.set(null);
  }
};
