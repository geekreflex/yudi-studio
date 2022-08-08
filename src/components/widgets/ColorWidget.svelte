<script>
// @ts-nocheck
import { onFillChange, onOpacityChange } from "../../functions/editorFunctions";

import { selectedObj, colorModal } from "../../store/store";

const onColorPicker = () => {
  $colorModal = true;
};
</script>

<main>
  <div class="item">
    <div class="item-name">Color:</div>
    <div class="item-data color">
      <div
        for="fill-color"
        class="color-block"
        style="background: {$selectedObj?.fill}"
        on:click="{onColorPicker}">
      </div>
    </div>
  </div>
  <div class="item">
    <div class="item-name">Opacity:</div>
    <div class="item-data opacity">
      <input
        id="range"
        type="range"
        min="0"
        max="1"
        step="0.01"
        value="{$selectedObj?.opacity}"
        on:input="{(e) => onOpacityChange(e.target.value)}" />
    </div>
  </div>
</main>

<style>
main {
  position: relative;
}

.color-block {
  width: 100px;
  height: 30px;
  border: 3px solid #333;
  border-radius: 4px;
}

label {
  position: relative;
  margin-bottom: 0;
}

#fill-color {
  visibility: hidden;
  opacity: 0;
  overflow: hidden;
  margin: 0;
  /* position: absolute; */
}

#range {
  width: 100%;
}
</style>
