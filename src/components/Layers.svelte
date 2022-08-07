<script>
import ChainOffIcon from "../icons/ChainOffIcon.svelte";
import ChainOnIcon from "../icons/ChainOnIcon.svelte";
import EyeOffIcon from "../icons/EyeOffIcon.svelte";
import EyeOneIcon from "../icons/EyeOneIcon.svelte";
import { items, editor, selectedObj } from "../store/store";
import { fabric } from "fabric";
import { onMount } from "svelte";

let imgArr = [];

onMount(() => {
  $editor.calcOffset();
  $editor.on("object:added", () => {
    generatePreview();
  });
});

const generatePreview = (index) => {};

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
  console.log("jsjs");
  e.preventDefault();
  e.stopPropagation();
  const item = $editor.item(index);
  item.lockMovementX = !item.lockMovementX;
  item.lockMovementY = !item.lockMovementY;
  $editor.renderAll();
};
</script>

<main>
  <canvas id="thumb"></canvas>
  <div class="objects">
    {#each $items as item, index}
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
            <img src="{$editor.toDataURL('png')}" alt="Preview" />
          </div>
          <div class="object-name">Layer #{index + 1}- {item.type}</div>
        </div>
      </div>
    {/each}
  </div>
</main>

<style>
main {
  padding: 5px 0;
  display: flex;
  width: 100%;
  flex: 1;
}
.objects {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.object {
  min-width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
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

#thumb {
  position: absolute;
  visibility: hidden;
}
</style>
