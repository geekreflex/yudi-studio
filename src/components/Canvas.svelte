<script>
import { fabric } from "fabric";
import { onMount } from "svelte";
import { editor, width, height } from "../store/store";

onMount(() => {
  const canvas = new fabric.Canvas("canvas-elem", {
    backgroundColor: "#111",
    skipOffscreen: false,
  });
  editor.set(canvas);
  fabric.Object.prototype.skipOffscreen = false;
  canvas.setWidth($width);
  canvas.setHeight($height);

  canvas.on("mouse:wheel", function (opt) {
    let delta = opt.e.deltaY;
    let zoom = canvas.getZoom();
    zoom *= 0.999 ** delta;
    if (zoom > 20) zoom = 20;
    if (zoom < 0.1) zoom = 0.01;
    canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
    opt.e.preventDefault();
    opt.e.stopPropagation();
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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #202124;
}

.canvas-wrap {
  display: block;
  box-shadow: 0 8px 9px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}
</style>
