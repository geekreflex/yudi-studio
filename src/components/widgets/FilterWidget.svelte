<script>
import { onFilterWidget } from "../../functions/clickFunctions";
import { filterWidget, selectedObj } from "../../store/store";
import Draggable from "../Draggable.svelte";
import Invert from "../filters/Invert.svelte";
import Blur from "../filters/Blur.svelte";
import Saturation from "../filters/Saturation.svelte";
import Brightness from "../filters/Brightness.svelte";
</script>

<Draggable
  visible="{$filterWidget}"
  title="Filters"
  close="{() => onFilterWidget(false)}">
  <main class:active="{$selectedObj?.type === 'image'}">
    <Invert />
    <div class="line"><span></span></div>
    <Blur />
    <div class="line"><span></span></div>
    <Saturation />
    <div class="line"><span></span></div>
    <Brightness />
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
  padding: 20px;
}

.active {
  opacity: 1;
  pointer-events: visible;
}
</style>
