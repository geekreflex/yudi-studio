<script>
import Navbar from "./Navbar.svelte";
import Canvas from "./Canvas.svelte";
import ControlPanel from "./ControlPanel.svelte";
import { onMount } from "svelte";
import Toolbar from "./Toolbar.svelte";

// A function is used for dragging and moving
function dragElement(element, direction) {
  var md; // remember mouse down info
  const first = document.getElementById("first");
  const second = document.getElementById("second");

  element.onmousedown = onMouseDown;

  function onMouseDown(e) {
    //console.log("mouse down: " + e.clientX);
    md = {
      e,
      offsetLeft: element.offsetLeft,
      offsetTop: element.offsetTop,
      firstHeight: first.offsetHeight,
      secondHeight: second.offsetHeight,
      firstWidth: first.offsetWidth,
      secondWidth: second.offsetWidth,
    };

    document.onmousemove = onMouseMove;
    document.onmouseup = () => {
      //console.log("mouse up");
      document.onmousemove = document.onmouseup = null;
    };
  }

  function onMouseMove(e) {
    // console.log("mouse move: " + e.clientX);
    var delta = {
      x: e.clientX - md.e.clientX,
      y: e.clientY - md.e.clientY,
    };

    if (direction === "V") {
      // Vertical
      // Prevent negative-sized elements
      delta.x = Math.min(Math.max(delta.y, -md.firstHeight), md.secondHeight);

      element.style.top = md.offsetTop + delta.x + "px";
      first.style.height = md.firstHeight + delta.x + "px";
      second.style.height = md.secondHeight - delta.x + "px";
    }

    if (direction === "H") {
      // Horizontal
      // Prevent negative-sized elements
      delta.x = Math.min(Math.max(delta.x, -md.firstWidth), md.secondWidth);

      element.style.left = md.offsetLeft + delta.x + "px";
      first.style.width = md.firstWidth + delta.x + "px";
      second.style.width = md.secondWidth - delta.x + "px";
    }
  }
}

onMount(() => {
  dragElement(document.getElementById("separator"), "H");
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
  min-width: 200px;
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
