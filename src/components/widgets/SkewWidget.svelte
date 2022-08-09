<script>
import Draggable from "../Draggable.svelte";

import { skewX, skewY } from "../../functions/editorFunctions";

import { selectedObj, skewWidget, editor } from "../../store/store";
import { onSkewWidget } from "../../functions/clickFunctions";

// skew x and y initial values
let skewInitVals = { x: $selectedObj?.skewX, y: $selectedObj?.skewY };

const onClose = () => {
  onSkewWidget(false);
  skewInitVals = [];
};

const onResetSkew = () => {
  $selectedObj
    .set("skewX", parseInt(skewInitVals.x, 10))
    .set("skewY", parseInt(skewInitVals.y, 10))
    .setCoords();
  $editor.requestRenderAll();
};
</script>

<Draggable visible="{$skewWidget}" left="{600}" title="Skew" close="{onClose}">
  <main>
    <div class="item-wrap">
      <div class="item">
        <div class="item-name">SkewX:</div>
        <div class="item-data opacity">
          <input
            id="range"
            type="range"
            min="{-100}"
            start="0"
            max="100"
            step="1"
            value="{$selectedObj?.skewX}"
            on:input="{(e) => skewX(e.target.value)}" />
        </div>
      </div>
      <div class="item">
        <div class="item-name">SkewY:</div>
        <div class="item-data opacity">
          <input
            id="range"
            type="range"
            min="{-100}"
            start="0"
            max="100"
            step="1"
            value="{$selectedObj?.skewY}"
            on:input="{(e) => skewY(e.target.value)}" />
        </div>
      </div>
    </div>
    <button class="btn" on:click="{onResetSkew}">Reset</button>
  </main>
</Draggable>

<style>
main {
  width: 300px;
  padding: 20px;
}

.item-wrap {
  margin-bottom: 10px;
}
</style>
