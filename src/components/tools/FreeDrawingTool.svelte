<script>
import { editor, freeDrawingColor } from "../../store/store";
import freeDrawing from "../../functions/freeDrawing";
import { onMount } from "svelte";
import { afterUpdate } from "svelte";
import Color from "../excerpts/Color.svelte";

onMount(() => {
  freeDrawing();
});

afterUpdate(() => {
  var brush = $editor.freeDrawingBrush;
  brush.color = $freeDrawingColor;
  if (brush.getPatternSrc) {
    brush.source = brush.getPatternSrc.call(brush);
  }
});

const modes = [
  "Pencil",
  "Circle",
  "Spray",
  "Pattern",
  "hline",
  "vline",
  "square",
  "diamond",
  "texture",
];
</script>

<main>
  <div class="item">
    <div class="item-name">Color:</div>
    <div class="item-data">
      <Color mode="freeDrawing" val="{$freeDrawingColor}" />
    </div>
  </div>
  <input id="drawing-color" value="{$freeDrawingColor}" />
  <div class="item">
    <div class="item-name">Mode:</div>
    <div class="item-data">
      <div class="input-wrap">
        <select value="{modes[0]}" id="drawing-mode">
          {#each modes as mode, index}
            <option value="{mode}">{mode}</option>
          {/each}
        </select>
      </div>
    </div>
  </div>
  <div class="item">
    <div class="item-name">Size:</div>
    <div class="item-data">
      <div class="input-wrap">
        <input
          id="drawing-line-width"
          value="{$editor.freeDrawingBrush.width}"
          min="0"
          max="500"
          step="1"
          type="range" />
      </div>
    </div>
  </div>
</main>

<style>
#drawing-color {
  position: absolute;
  visibility: hidden;
  opacity: 0;
}

input {
  width: 100%;
  padding: 0;
}
</style>
