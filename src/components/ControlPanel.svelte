<script>
import { editor, selectedObj } from "../store/store";
import { onMount } from "svelte";
import { dragElement } from "../utils/resize";
import StackPanel from "./StackPanel.svelte";
import ActionPanel from "./ActionPanel.svelte";

onMount(() => {
  const first = document.getElementById("firstq");
  const second = document.getElementById("secondq");
  dragElement(document.getElementById("separatorq"), "V", first, second);
});
</script>

<main>
  <div class="pane-wrap">
    <div id="firstq" class="pane">
      <ActionPanel />
    </div>
    <div id="separatorq"></div>
    <div id="secondq" class="pane">
      <StackPanel />
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
  overflow: hidden;
}
.pane {
  position: relative;
  min-height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
