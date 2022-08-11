<script>
import Paint2 from "../icons/Paint2.svelte";
import FilePlusIcon from "../icons/FilePlusIcon.svelte";
import { filterWidget } from "../store/store";
</script>

<main>
  <button class="action-btn" title="New File">
    <FilePlusIcon />
  </button>
  <button
    class="action-btn"
    title="Filters"
    on:click="{() => ($filterWidget = true)}">
    <Paint2 />
  </button>
</main>

<style>
main {
  display: flex;
  align-items: center;
  margin-right: 50px;
}
</style>
