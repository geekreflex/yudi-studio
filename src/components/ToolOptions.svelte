<script>
// @ts-nocheck
import { selectedObj, freeDrawingMode } from "../store/store";
import TextTool from "./tools/TextTool.svelte";
import CircleTool from "./tools/CircleTool.svelte";
import TriangleTool from "./tools/TriangleTool.svelte";
import RectTool from "./tools/RectTool.svelte";
import MutipleTool from "./tools/MutipleTool.svelte";
import PolygonTool from "./tools/PolygonTool.svelte";
import FreeDrawingTool from "./tools/FreeDrawingTool.svelte";
import PathTool from "./tools/PathTool.svelte";
</script>

<main>
  {#if $freeDrawingMode}
    <div class="widget" class:visible="{$freeDrawingMode}">
      <FreeDrawingTool />
    </div>
  {:else}
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
    <div class="widget" class:visible="{$selectedObj?.type === 'path'}">
      <PathTool />
    </div>
  {/if}
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
