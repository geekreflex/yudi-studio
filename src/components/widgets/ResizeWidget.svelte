<script>
import Draggable from "../Draggable.svelte";
import { resizeWidget } from "../../store/store";
</script>

<Draggable title="Resize Canvas" visible="{$resizeWidget}">
  <main>hello reize</main>
</Draggable>

<style>
</style>
