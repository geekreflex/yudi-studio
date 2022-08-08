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
} from "../../functions/editorFunctions";
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
  <button class="action-btn" on:click="{onFlipX}">
    <Horizontal />
  </button>
  <button class="action-btn" on:click="{onFlipY}">
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
