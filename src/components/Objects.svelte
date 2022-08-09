<script>
/**
 * Jerry 09/AUG/22
 * NOTE: The items array was reversed, so I had to
 * flip the methods for stacking objects. bringForward
 * arrow calls sendBackward function and vice versa.
 */
import TrashIcon from "../icons/TrashIcon.svelte";

import ChainOffIcon from "../icons/ChainOffIcon.svelte";
import ChainOnIcon from "../icons/ChainOnIcon.svelte";
import EyeOffIcon from "../icons/EyeOffIcon.svelte";
import EyeOneIcon from "../icons/EyeOneIcon.svelte";
import { items, editor, selectedObj } from "../store/store";
import CancelIcon from "../icons/CancelIcon.svelte";
import CopyIcon from "../icons/CopyIcon.svelte";
import ArrowIcon from "../icons/ArrowIcon.svelte";
import {
  onBringForward,
  onDelete,
  onDeleteAll,
  onDuplicate,
  onSendBackward,
} from "../functions/editorFunctions";

const onObjectClick = (index) => {
  $editor.setActiveObject($editor.item(index));
  $editor.renderAll();
};

const onVisibility = (e, index) => {
  e.preventDefault();
  e.stopPropagation();
  const obj = $editor.item(index);
  obj.visible = !obj.visible;
  $editor.renderAll();
};

const onLockObject = (e, index) => {
  e.preventDefault();
  e.stopPropagation();
  const item = $editor.item(index);
  item.lockMovementX = !item.lockMovementX;
  item.lockMovementY = !item.lockMovementY;
  $editor.renderAll();
};
</script>

<main>
  <div class="objects">
    {#each $items.reverse() as item, index}
      <div
        class="{$selectedObj === item ? 'active object' : 'object'}"
        on:click="{() => onObjectClick(index)}">
        <div class="object-left-info">
          <div class="object-eye" on:click="{(e) => onVisibility(e, index)}">
            {#if item.visible}
              <EyeOneIcon />
            {:else}
              <EyeOffIcon />
            {/if}
          </div>
          <div class="object-lock" on:click="{(e) => onLockObject(e, index)}">
            {#if item.lockMovementX && item.lockMovementY}
              <ChainOnIcon />
            {:else}
              <ChainOffIcon />
            {/if}
          </div>
        </div>
        <div class="object-right-info">
          <div class="object-preview">
            <img src="{$editor.toDataURL()}" alt="Preview" />
          </div>
          <div class="object-name">Layer #{index + 1}- {item.type}</div>
        </div>
      </div>
    {/each}
  </div>
  <footer class="panel-footer">
    <button
      on:click="{onDelete}"
      class:activeBtn="{$selectedObj}"
      class="action-btn"
      title="Delete  object">
      <CancelIcon />
    </button>

    <button
      on:click="{onBringForward}"
      class:activeBtn="{$selectedObj}"
      class="action-btn"
      style="transform: rotate(180deg);"
      title="Raise this object one step in the object stack">
      <ArrowIcon />
    </button>
    <button
      on:click="{onSendBackward}"
      class:activeBtn="{$selectedObj}"
      class="action-btn"
      title="Lower this object on step in the object stack">
      <ArrowIcon />
    </button>
    <button
      on:click="{onDuplicate}"
      class:activeBtn="{$selectedObj}"
      class="action-btn"
      title="Create a duplicate of the object">
      <CopyIcon />
    </button>
    <button
      class:activeBtn="{$items.length > 0}"
      class="action-btn"
      title="Delete all objects"
      on:click="{onDeleteAll}">
      <TrashIcon />
    </button>
  </footer>
</main>

<style>
main {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  overflow: hidden;
}

.objects {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
}

.object {
  min-width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 10px 10px;
  cursor: pointer;
}

.active {
  background-color: #222;
}

.object-left-info {
  display: flex;
  margin-right: 20px;
}

.object-eye {
  width: 25px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.object-eye,
.object-lock {
  border: 1px solid transparent;
}

.object-eye:hover,
.object-lock:hover {
  border: 1px solid #888;
}

.object-lock {
  width: 25px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}

img {
  width: 100%;
}

.object-right-info {
  display: flex;
  align-items: center;
}

.object-preview {
  width: 50px;
  height: 50px;
  border: 2px solid #888;
  margin-right: 20px;
  padding: 3px;
  border-radius: 3px;
}

.object-name {
  color: #ccc;
  white-space: nowrap;
  padding-right: 30px;
}

.action-btn {
  opacity: 0.5;
  pointer-events: none;
}

.activeBtn {
  opacity: 1;
  pointer-events: visible;
}
</style>
