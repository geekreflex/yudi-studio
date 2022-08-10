<script>
import Switch from "../addons/Switch.svelte";
import { selectedObj, colorValue, fillStroke } from "../../store/store";
import { onStrokeWidth } from "../../functions/editorFunctions";
import { onColorWidget } from "../../functions/clickFunctions";
import { afterUpdate } from "svelte";
let visible = true;

const onSwitch = (e) => {
  visible = e.target.checked;
};

const strokeObj = {
  width: $selectedObj?.strokeWidth,
};

const showColorWidget = () => {
  onColorWidget(true);
  $fillStroke = "stroke";
};

afterUpdate(() => {
  if (visible) {
    onStrokeWidth(strokeObj.width);
  } else {
    onStrokeWidth(0);
  }
});
</script>

<main>
  <div class="toggler">
    <div>Stroke</div>
    <Switch onSwitch="{onSwitch}" checked="{true}" />
  </div>
  <div class:visible class="main">
    <div class="wrap">
      <div class="item">
        <div class="item-name">Width:</div>
        <div class="input-wrap" title="Stroke width">
          <input
            type="number"
            value="{$selectedObj?.strokeWidth}"
            on:input="{(e) => (strokeObj.width = e.target.value)}" />
        </div>
      </div>
      <div class="item">
        <div class="item-name">Color:</div>
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
  </div>
</main>

<style>
main {
  width: 100%;
  padding: 20px;
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

.wrap {
  display: flex;
  flex-direction: column;
}

.item {
  display: flex;
  align-items: flex-end;
  margin-bottom: 5px;
}

.item-name {
  margin: none;
  display: block;
  margin-right: 20px;
}
</style>
