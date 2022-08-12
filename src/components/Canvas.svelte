<script>
import { fabric } from "fabric";
import { onMount } from "svelte";
import { editor, selectedObj, items, unfinishedModal } from "../store/store";
import Snippets from "./widgets/Snippets.svelte";

onMount(() => {
  const canvas = new fabric.Canvas("canvas-elem", {
    backgroundColor: "#ffffff",
    preserveObjectStacking: true,
  });
  editor.set(canvas);

  const saveCanvasToStorage = () => {
    const json = canvas.toJSON();
    localStorage.setItem("editor-state", JSON.stringify(json));
  };

  const getCanvasFromStorage = () => {
    const json = localStorage.getItem("editor-state");
    if (json !== null && JSON.parse(json)?.objects?.length > 0) {
      $unfinishedModal = true;
      const json = localStorage.getItem("editor-state");
      canvas.loadFromJSON(JSON.parse(json), canvas.renderAll.bind(canvas));
    }
  };

  getCanvasFromStorage();
  canvas.setDimensions({ width: 500, height: 500 });

  const resetFontSize = (e) => {
    if (e.target.type === "textbox") {
      let newFontSize = e.target.fontSize * e.target.scaleX;
      e.target.set("fontSize", parseInt(newFontSize, 10));
      e.target.set("width", parseInt(e.target.scaleX * e.target.width, 10));
      e.target.set("scaleX", 1);
      e.target.set("scaleY", 1);
      canvas.renderAll();
    }
  };

  canvas.on("object:scaling", (e) => {
    e.target.set("strokeUniform", true);
  });

  canvas.on("before:render", () => {
    saveCanvasToStorage();
  });

  canvas.on("object:modified", (e) => {
    resetFontSize(e);
  });

  canvas.on("before:render", () => {
    $selectedObj = $editor.getActiveObject();
    $items = $editor.getObjects();
  });

  canvas.on("selection:created", () => {
    $selectedObj = $editor.getActiveObject();
  });
  canvas.on("selection:updated", () => {
    $selectedObj = $editor.getActiveObject();
  });
  canvas.on("selection:cleared", () => {
    $selectedObj = null;
  });
});
</script>

<main>
  <div class="canvas-wrap">
    <Snippets />
    <canvas id="canvas-elem"> </canvas>
  </div>
</main>

<style>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: auto;
}
.canvas-wrap {
  display: flex;
  position: relative;
  border: 1px solid #444;
}
</style>
