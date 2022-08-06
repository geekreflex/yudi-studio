<script>
import { fabric } from "fabric";
import { onMount } from "svelte";
import { editor, selectedObj, items } from "../store/store";

onMount(() => {
  const canvas = new fabric.Canvas("canvas-elem", {
    backgroundColor: "#ffffff",
    preserveObjectStacking: true,
  });
  editor.set(canvas);

  canvas.setDimensions({ width: 500, height: 500 });

  canvas.on("after:render", () => {
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
    <canvas id="canvas-elem"></canvas>
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
}
</style>
