<script>
import iro from "@jaames/iro";
import { onFillChange } from "../../functions/editorFunctions";
import { onMount } from "svelte";
import { colorModal, selectedObj } from "../../store/store";
import Draggable from "../Draggable.svelte";

let colorList = [];
let colorPicker;
let selectedColor;

onMount(() => {
  colorPicker = new iro.ColorPicker("#picker", {
    width: 320,
    colors: ["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)"],
    handleRadius: 9,
    borderWidth: 1,
    borderColor: "#fff",
  });

  colorPicker.on(["mount", "color:change"], function () {
    colorList = colorPicker.colors;
  });

  colorPicker.on(["mount", "color:setActive", "color:change"], function () {
    // colorPicker.color is always the active color
    const index = colorPicker.color.index;
    const hexString = colorPicker.color.hexString;
    selectedColor = hexString;
    onFillChange(hexString);
  });
});

const setColor = (colorIndex) => {
  // setActiveColor expects the color index!
  colorPicker.setActiveColor(colorIndex);
};

const onClose = () => {
  $colorModal = false;
};
</script>

<Draggable visible="{$colorModal}" title="Color palette" close="{onClose}">
  <main>
    <div id="picker"></div>
    <div>
      <div class="color-list">
        {#each colorList as color, index}
          <div class="color" on:click="{() => setColor(index)}">
            <div class="color-block" style="background:{color.hexString}"></div>
            <div class="color-hex">
              {color.hexString}
            </div>
          </div>
        {/each}
      </div>
      <div class="selected-color" style="background: {selectedColor}"></div>
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
  justify-content: flex-start;
  align-items: flex-start;
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

.selected-color {
  width: 90px;
  height: 30px;
  border-radius: 4px;
  border: 4px solid #333;
}
</style>
