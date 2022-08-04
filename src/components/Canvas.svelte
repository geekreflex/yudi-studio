<script>
import { fabric } from "fabric";
import { onMount } from "svelte";
import { editor } from "../store/store";

onMount(() => {
  const canvas = new fabric.Canvas("canvas-elem", {
    backgroundColor: "white",
    preserveObjectStacking: true,
    width: 500,
    height: 500,
  });
  editor.set(canvas);

  canvas.on("selection:created", () => {
    console.log($editor.getActiveObject().type);
  });
  canvas.on("selection:updated", () => {
    console.log($editor.getActiveObject().type);
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
