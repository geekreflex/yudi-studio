<script>
import { onStrokeWidth } from "../../functions/editorFunctions";
import { onColorWidget } from "../../functions/clickFunctions";
import { selectedObj, fillStroke, colorValue } from "../../store/store";

const showColorWidget = () => {
  onColorWidget(true);
  $fillStroke = "stroke";
};
</script>

<main>
  <div class="item">
    <div class="item-name">Stroke width:</div>
    <div class="item-data color">
      <div class="input-wrap">
        <input
          type="number"
          value="{$selectedObj?.strokeWidth}"
          min="0"
          on:input="{(e) => onStrokeWidth(e.target.value)}" />
      </div>
    </div>
  </div>
  <div class="item">
    <div class="item-name">Stroke color:</div>
    <div class="item-data color">
      <div
        for="fill-color"
        class="color-block"
        style="background: {$selectedObj?.stroke ||
          $selectedObj?.fill ||
          $colorValue}"
        on:click="{showColorWidget}">
      </div>
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
</style>
