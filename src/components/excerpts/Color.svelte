<script>
import { onColorWidget } from "../../functions/clickFunctions";
import { onOpacityChange } from "../../functions/editorFunctions";
import { selectedObj, fillStroke } from "../../store/store";

const showColorWidget = () => {
  $fillStroke = "fill";
  onColorWidget(true);
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
        on:click="{showColorWidget}">
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

#range {
  width: 100%;
}
</style>
