<script>
import RedoIcon from "../icons/RedoIcon.svelte";
import UndoIcon from "../icons/UndoIcon.svelte";
import { mods, state, editor } from "../store/store";

function undo() {
  if ($mods < $state.length) {
    $editor.clear().renderAll();
    $editor.loadFromJSON($state[$state.length - 1 - $mods - 1]);
    $editor.renderAll();
    $mods += 1;
  }
}

function redo() {
  if ($mods > 0) {
    $editor.clear().renderAll();
    $editor.loadFromJSON($state[$state.length - 1 - $mods + 1]);
    $editor.renderAll();
    $mods -= 1;
  }
}
</script>

<main>
  <button on:click="{undo}" class="action-btn" id="undo"><UndoIcon /></button>
  <button on:click="{redo}" class="action-btn" id="redo"><RedoIcon /></button>
</main>

<style>
main {
  display: flex;
  margin-left: 20px;
}
</style>
