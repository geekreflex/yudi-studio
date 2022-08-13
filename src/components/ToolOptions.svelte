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
import ImageTool from "./tools/ImageTool.svelte";
import ColorWidget from "./widgets/ColorWidget.svelte";
import { onFillChange } from "../functions/editorFunctions";

$: colorValue = $selectedObj?.fill;
let colorWidget = false;

const onShowColor = () => {
  colorWidget = true;
  console.log("jsksks");
};

const onCloseColor = () => {
  colorWidget = false;
};

const onChange = (val) => {
  onFillChange(val);
};
</script>

<ColorWidget
  title="Change color of selected object"
  id="object-color-widget"
  visible="{colorWidget}"
  close="{onCloseColor}"
  onChange="{onChange}"
  value="{colorValue}" />

<main>
  {#if $freeDrawingMode}
    <div class="widget" class:visible="{$freeDrawingMode}">
      <FreeDrawingTool onShowColor="{onShowColor}" />
    </div>
  {:else}
    <div class="widget" class:visible="{$selectedObj?.type === 'textbox'}">
      <TextTool onShowColor="{onShowColor}" />
    </div>
    <div class="widget" class:visible="{$selectedObj?.type === 'circle'}">
      <CircleTool onShowColor="{onShowColor}" />
    </div>
    <div class="widget" class:visible="{$selectedObj?.type === 'triangle'}">
      <TriangleTool onShowColor="{onShowColor}" />
    </div>
    <div class="widget" class:visible="{$selectedObj?.type === 'rect'}">
      <RectTool onShowColor="{onShowColor}" />
    </div>
    <div class="widget" class:visible="{$selectedObj?.type === 'polygon'}">
      <PolygonTool onShowColor="{onShowColor}" />
    </div>
    <div
      class="widget"
      class:visible="{$selectedObj?.type === 'activeSelection'}">
      <MutipleTool onShowColor="{onShowColor}" />
    </div>
    <div class="widget" class:visible="{$selectedObj?.type === 'path'}">
      <PathTool onShowColor="{onShowColor}" />
    </div>
    <div class="widget" class:visible="{$selectedObj?.type === 'image'}">
      <ImageTool />
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
