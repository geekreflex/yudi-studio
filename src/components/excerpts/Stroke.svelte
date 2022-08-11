<script>
import Switch from "../addons/Switch.svelte";
import { selectedObj, strokeColor } from "../../store/store";
import { onStrokeChange, onStrokeWidth } from "../../functions/editorFunctions";
import Color from "./Color.svelte";
import { afterUpdate } from "svelte";

let visible = false;

const onSwitch = (e) => {
  visible = e.target.checked;
};

afterUpdate(() => {
  if ($selectedObj?.stroke === null) {
    visible = true;
    onStrokeChange("#000000");
  }
});
</script>

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
            value="{$selectedObj?.strokeWidth || 0}"
            on:input="{(e) => onStrokeWidth(e.target.value)}" />
        </div>
      </div>
      <div class="item">
        <div class="item-name">Color:</div>
        <div class="item-data">
          <Color mode="stroke" val="{$selectedObj?.stroke || $strokeColor}" />
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
