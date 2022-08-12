<script>
import { editor } from "../../store/store";
import freeDrawing from "../../functions/freeDrawing";
import { onMount } from "svelte";
import Color from "../excerpts/Color.svelte";
import ColorWidget from "../widgets/ColorWidget.svelte";

$: brushColor = $editor?.freeDrawingBrush?.color || "#000";
let colorWidget = false;

onMount(() => {
  freeDrawing();
});

function updateBrushColor(color) {
  var brush = $editor.freeDrawingBrush;
  brush.color = color;
  if (brush.getPatternSrc) {
    brush.source = brush.getPatternSrc.call(brush);
  }
}

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

const onShowColor = () => {
  colorWidget = true;
};

const onCloseColor = () => {
  colorWidget = false;
};

const onChange = (val) => {
  brushColor = val;
  updateBrushColor(val);
};
</script>

<ColorWidget
  id="brush-color-widget"
  visible="{colorWidget}"
  close="{onCloseColor}"
  onChange="{onChange}"
  value="{brushColor}" />

<main>
  <div class="item">
    <div class="item-name">Color:</div>
    <div class="item-data">
      <Color val="{brushColor}" onClick="{onShowColor}" />
    </div>
  </div>
  <input id="drawing-color" value="{brushColor}" />
  <div class="item">
    <div class="item-name">Mode:</div>
    <div class="item-data">
      <div class="input-wrap">
        <select
          value="{modes[0]}"
          id="drawing-mode"
          on:change="{() => updateBrushColor(brushColor)}">
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
