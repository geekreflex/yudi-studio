<script>
import Switch from "../addons/Switch.svelte";
import { selectedObj, colorValue, fillStroke } from "../../store/store";
import { onStrokeWidth } from "../../functions/editorFunctions";
import { onColorWidget } from "../../functions/clickFunctions";
let visible = true;

const onSwitch = (e) => {
  visible = e.target.checked;
};

const showColorWidget = () => {
  onColorWidget(true);
  $fillStroke = "stroke";
};
</script>

<main>
  <div class="toggler">
    <div>Stroke</div>
    <Switch onSwitch="{onSwitch}" checked="{true}" />
  </div>
  <div class:visible class="main">
    <div class="stroke-item">
      <div class="input-wrap" title="Stroke width">
        <input
          type="number"
          value="{$selectedObj?.strokeWidth}"
          on:input="{(e) => onStrokeWidth(e.target.value)}" />
      </div>
      <div
        title="Stroke color"
        class="color-block"
        on:click="{showColorWidget}"
        style="background: {$selectedObj?.stroke ||
          $selectedObj?.fill ||
          $colorValue}">
      </div>
    </div>
  </div>
</main>

<style>
main {
  width: 100%;
}
.toggler {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}

.main {
  display: none;
  border: none;
}

.visible {
  display: flex;
}

.stroke-item {
  display: flex;
}

.color-block {
  width: 80px;
  border-radius: 3px;
  border: 2px solid #555;
  margin-left: 20px;
}
</style>
