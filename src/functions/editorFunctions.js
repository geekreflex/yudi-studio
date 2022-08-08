import { editor, selectedObj } from "../store/store";

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

export const onSendBackward = () => {
  const objects = canvas.getActiveObjects();
  objects.map((obj) => {
    canvas.sendBackwards(obj);
  });
  canvas.requestRenderAll();
};

export const onBringForward = () => {
  const objects = canvas.getActiveObjects();
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
  console.log(objects.type);
  console.log(object.type);
};

export const onFillChange = (val) => {
  const objects = canvas.getActiveObjects();
  objects.map((obj) => {
    obj.set("fill", val);
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