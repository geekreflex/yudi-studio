<script>
import { onMount } from "svelte";
import filters from "../../functions/filters";
import { onFilterWidget } from "../../functions/clickFunctions";
import { filterWidget, selectedObj } from "../../store/store";
import Draggable from "../Draggable.svelte";

onMount(() => {
  filters();
});
</script>

<Draggable
  visible="{$filterWidget}"
  title="Filters"
  close="{() => onFilterWidget(false)}">
  <main class:active="{$selectedObj}">
    <p>
      <label
        ><span>Invert:</span>
        <input type="checkbox" id="invert" disabled /></label>
    </p>
    <p>
      <label
        ><span>Blur:</span> <input type="checkbox" id="blur" disabled /></label>
      <br />
      <label
        >Value: <input
          type="range"
          id="blur-value"
          value="0.1"
          min="0"
          max="1"
          step="0.01"
          disabled /></label>
    </p>
  </main>
</Draggable>

<style>
main {
  width: 300px;
  display: flex;
  color: white;
  flex-direction: column;
  opacity: 0.5;
  pointer-events: none;
}

.active {
  opacity: 1;
  pointer-events: visible;
}
</style>
