<script>
import { editor } from "../../store/store";
import freeDrawing from "../../functions/freeDrawing";
import { onMount } from "svelte";

onMount(() => {
  freeDrawing();
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
    <div class="item-name">Stroke color:</div>
    <div class="item-data">
      <div class="input-wrap">
        <input
          id="drawing-color"
          type="color"
          value="{$editor.freeDrawingBrush.color}" />
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
