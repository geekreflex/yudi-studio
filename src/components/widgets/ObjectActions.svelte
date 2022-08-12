<script>
import ArrowIcon from "../../icons/ArrowIcon.svelte";
import DoubleArrowAIcon from "../../icons/DoubleArrowAIcon.svelte";
import CopyIcon from "../../icons/CopyIcon.svelte";
import TrashIcon from "../../icons/TrashIcon.svelte";
import { selectedObj } from "../../store/store";
import Horizontal from "../../icons/Horizontal.svelte";
import VerticalIcon from "../../icons/VerticalIcon.svelte";
import {
  onDelete,
  onDuplicate,
  onSendBackward,
  onSendToBack,
  onBringForward,
  onBringToFront,
  onFlipX,
  onFlipY,
  onRotate,
} from "../../functions/editorFunctions";
import RotateRightIcon from "../../icons/RotateRightIcon.svelte";
import RotateLeftIcon from "../../icons/RotateLeftIcon.svelte";
</script>

<main class="{$selectedObj ? 'visible' : 'hidden'}">
  <button
    class="action-btn"
    on:click="{onDuplicate}"
    title="Duplicate selected objects">
    <CopyIcon />
  </button>
  <button
    title="Lower selection to bottom"
    class="action-btn"
    style="transform: rotate(90deg);"
    on:click="{onSendToBack}">
    <DoubleArrowAIcon />
  </button>
  <button
    title="Lower selection one step"
    class="action-btn"
    on:click="{onSendBackward}">
    <ArrowIcon />
  </button>
  <button
    title="Raise selection on step"
    class="action-btn"
    style="transform: rotate(180deg);"
    on:click="{onBringForward}">
    >
    <ArrowIcon />
  </button>
  <button
    title="Raise selection to top"
    class="action-btn"
    style="transform: rotate(270deg);"
    on:click="{onBringToFront}">
    <DoubleArrowAIcon />
  </button>
  <button
    class="action-btn"
    on:click="{onDelete}"
    title="Delete selected objects">
    <TrashIcon />
  </button>
  <button
    class="action-btn"
    on:click="{onFlipX}"
    title="Flip selected objects horizontally">
    <Horizontal />
  </button>
  <button
    class="action-btn"
    on:click="{onFlipY}"
    title="Flip selected objects vertically">
    <VerticalIcon />
  </button>

  <button
    title="Rotate selection 90 counter-clockwise"
    class="action-btn"
    on:click="{() => onRotate(-90)}"><RotateLeftIcon /></button>
  <button
    title="Rotate selection 90 clockwise"
    class="action-btn"
    on:click="{() => onRotate(90)}"
    ><RotateRightIcon />
  </button>
</main>

<style>
main {
  display: flex;
  align-items: center;
}

.visible {
  display: flex;
}

.hidden {
  pointer-events: none;
  opacity: 0.5;
}
</style>
