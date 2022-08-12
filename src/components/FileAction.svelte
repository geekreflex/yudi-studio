<script>
import SaveIcon from "../icons/SaveIcon.svelte";
import FilePlusIcon from "../icons/FilePlusIcon.svelte";
import FolderIcon from "../icons/FolderIcon.svelte";
</script>

<main>
  <button class="action-btn" title="New File">
    <FilePlusIcon />
  </button>
  <button class="action-btn" title="Open File">
    <FolderIcon />
  </button>
  <button class="action-btn" title="Save File">
    <SaveIcon />
  </button>
</main>

<style>
main {
  display: flex;
  margin-right: 50px;
}
</style>
