<script>
import { editor, colorValue } from "../../store/store";
import freeDrawing from "../../functions/freeDrawing";
import { onMount } from "svelte";
import Stroke from "../excerpts/Stroke.svelte";
import { afterUpdate } from "svelte";

onMount(() => {
  freeDrawing();
});

afterUpdate(() => {
  var brush = $editor.freeDrawingBrush;
  brush.color = $colorValue;
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
  <input id="drawing-color" value="{$colorValue}" />
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
  <Stroke />
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
/* #drawing-color {
  position: absolute;
  visibility: hidden;
  opacity: 0;
} */
</style>
