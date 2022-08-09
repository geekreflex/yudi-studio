<script>
import { fabric } from "fabric";
import { onMount } from "svelte";
import {
  editor,
  selectedObj,
  items,
  history,
  historyMods,
  unfinishedModal,
} from "../store/store";
import Snippets from "./widgets/Snippets.svelte";

onMount(() => {
  const canvas = new fabric.Canvas("canvas-elem", {
    backgroundColor: "#ffffff",
    preserveObjectStacking: true,
  });
  editor.set(canvas);

  const historyChanged = () => {
    const canvasContents = $editor.toJSON();
    $history.push(canvasContents);
    $historyMods = 0;
  };

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

  canvas.on("before:render", () => {
    saveCanvasToStorage();
  });

  canvas.on("object:added", (e) => {
    historyChanged();
  });
  canvas.on("object:modified", historyChanged);
  canvas.on("object:removed", historyChanged);

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
}
</style>
