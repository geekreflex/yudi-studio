<script>
import { editor, history } from "../store/store";

// function undo() {
//   if ($historyMods < $history.length) {
//     const prevHistoryObj = $history[$history.length - 1 - $historyMods - 1];
//     $editor.loadFromJSON(prevHistoryObj, () => {
//       $historyMods++;
//     });
//   }
// }

// function redo() {
//   if ($historyMods > 0) {
//     const nextHistoryObj = $history[$history.length - 1 - $historyMods + 1];
//     $editor.loadFromJSON(nextHistoryObj, () => {
//       $historyMods - 1;
//     });
//   }
// }

// function clear() {
//   $history = [];
//   $historyMods = 0;
// }

const onHistoryClick = (item) => {
  $editor.loadFromJSON(item);
};
</script>

<main>
  <p>History</p>
  <div class="history-list">
    {#each $history as item, index}
      <div class="history" on:click="{() => onHistoryClick(item)}">
        <div class="history-preview">
          <img
            src="{$editor?.loadFromJSON(item).toDataURL('png')}"
            alt="History preview" />
        </div>
      </div>
    {/each}
  </div>
</main>

<style>
main {
  display: flex;
  flex-direction: column;
}

.history-list {
  display: flex;
  flex-direction: column;
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
</style>
