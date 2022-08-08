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
  onLogObject,
} from "../../functions/editorFunctions";
import UndoIcon from "../../icons/UndoIcon.svelte";
import RedoIcon from "../../icons/RedoIcon.svelte";
import { onSkewWidget } from "../../functions/clickFunctions";
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
  <button class="action-btn"><UndoIcon /></button>
  <button class="action-btn"><RedoIcon /></button>
  <button on:click="{() => onSkewWidget(true)}">skew</button>
  <button on:click="{onLogObject}">Log Object</button>
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
