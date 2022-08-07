<script>
import { onMount } from "svelte";

import { selectedObj, editor } from "../../store/store";

const onLeftPos = (e) => {
  let val = e.target.value;
  $editor.getActiveObject().set("left", parseInt(val, 10)).setCoords();
  $editor.requestRenderAll();
};

const onRightPos = (e) => {
  let val = e.target.value;
  $editor.getActiveObject().set("top", parseInt(val, 10)).setCoords();
  $editor.requestRenderAll();
};

const onWidthChange = (e) => {
  let val = e.target.value;
  if ($selectedObj.type === "circle") {
    $editor
      .getActiveObject()
      .set("radius", parseInt(val) / 2)
      .setCoords();
    $editor.requestRenderAll();
    return;
  }

  $editor.getActiveObject().set("width", parseInt(val)).setCoords();
  $editor.requestRenderAll();
};

const onHeightChange = (e) => {
  let val = e.target.value;

  if ($selectedObj.type === "circle") {
    $editor
      .getActiveObject()
      .set("radius", parseInt(val) / 2)
      .setCoords();
    $editor.requestRenderAll();
    return;
  }
  $editor.getActiveObject().set("height", parseInt(val)).setCoords();
  $editor.requestRenderAll();
};
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
          on:input="{onLeftPos}" />
      </div>
      <div class="input-wrap">
        <label for="top">Y:</label>
        <input
          id="top"
          type="number"
          value="{($selectedObj?.top).toFixed(3)}"
          on:input="{onRightPos}" />
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
          on:input="{onWidthChange}" />
      </div>
      <div class="input-wrap">
        <label for="height">H:</label>
        <input
          id="height"
          type="number"
          value="{($selectedObj?.height * $selectedObj?.scaleY).toFixed(3)}"
          on:input="{onHeightChange}" />
      </div>
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
