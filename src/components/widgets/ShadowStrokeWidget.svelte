<script>
import Draggable from "../Draggable.svelte";
import { shadowStrokeWidget, selectedObj } from "../../store/store";
import { onShadowStrokeWidget } from "../../functions/clickFunctions";
import Stroke from "../excerpts/Stroke.svelte";
import Shadow from "../excerpts/Shadow.svelte";
</script>

<Draggable
  visible="{$shadowStrokeWidget}"
  title="Stroke and Shadow"
  close="{() => onShadowStrokeWidget(false)}">
  <main class:active="{$selectedObj}">
    <Stroke />
    <div class="line"><span></span></div>
    <Shadow />
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
