<script>
import ArrowIcon from "../../icons/ArrowIcon.svelte";
import DoubleArrowAIcon from "../../icons/DoubleArrowAIcon.svelte";
import CopyIcon from "../../icons/CopyIcon.svelte";
import TrashIcon from "../../icons/TrashIcon.svelte";
import { selectedObj, editor } from "../../store/store";
import Horizontal from "../../icons/Horizontal.svelte";
import VerticalIcon from "../../icons/VerticalIcon.svelte";

const onSendBackward = () => {
  const objs = $editor.getActiveObjects();
  objs.map((obj) => {
    $editor.sendBackwards(obj);
  });
  $editor.requestRenderAll();
};

const onBringForward = () => {
  const objs = $editor.getActiveObjects();
  objs.map((obj) => {
    $editor.bringForward(obj);
  });
  $editor.requestRenderAll();
};

const onBringToFront = () => {
  const objs = $editor.getActiveObjects();
  objs.map((obj) => {
    $editor.bringToFront(obj);
  });
  $editor.requestRenderAll();
};

const onSendToBack = () => {
  const objs = $editor.getActiveObjects();
  objs.map((obj) => {
    $editor.sendToBack(obj);
  });
  $editor.requestRenderAll();
};

const onDelete = () => {
  let objs = $editor.getActiveObjects();
  objs.map((obj) => {
    $editor.remove(obj);
    $editor.getActiveObject(obj);
  });
  $editor.discardActiveObject().renderAll();
  $selectedObj = null;
};

const flipX = () => {
  let obj = $editor.getActiveObject();
  obj.toggle("flipX");
  $editor.requestRenderAll();
};

const flipY = () => {
  let obj = $editor.getActiveObject();
  obj.toggle("flipY");
  $editor.requestRenderAll();
};

const onDuplicate = () => {
  let object = $editor.getActiveObject();

  object.clone(function (clone) {
    $editor.add(
      clone.set({
        left: object.left + 10,
        top: object.top + 10,
      })
    );
  });
};
</script>

<main class="{$selectedObj ? 'visible' : 'hidden'}">
  <button class="action-btn" on:click="{onDuplicate}">
    <CopyIcon />
  </button>
  <button
    class="action-btn"
    style="transform: rotate(90deg);"
    on:click="{onSendToBack}">
    <DoubleArrowAIcon />
  </button>
  <button class="action-btn" on:click="{onSendBackward}">
    <ArrowIcon />
  </button>
  <button
    class="action-btn"
    style="transform: rotate(180deg);"
    on:click="{onBringForward}">
    >
    <ArrowIcon />
  </button>
  <button
    class="action-btn"
    style="transform: rotate(270deg);"
    on:click="{onBringToFront}">
    <DoubleArrowAIcon />
  </button>
  <button class="action-btn" on:click="{onDelete}">
    <TrashIcon />
  </button>
  <button class="action-btn" on:click="{flipX}">
    <Horizontal />
  </button>
  <button class="action-btn" on:click="{flipY}">
    <VerticalIcon />
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
