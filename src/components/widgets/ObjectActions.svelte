<script>
import ArrowIcon from "../../icons/ArrowIcon.svelte";
import DoubleArrowAIcon from "../../icons/DoubleArrowAIcon.svelte";
import CopyIcon from "../../icons/CopyIcon.svelte";
import TrashIcon from "../../icons/TrashIcon.svelte";
import { selectedObj } from "../../store/store";
</script>

<main class="{$selectedObj ? 'visible' : 'hidden'}">
  <button class="action-btn">
    <CopyIcon />
  </button>
  <button class="action-btn" style="transform: rotate(90deg);">
    <DoubleArrowAIcon />
  </button>
  <button class="action-btn">
    <ArrowIcon />
  </button>
  <button class="action-btn" style="transform: rotate(180deg);">
    <ArrowIcon />
  </button>
  <button class="action-btn" style="transform: rotate(270deg);">
    <DoubleArrowAIcon />
  </button>
  <button class="action-btn">
    <TrashIcon />
  </button>
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
  display: none;
}
</style>
