<script>
import CancelIcon2 from "../icons/CancelIcon2.svelte";

export let left = 100;
export let top = 100;
export let title = "Drag Zone";
export let close;
export let visible;
export let zIndex = 9999;

let moving = false;

function onMouseDown() {
  moving = true;
}

function onMouseMove(e) {
  if (moving) {
    left += e.movementX;
    top += e.movementY;
  }
}

function onMouseUp() {
  moving = false;
}
</script>

<section
  class:visible
  style="left: {left}px; top: {top}px; z-index: {zIndex};"
  class="draggable">
  <nav on:mousedown="{onMouseDown}">
    {title}
    <div class="close icon-sm" on:click="{close}">
      <CancelIcon2 />
    </div>
  </nav>
  <div>
    <slot />
  </div>
</section>

<svelte:window on:mouseup="{onMouseUp}" on:mousemove="{onMouseMove}" />

<style>
.visible {
  display: flex;
  flex-direction: column;
}
section {
  position: fixed;
  z-index: 999999;
  background-color: #222;
  border-radius: 6px;
  box-shadow: 0 3px 13px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  display: none;
}

nav {
  height: 40px;
  user-select: none;
  cursor: move;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #ccc;
  border-bottom: 1px solid #444;
}

.close {
  position: absolute;
  right: 20px;
  top: 5px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.close:hover {
  background-color: rgba(255, 255, 255, 0.3);
}
</style>
