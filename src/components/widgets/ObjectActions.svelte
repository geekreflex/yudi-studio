<script>
import ArrowIcon from "../../icons/ArrowIcon.svelte";
import DoubleArrowAIcon from "../../icons/DoubleArrowAIcon.svelte";
import CopyIcon from "../../icons/CopyIcon.svelte";
import TrashIcon from "../../icons/TrashIcon.svelte";
import { selectedObj, editor } from "../../store/store";

const onSendBack = () => {
  const objs = $editor.getActiveObjects();
  objs.map((obj) => {
    $editor.sendBackwards(obj);
  });
  $editor.requestRenderAll();
};

const onBringFront = () => {
  const objs = $editor.getActiveObjects();
  objs.map((obj) => {
    $editor.bringForward(obj);
  });
  $editor.requestRenderAll();
};

const onDelete = () => {
  let objs = $editor.getActiveObjects();
  objs.map((obj) => {
    $editor.remove(obj);
    $editor.getActiveObject(obj);
  });
  $editor.requestRenderAll();
  $selectedObj = null;
};
</script>

<main class="{$selectedObj ? 'visible' : 'hidden'}">
  <button class="action-btn">
    <CopyIcon />
  </button>
  <button class="action-btn" style="transform: rotate(90deg);">
    <DoubleArrowAIcon />
  </button>
  <button class="action-btn" on:click="{onSendBack}">
    <ArrowIcon />
  </button>
  <button
    class="action-btn"
    style="transform: rotate(180deg);"
    on:click="{onBringFront}">
    >
    <ArrowIcon />
  </button>
  <button class="action-btn" style="transform: rotate(270deg);">
    <DoubleArrowAIcon />
  </button>
  <button class="action-btn" on:click="{onDelete}">
    <TrashIcon />
  </button>
</main>

<style>
main {
  display: flex;
  margin-left: 30px;
}

.visible {
  display: flex;
}

.hidden {
  pointer-events: none;
  opacity: 0.5;
}
</style>
