<script>
import {
  onBrushStrokeColor,
  onBrushWidth,
  onModeChange,
} from "../../functions/freeDrawing";
import { editor } from "../../store/store";

const modes = ["Pencil", "Circle", "Spray", "Pattern", "hline"];
</script>

<main>
  <div class="item">
    <div class="item-name">Mode:</div>
    <div class="item-data">
      <div class="input-wrap">
        <select
          value="{modes[0]}"
          on:input="{(e) => onModeChange(e.target.value)}">
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
          class="brush-color"
          type="color"
          value="{$editor.freeDrawingBrush.color}"
          on:input="{(e) => onBrushStrokeColor(e.target.value)}" />
      </div>
    </div>
  </div>
  <div class="item">
    <div class="item-name">Size:</div>
    <div class="item-data">
      <div class="input-wrap">
        <input
          class="brush-width"
          value="{$editor.freeDrawingBrush.width}"
          min="0"
          max="500"
          step="1"
          type="range"
          on:input="{(e) => onBrushWidth(e.target.value)}" />
      </div>
    </div>
  </div>
</main>
