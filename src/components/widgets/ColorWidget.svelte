<script>
import iro from "@jaames/iro";
import { onFillChange, onStrokeChange } from "../../functions/editorFunctions";
import { onMount } from "svelte";
import {
  colorWidget,
  selectedObj,
  fillStroke,
  canvasBg,
} from "../../store/store";
import Draggable from "../Draggable.svelte";
import { onColorWidget } from "../../functions/clickFunctions";

let colorList = [];
let colorPicker;

onMount(() => {
  colorPicker = new iro.ColorPicker("#picker", {
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

    if ($fillStroke === "fill") {
      onFillChange(hexString);
    }

    if ($fillStroke === "stroke") {
      onStrokeChange(hexString);
    }

    if ($fillStroke === "canvasBg") {
      canvasBg.update(() => hexString);
    }
  });
});

const setColor = (colorIndex) => {
  // setActiveColor expects the color index!
  colorPicker.setActiveColor(colorIndex);
};
</script>

<Draggable
  visible="{$colorWidget}"
  title="Color palette"
  close="{() => onColorWidget(false)}">
  <main>
    <div class="palette-main">
      <div id="picker"></div>
      <div class="color-data">
        <div class="color-list">
          {#each colorList as color, index}
            <div class="color" on:click="{() => setColor(index)}">
              <div class="color-block" style="background:{color.hexString}">
              </div>
              <div class="color-hex">
                {color.hexString}
              </div>
            </div>
          {/each}
        </div>
        <div class="current-color">
          <span>Current:</span>
          {#if $fillStroke === "canvasBg"}
            <div style="background: {$canvasBg}" class="current-block"></div>
          {:else if $fillStroke === "fill"}
            <div style="background: {$selectedObj?.fill}" class="current-block">
            </div>
          {:else if $fillStroke === "stroke"}
            <div
              style="background: {$selectedObj?.stroke}"
              class="current-block">
            </div>
          {/if}
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
  width: 100%;
  height: 30px;
  border-radius: 4px;
  border: 4px solid #333;
}

.color-hex {
  font-size: 12px;
  color: #fff;
  /* display: none; */
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
