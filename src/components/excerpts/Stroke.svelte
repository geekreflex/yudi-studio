<script>
import Switch from "../addons/Switch.svelte";
import { selectedObj } from "../../store/store";
import { onStrokeChange, onStrokeWidth } from "../../functions/editorFunctions";
import Color from "./Color.svelte";
import { afterUpdate } from "svelte";
import ColorWidget from "../widgets/ColorWidget.svelte";

let visible = false;

$: strokeObj = {
  color: $selectedObj?.stroke || "#000",
  width: $selectedObj?.strokeWidth || 1,
};

const onSwitch = (e) => {
  visible = e.target.checked;
  if ($selectedObj && !e.target.checked) {
    onStrokeWidth(0);
    onStrokeChange(null);
  }
  if (e.target.checked && $selectedObj) {
    onStrokeWidth(strokeObj.width);
    onStrokeChange(strokeObj.color);
  }
};

afterUpdate(() => {
  if ($selectedObj?.stroke) {
    visible = true;
    onStrokeWidth(strokeObj.width);
    onStrokeChange(strokeObj.color);
  } else {
    visible = false;
  }
});

let colorWidget = false;

const onShowColor = () => {
  colorWidget = true;
  console.log("jsksks");
};

const onCloseColor = () => {
  colorWidget = false;
};

const onChange = (val) => {
  strokeObj.color = val;
};
</script>

<ColorWidget
  title="Stroke color"
  id="stroke-color-widget"
  visible="{colorWidget}"
  close="{onCloseColor}"
  onChange="{onChange}"
  value="{strokeObj.color}" />

<main>
  <div class="toggler">
    <div>Stroke</div>
    <Switch onSwitch="{onSwitch}" checked="{visible}" />
  </div>
  <div class:visible class="main">
    <div class="wrap">
      <div class="item">
        <div class="item-name">Width:</div>
        <div class="input-wrap" title="Stroke width">
          <input
            min="0"
            type="number"
            value="{strokeObj.width}"
            on:input="{(e) => onStrokeWidth(e.target.value)}" />
        </div>
      </div>
      <div class="item">
        <div class="item-name">Color:</div>
        <div class="item-data">
          <Color val="{strokeObj.color}" onClick="{onShowColor}" />
        </div>
      </div>
    </div>
  </div>
</main>

<style>
main {
  width: 100%;
  /* padding: 20px; */
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
