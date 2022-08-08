<script>
// @ts-nocheck
import { selectedObj } from "../store/store";
import TextTool from "./tools/TextTool.svelte";
import CircleTool from "./tools/CircleTool.svelte";
import TriangleTool from "./tools/TriangleTool.svelte";
import RectTool from "./tools/RectTool.svelte";
import MutipleTool from "./tools/MutipleTool.svelte";
import PolygonTool from "./tools/PolygonTool.svelte";
</script>

<main>
  <div class="widget" class:visible="{$selectedObj?.type === 'textbox'}">
    <TextTool />
  </div>
  <div class="widget" class:visible="{$selectedObj?.type === 'circle'}">
    <CircleTool />
  </div>
  <div class="widget" class:visible="{$selectedObj?.type === 'triangle'}">
    <TriangleTool />
  </div>
  <div class="widget" class:visible="{$selectedObj?.type === 'rect'}">
    <RectTool />
  </div>
  <div class="widget" class:visible="{$selectedObj?.type === 'polygon'}">
    <PolygonTool />
  </div>
  <div
    class="widget"
    class:visible="{$selectedObj?.type === 'activeSelection'}">
    <MutipleTool />
  </div>
</main>

<style>
main {
  height: 100%;
  padding: 5px;
}

.widget {
  display: none;
}

.visible {
  display: block;
}
</style>
