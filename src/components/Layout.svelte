<script>
import Navbar from "./Navbar.svelte";
import Canvas from "./Canvas.svelte";
import ControlPanel from "./ControlPanel.svelte";
import { onMount } from "svelte";
import Toolbar from "./Toolbar.svelte";
import { dragElement } from "../utils/resize";

onMount(() => {
  const first = document.getElementById("first");
  const second = document.getElementById("second");
  dragElement(document.getElementById("separator"), "H", first, second);
});
</script>

<main>
  <Navbar />
  <div class="workspace">
    <div class=" panel" id="first">
      <Canvas />
    </div>
    <div id="separator"></div>
    <div class=" panel" id="second">
      <ControlPanel />
    </div>
  </div>
  <Toolbar />
</main>

<style>
main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}

.workspace {
  height: calc(100vh - 50px);
  display: flex;
  position: relative;
}

#first {
  background-color: #08080a;
  width: 80%;
  flex: 1;
  height: 100%;
  min-width: 10px;
}

#second {
  background-color: #111;
  height: 100%;
  width: 300px;
  min-width: 250px;
  max-width: 500px;
}

#separator {
  cursor: col-resize;
  background-color: #333;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='30'><path d='M2 0 v30 M5 0 v30 M8 0 v30' fill='none' stroke='grey'/></svg>");
  background-repeat: no-repeat;
  background-position: center;
  width: 6px;
  height: 100%;
  /* Prevent the browser's built-in drag from interfering */
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
