<script>
import { fabric } from "fabric";
import { onMount } from "svelte";
import Controls from "./components/Controls.svelte";
import { editor } from "./store/store";

onMount(() => {
  const cv = new fabric.Canvas("canvas-elem");
  editor.set(cv);
});
</script>

<main>
  <Controls />
  <canvas id="canvas-elem" width="500" height="500"></canvas>
</main>

<style>
main {
  margin: 50px;
}
canvas {
  border: 3px solid #333;
}
</style>
