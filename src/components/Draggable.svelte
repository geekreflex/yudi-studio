<script>
import CancelIcon2 from "../icons/CancelIcon2.svelte";

export let left = 100;
export let top = 100;
export let title = "Drag Zone";
export let close;
export let visible;

let moving = false;

import { onMount } from "svelte";
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

function clickedElem(e) {
  document
    .querySelectorAll(".draggable")
    .forEach((item) => (item.style.zIndex = 9999999));
  e.target.parentNode.style.zIndex = 9999999999;
}

// 	$: console.log(moving);
</script>

<section class:visible style="left: {left}px; top: {top}px;" class="draggable">
  <nav on:mousedown="{onMouseDown}" on:mousedown="{clickedElem}">
    {title}
    <div class="close icon-sm" on:click="{close}">
      <CancelIcon2 />
    </div>
  </nav>
  <div on:mousedown="{clickedElem}">
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
  position: absolute;
  z-index: 99999998;
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
  color: #fff;
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
