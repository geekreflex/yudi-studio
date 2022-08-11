import {
  regularPolygonPoints,
  starPolygonPoints,
} from "../utils/polygonPoints";
import { editor, selectedObj } from "../store/store";
import FontFaceObserver from "fontfaceobserver";

let canvas;
let object;
editor.subscribe((val) => (canvas = val));
selectedObj.subscribe((val) => (object = val));

export const skewX = (val) => {
  canvas.getActiveObject().set("skewX", parseInt(val, 10)).setCoords();
  canvas.requestRenderAll();
};

export const skewY = (val) => {
  canvas.getActiveObject().set("skewY", parseInt(val, 10)).setCoords();
  canvas.requestRenderAll();
};

export const onLeftPos = (val) => {
  canvas.getActiveObject().set("left", parseInt(val, 10)).setCoords();
  canvas.requestRenderAll();
};

export const onRightPos = (val) => {
  canvas.getActiveObject().set("top", parseInt(val, 10)).setCoords();
  canvas.requestRenderAll();
};

export const onWidthChange = (val) => {
  if (object.type === "circle") {
    canvas
      .getActiveObject()
      .set("radius", parseInt(val) / 2)
      .setCoords();
    canvas.requestRenderAll();
    return;
  }

  canvas.getActiveObject().set("width", parseInt(val)).setCoords();
  canvas.requestRenderAll();
};

export const onHeightChange = (val) => {
  if (object.type === "circle") {
    canvas
      .getActiveObject()
      .set("radius", parseInt(val) / 2)
      .setCoords();
    canvas.requestRenderAll();
    return;
  }
  canvas.getActiveObject().set("height", parseInt(val)).setCoords();
  canvas.requestRenderAll();
};

export const onDuplicate = () => {
  object.clone((clone) => {
    canvas.add(
      clone.set({
        left: object.left + 10,
        top: object.top + 10,
      })
    );
  });
};

export const onDelete = () => {
  const objects = canvas.getActiveObjects();
  objects.map((obj) => {
    canvas.remove(obj);
    canvas.getActiveObject(obj);
  });
  canvas.discardActiveObject().renderAll();
  selectedObj.update(() => null);
};

export const onDeleteAll = () => {
  const objects = canvas.getObjects();
  objects.map((obj) => {
    canvas.remove(obj);
  });
  canvas.discardActiveObject().renderAll();
  selectedObj.update(() => null);
};

export const onSendBackward = () => {
  const objects = canvas.getActiveObjects();
  objects.map((obj) => {
    canvas.sendBackwards(obj);
  });
  canvas.requestRenderAll();
};

export const onBringForward = () => {
  const objects = canvas.getActiveObjects();
  console.log(objects);
  objects.map((obj) => {
    canvas.bringForward(obj);
  });
  canvas.requestRenderAll();
};

export const onBringToFront = () => {
  const objects = canvas.getActiveObjects();
  objects.map((obj) => {
    canvas.bringToFront(obj);
  });
  canvas.requestRenderAll();
};

export const onSendToBack = () => {
  const objects = canvas.getActiveObjects();
  objects.map((obj) => {
    canvas.sendToBack(obj);
  });
  canvas.requestRenderAll();
};

export const onFlipX = () => {
  const objects = canvas.getActiveObjects();
  objects.map((obj) => {
    obj.toggle("flipX");
  });
  canvas.requestRenderAll();
};

export const onFlipY = () => {
  const objects = canvas.getActiveObjects();
  objects.map((obj) => {
    obj.toggle("flipY");
  });
  canvas.requestRenderAll();
};

export const onFillChange = (val) => {
  const objects = canvas.getActiveObjects();
  objects.map((obj) => {
    obj.set("fill", val);
  });
  canvas.renderAll();
};

export const onStrokeChange = (val) => {
  const objects = canvas.getActiveObjects();
  objects.map((obj) => {
    obj.set("stroke", val);
  });
  canvas.renderAll();
};

export const onStrokeWidth = (val) => {
  const objects = canvas.getActiveObjects();

  objects.map((obj) => {
    obj.set("strokeWidth", parseInt(val, 10));
  });
  canvas.renderAll();
};

export const onOpacityChange = (val) => {
  const objetcs = canvas.getActiveObjects();
  objetcs.map((obj) => {
    obj.set("opacity", val);
  });
  canvas.renderAll();
};

export const onFontSize = (val) => {
  canvas.getActiveObject().set("fontSize", parseInt(val));
  canvas.renderAll();
};

export const onLogObject = () => {
  console.log(canvas.getActiveObject());
};

export const onPolygonCorners = (val, name) => {
  if (val < 3) {
    return;
  }

  let newPoints =
    name === "star"
      ? starPolygonPoints(val, 50, 100)
      : regularPolygonPoints(val, 100);

  canvas.getActiveObject().set("points", newPoints).setCoords();
  canvas.renderAll();
};

export const onStarSpokeRatio = (val) => {
  let corners = canvas.getActiveObject().points.length / 2;
  let newPoints = starPolygonPoints(corners, val, 100);
  canvas.getActiveObject().set("points", newPoints).setCoords();
  canvas.renderAll();
};

export const onRoundX = (val) => {
  canvas.getActiveObject().set("rx", parseInt(val, 10)).setCoords();
  canvas.requestRenderAll();
};

export const onRoundY = (val) => {
  canvas.getActiveObject().set("ry", parseInt(val, 10)).setCoords();
  canvas.requestRenderAll();
};

export const onFontFamilyChange = (font) => {
  const myfont = new FontFaceObserver(font);

  if (
    font === "Ubuntu" ||
    font === "Times New Roman" ||
    font === "Helvetica" ||
    font === "Arial"
  ) {
    canvas.getActiveObject().set("fontFamily", font);
    canvas.renderAll();
    return;
  }

  myfont
    .load()
    .then(function () {
      // when font is loaded, use it.
      canvas.getActiveObject().set("fontFamily", font);
      canvas.renderAll();
    })
    .catch(function (e) {
      console.log("font loading failed " + font);
    });
};

export const onFontWeight = (val) => {
  let object = canvas.getActiveObject();
  if (val === object.fontWeight) {
    canvas.getActiveObject().set("fontWeight", "normal");
  } else {
    canvas.getActiveObject().set("fontWeight", val);
  }
  canvas.renderAll();
};

export const onFontUnderline = () => {
  let object = canvas.getActiveObject();

  if (object.underline) {
    canvas.getActiveObject().set("underline", false);
  } else {
    canvas.getActiveObject().set("underline", true);
  }
  canvas.renderAll();
};

export const onRotate = (angleOffset) => {
  let object = canvas.getActiveObject();
  let angle = object.angle + angleOffset;
  angle = angle > 360 ? 90 : angle < 0 ? 270 : angle;
  object.rotate(angle).setCoords();
  canvas.renderAll();
};
