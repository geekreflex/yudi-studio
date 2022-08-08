<script>
import UndoIcon from "../../icons/UndoIcon.svelte";
import RedoIcon from "../../icons/RedoIcon.svelte";
import { editor, history, historyMods } from "../../store/store";

const onUndo = () => {
  if ($historyMods < $history.length) {
    const prevHistoryObj = $history[$history.length - 1 - $historyMods - 1];
    $editor.loadFromJSON(prevHistoryObj, () => {
      $historyMods++;
    });
  }
};

const onRedo = () => {
  if ($historyMods > 0) {
    const nextHistoryObj = $history[$history.length - 1 - $historyMods + 1];
    $editor.loadFromJSON(nextHistoryObj, () => {
      $historyMods--;
    });
  }
};
</script>

<main>
  <button
    class:active="{$historyMods < $history.length}"
    class="action-btn"
    on:click="{onUndo}"><UndoIcon /></button>
  <button
    class:active="{$historyMods > 0}"
    class="action-btn"
    on:click="{onRedo}"><RedoIcon /></button>
</main>

<style>
main {
  display: flex;
}

button {
  opacity: 0.5;
}

.active {
  opacity: 1;
}
</style>
