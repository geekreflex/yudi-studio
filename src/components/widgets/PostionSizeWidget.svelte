<script>
// @ts-nocheck

import {
  onHeightChange,
  onLeftPos,
  onRightPos,
  onWidthChange,
  skewX,
  skewY,
} from "../../functions/editorFunctions";

import { selectedObj } from "../../store/store";
</script>

<main>
  <div class="item">
    <div class="item-name">Position:</div>
    <div class="item-data">
      <div class="input-wrap">
        <label for="left">X:</label>
        <input
          id="left"
          type="number"
          value="{($selectedObj?.left).toFixed(3)}"
          on:input="{(e) => onLeftPos(e.target.value)}" />
      </div>
      <div class="input-wrap">
        <label for="top">Y:</label>
        <input
          id="top"
          type="number"
          value="{($selectedObj?.top).toFixed(3)}"
          on:input="{(e) => onRightPos(e.target.value)}" />
      </div>
    </div>
  </div>
  <div class="item">
    <div class="item-name">Size:</div>
    <div class="item-data">
      <div class="input-wrap">
        <label for="width">W:</label>
        <input
          id="width"
          type="number"
          value="{($selectedObj?.width * $selectedObj?.scaleX).toFixed(3)}"
          on:input="{(e) => onWidthChange(e.target.value)}" />
      </div>
      <div class="input-wrap">
        <label for="height">H:</label>
        <input
          id="height"
          type="number"
          value="{($selectedObj?.height * $selectedObj?.scaleY).toFixed(3)}"
          on:input="{(e) => onHeightChange(e.target.value)}" />
      </div>
    </div>
  </div>
  <div class="item">
    <div class="item-name">SkewX:</div>
    <div class="item-data opacity">
      <input
        id="range"
        type="range"
        min="{-100}"
        start="1"
        max="100"
        step="1"
        value="{$selectedObj?.skewX}"
        on:input="{(e) => skewX(e.target.value)}" />
    </div>
  </div>
  <div class="item">
    <div class="item-name">SkewY:</div>
    <div class="item-data opacity">
      <input
        id="range"
        type="range"
        min="{-100}"
        start="1"
        max="100"
        step="1"
        value="{$selectedObj?.skewY}"
        on:input="{(e) => skewY(e.target.value)}" />
    </div>
  </div>
</main>

<style>
.item {
  margin-bottom: 10px;
}
.item-name {
  margin-bottom: 5px;
  font-size: 14px;
  color: #ccc;
}

.item-data {
  display: flex;
  justify-content: space-between;
}

.item-data .input-wrap {
  width: 49%;
}

.item-data input {
  width: 100%;
}

.input-wrap {
  flex-direction: row;
  align-items: center;
}

.input-wrap label {
  margin-right: 5px;
}
</style>
