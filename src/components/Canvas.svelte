<script>
import { fabric } from "fabric";
import { onMount } from "svelte";
import { editor } from "../store/store";

onMount(() => {
  const canvas = new fabric.Canvas("canvas-elem", {
    backgroundColor: "#fff",
  });
  editor.set(canvas);

  setCurrentDimension(canvas);
});

function setCurrentDimension(canvas) {
  let canvasParent = document.querySelector(".canvas-wrap");
  canvas.setHeight(canvasParent.clientHeight || 0);
  canvas.setWidth(canvasParent.clientWidth || 0);
}
</script>

<main>
  <div class="canvas-wrap">
    <canvas id="canvas-elem"></canvas>
  </div>
</main>

<style>
.canvas-wrap {
  display: flex;
  height: 500px;
  width: 500px;
}
canvas {
  box-shadow: 0 4px 9px #888;
}
</style>
