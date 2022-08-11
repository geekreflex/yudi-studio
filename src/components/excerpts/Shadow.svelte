<script>
import { afterUpdate } from "svelte";

import { onCreateShadow, onRemoveShadow } from "../../functions/addFunctions";
import {
  selectedObj,
  shadowColor,
  shadowStrokeWidget,
} from "../../store/store";

import Switch from "../addons/Switch.svelte";
import Color from "./Color.svelte";
let visible = false;

$: shadowObj = {
  color: $selectedObj?.shadow?.color || "#000",
  offsetX: $selectedObj?.shadow?.offsetX || 0,
  offsetY: $selectedObj?.shadow?.offsetY || 0,
  blur: $selectedObj?.shadow?.blur || 0,
  opacity: $selectedObj?.shadow?.opacity || 1,
};

$: shadowObj.color = $shadowColor;

const onSwitch = (e) => {
  console.log(e.target.checked);
  visible = e.target.checked;
};

afterUpdate(() => {
  if (visible && $shadowStrokeWidget) {
    onCreateShadow(shadowObj);
  } else {
    visible = false;
  }
});
</script>

<main>
  <div class="toggler">
    <div>Shadow</div>
    <Switch onSwitch="{onSwitch}" checked="{visible}" />
  </div>
  <div class:visible class="main-wrap">
    <div class="wrap">
      <div class="item">
        <div class="item-name">Color:</div>
        <div class="item-data">
          <Color mode="shadowColor" val="{$selectedObj?.shadow?.color}" />
        </div>
      </div>
      <div class="item">
        <div class="item-name">Blur:</div>
        <div class="input-wrap">
          <input
            type="range"
            min="{0}"
            max="{50}"
            start="{0}"
            step="{1}"
            value="{$selectedObj?.shadow?.blur}"
            on:input="{(e) => (shadowObj.blur = e.target.value)}" />
        </div>
      </div>
      <div class="item">
        <div class="item-name">Offset X:</div>
        <div class="input-wrap">
          <input
            type="range"
            value="{$selectedObj?.shadow?.offsetX}"
            min="{-100}"
            start="{0}"
            max="{100}"
            on:input="{(e) => (shadowObj.offsetX = e.target.value)}" />
        </div>
      </div>
      <div class="item">
        <div class="item-name">Offset Y:</div>
        <div class="input-wrap">
          <input
            type="range"
            value="{$selectedObj?.shadow?.offsetY}"
            min="{-100}"
            start="{0}"
            max="{100}"
            on:input="{(e) => (shadowObj.offsetY = e.target.value)}" />
        </div>
      </div>
      <div class="item">
        <div class="item-name">Opacity:</div>
        <div class="input-wrap">
          <input
            type="range"
            value="{$selectedObj?.shadow?.opacity}"
            min="{0}"
            start="{0}"
            step="0.01"
            max="{1}"
            on:input="{(e) => (shadowObj.opacity = e.target.value)}" />
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
}
.main-wrap {
  display: none;
  border: none;
}

.visible {
  display: flex;
}

.wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.item {
  margin-bottom: 5px;
}

.item-name {
  margin-bottom: 0;
}

.input-wrap input {
  height: auto;
  margin-bottom: 0;
}
</style>
