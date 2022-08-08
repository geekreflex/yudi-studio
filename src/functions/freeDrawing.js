import { fabric } from "fabric";
import { editor } from "../store/store";

let canvas;
editor.subscribe((val) => (canvas = val));

let brushColor = "#ff0000";
let brushWidth = 1;
let vLinePatternBrush;

if (fabric.PatternBrush) {
  vLinePatternBrush = new fabric.PatternBrush(canvas);
  vLinePatternBrush.getPatternSrc = function () {
    let patternCanvas = fabric.document.createElement("canvas");
    patternCanvas.width = patternCanvas.height = 10;
    var ctx = patternCanvas.getContext("2d");

    ctx.strokeStyle = this.color;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0, 5);
    ctx.lineTo(10, 5);
    ctx.closePath();
    ctx.stroke();

    return patternCanvas;
  };
}

export const onModeChange = (val) => {
  console.log(val);
  if (val === "hline") {
    canvas.freeDrawingBrush = vLinePatternBrush;
  } else {
    canvas.freeDrawingBrush = new fabric[val + "Brush"](canvas);
  }

  if (canvas.freeDrawingBrush) {
    let brush = canvas.freeDrawingBrush;
    brush.color = brushColor;
    if (brush.getPatternSrc) {
      brush.source = brush.getPatternSrc.call(brush);
    }
    brush.width = parseInt(brushWidth, 10) || 1;
  } else {
    console.log("skskkss");
  }
};

export const onBrushStrokeColor = (color) => {
  let brush = canvas.freeDrawingBrush;
  brush.color = color;
  if (brush.getPatternSrc) {
    brush.source = brush.getPatternSrc.call(brush);
  }
};

export const onBrushWidth = (width) => {
  canvas.freeDrawingBrush.width = parseInt(width, 10) || 1;
};
