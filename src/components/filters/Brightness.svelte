<script>
import Switch from "../addons/Switch.svelte";
import { applyFilter, applyFilterValue } from "../../functions/filters";
import { fabric } from "fabric";

let f = fabric.Image.filters;
let value = 0.1;

function onSwitch() {
  applyFilter(
    5,
    this.checked &&
      new f.Brightness({
        brightness: parseFloat(value),
      })
  );
}

function onChange() {
  applyFilterValue(5, "brightness", parseFloat(this.value));
}
</script>

<main>
  <div>
    <div class="toggler">
      <span>Brightness:</span>
      <Switch id="brightness" onSwitch="{onSwitch}" />
    </div>
    <div>
      <input
        type="range"
        id="brightness-value"
        bind:value
        min="-1"
        max="1"
        step="0.003921"
        on:input="{onChange}" />
    </div>
  </div>
</main>
