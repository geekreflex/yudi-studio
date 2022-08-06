<script>
import { editor, selectedObj } from "../store/store";
import { onMount } from "svelte";
import { dragElement } from "../utils/resize";
import Layers from "./Layers.svelte";

onMount(() => {
  const first = document.getElementById("firstq");
  const second = document.getElementById("secondq");
  dragElement(document.getElementById("separatorq"), "V", first, second);
});

const onFillChange = (e) => {
  console.log(e.target.value);
  $editor.getActiveObject().set({ fill: e.target.value });
  $editor.renderAll();
};
</script>

<main>
  <div class="pane-wrap">
    <div id="firstq" class="pane">
      {$selectedObj?.type}
      <input
        type="color"
        value="{$selectedObj?.fill}"
        name="fill"
        on:input="{onFillChange}" />
    </div>
    <div id="separatorq"></div>
    <div id="secondq" class="pane">
      <Layers />
    </div>
  </div>
</main>

<style>
main {
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

.pane-wrap {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
}

#separatorq {
  width: 100%;
  height: 5px;
  background-color: #555;
  cursor: row-resize;
  /* Prevent the browser's built-in drag from interfering */
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

#firstq {
  height: 50%;
}

#secondq {
  height: 50%;
}
.pane {
  position: relative;
  min-height: 200px;
  width: 100%;
}
</style>
