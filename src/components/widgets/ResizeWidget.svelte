<script>
import Draggable from "../Draggable.svelte";
import { resizeWidget, editor, canvasBg } from "../../store/store";
import { onResizeWidget } from "../../functions/clickFunctions";
import { beforeUpdate, onMount } from "svelte";
import Color from "../excerpts/Color.svelte";

let isPreview = false;

onMount(() => {
  if ($editor) {
    storeCanvasVals();
  }
});

const storeCanvasVals = () => {
  let data = {
    bgColor: $editor.backgroundColor,
    width: $editor.getWidth(),
    height: $editor.getHeight(),
  };
  localStorage.setItem("canvas-initial-values", JSON.stringify(data));
};

beforeUpdate(() => {
  if (isPreview) {
    $editor.set("backgroundColor", $canvasBg);
    $editor.renderAll();
  }
});

const onUpdateCanvas = () => {
  $editor.set("backgroundColor", $canvasBg);
  $editor.renderAll();
  storeCanvasVals();
  fillStroke;
  onResizeWidget(false);
};

const onTogglePreview = (e) => {
  console.log($editor.backgroundColor);
  isPreview = e.target.checked;
};

const onResetCanvas = () => {
  const initialVals = localStorage.getItem("canvas-initial-values")
    ? JSON.parse(localStorage.getItem("canvas-initial-values"))
    : null;
  $editor.set("backgroundColor", initialVals.bgColor);
  $editor.setDimensions({
    width: initialVals.width,
    height: initialVals.height,
  });
  $editor.renderAll();
};

const templateList = [
  { name: "A4 Paper", alias: "a4p" },
  { name: "Youtube Thumbnail", alias: "yt1" },
  { name: "Facebook Cover Photo", alias: "fb-cp" },
];
</script>

<Draggable
  title="Resize Canvas"
  visible="{$resizeWidget}"
  close="{() => onResizeWidget(false)}">
  <main>
    <div class="input-wrap templates">
      <label for="templates">Templates:</label>
      <select id="templates">
        {#each templateList as template}
          <option value="{template.name}">{template.name}</option>
        {/each}
      </select>
    </div>

    <div class="area size">
      <div class="name">Canvas Size</div>
      <div class="item">
        <div class="input-wrap">
          <label for="width">Width:</label>
          <input id="width" type="number" value="{$editor?.getWidth()}" />
        </div>
        <div class="input-wrap">
          <label for="height">Height:</label>
          <input id="height" type="number" value="{$editor?.getHeight()}" />
        </div>
      </div>
    </div>

    <div class="area size">
      <div class="name">Canvas Background</div>
      <div class="item">
        <Color mode="canvasBg" val="{$canvasBg}" />
      </div>
    </div>

    <div class="toggle-preview">
      <input
        id="toggle"
        type="checkbox"
        checked="{isPreview}"
        on:change="{onTogglePreview}" />
      <label for="toggle">Toggle preview</label>
    </div>

    <div class="btn-wrap">
      <button class="btn" on:click="{onResetCanvas}">Reset</button>
      <button class="btn" on:click="{onUpdateCanvas}">Ok</button>
    </div>
  </main>
</Draggable>

<style>
main {
  width: 500px;
  padding: 20px;
  color: #fff;
}

.size {
  width: 50%;
}

.name {
  margin-bottom: 10px;
  color: #ccc;
  font-weight: 600;
}

.item {
  margin-left: 30px;
}

.input-wrap {
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
}
.input-wrap label {
  width: 100px;
}

.btn-wrap {
  justify-content: flex-end;
}

.btn-wrap button:last-child {
  margin-left: 20px;
}

.toggle-preview {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
}
.toggle-preview input {
  width: auto;
  margin-right: 20px;
}

.templates select {
  width: 100%;
}
</style>
