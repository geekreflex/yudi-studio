<script>
import RedoIcon from "../icons/RedoIcon.svelte";
import UndoIcon from "../icons/UndoIcon.svelte";
</script>

<main>
  <button disabled class="action-btn" id="undo"><UndoIcon /></button>
  <button disabled class="action-btn" id="redo"><RedoIcon /></button>
</main>

<style>
main {
  display: flex;
  margin-left: 20px;
}
</style>
