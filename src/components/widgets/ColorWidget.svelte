<script>
import iro from "@jaames/iro";
import { onMount } from "svelte";
import Draggable from "../Draggable.svelte";

let colorList = [];
let colorPicker;

export let value;
export let onChange;
export let close;
export let visible;
export let id;
export let title = "Color pallete";

onMount(() => {
  colorPicker = new iro.ColorPicker(`#${id}`, {
    width: 320,
    colors: ["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)"],
    handleRadius: 9,
    borderWidth: 1,
    borderColor: "#888",
  });

  colorPicker.on(["mount", "color:change"], function () {
    colorList = colorPicker.colors;
  });

  colorPicker.on(["mount", "color:setActive", "color:change"], function () {
    const hexString = colorPicker.color.hexString;
    value = hexString;
    onChange(value);
  });
});

const setColor = (colorIndex) => {
  colorPicker.setActiveColor(colorIndex);
};
</script>

<Draggable
  zIndex="{9999999}"
  visible="{visible}"
  title="{title}"
  close="{close}">
  <main>
    <div class="palette-main">
      <div id="{id}"></div>
      <div class="color-data">
        <div class="color-list">
          {#each colorList as color, index}
            <div
              title="{color.hexString}"
              class="color-block"
              on:click="{() => setColor(index)}"
              style="background:{color.hexString}">
            </div>
          {/each}
        </div>
        <div class="current-color">
          <span>Current:</span>
          <div style="background: {value}" class="current-block"></div>
        </div>
      </div>
    </div>
    <div class="btn-wrap">
      <button class="btn">Reset</button>
    </div>
  </main>
</Draggable>

<style>
main {
  width: 600px;
  background-color: #222;
  overflow: auto;
  z-index: 99;
  top: 0;
  left: 0;
  padding: 20px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.palette-main {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.color-data {
  margin-left: 20px;
}

.color-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
  margin-bottom: 20px;
}

.color-block {
  width: 60px;
  height: 30px;
  border-radius: 4px;
  border: 4px solid #333;
}

.current-color {
  display: block;
  display: flex;
  flex-direction: column;
}

.current-color span {
  font-size: 14px;
  color: #ccc;
  margin-bottom: 4px;
}

.current-block {
  width: 150px;
  height: 40px;
  border-radius: 4px;
  border: 4px solid #333;
}
</style>
