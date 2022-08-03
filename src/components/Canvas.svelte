<script>
import { fabric } from "fabric";
import { onMount } from "svelte";
import { editor } from "../store/store";

onMount(() => {
  const canvas = new fabric.Canvas("canvas-elem", {
    backgroundColor: "blue",
    preserveObjectStacking: true,
  });
  editor.set(canvas);
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
