<script>
import { fabric } from "fabric";
import TrashIcon from "../icons/TrashIcon.svelte";

import { editor, history, historyMods } from "../store/store";

const onClear = () => {
  $history = [];
  $historyMods = 0;
};

const onHistoryClick = (item) => {
  $editor.loadFromJSON(item);
};

const generateThumbnail = (item) => {
  const canElm = document.createElement("canvas");
  const canvas = new fabric.Canvas(canElm);
  canvas.setWidth($editor.getWidth());
  canvas.setHeight($editor.getHeight());
  return canvas.loadFromJSON(item).toDataURL("png");
};
</script>

<main>
  <div class="history-list">
    {#each $history as item, index}
      <div class="history" on:click="{() => onHistoryClick(item)}">
        <div class="history-preview">
          <img src="{generateThumbnail(item)}" alt="History preview" />
        </div>
        <div class="history-name">History #{index + 1}</div>
      </div>
    {/each}
  </div>
  <footer class="panel-footer">
    <button class="action-btn" on:click="{onClear}">
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

.history-list {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
}

.history {
  display: flex;
  align-items: center;
  padding: 5px 20px;
  cursor: pointer;
}

.history:hover {
  background-color: #444;
}

.history-preview {
  width: 60px;
  border: 1px solid #666;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
}

.history-preview img {
  width: 100%;
}

.history-name {
  margin-left: 20px;
  white-space: nowrap;
}

footer {
  height: 40px;
  border-top: 1px solid #333;
  display: flex;
  align-items: center;
  padding: 0 20px;
}
</style>
