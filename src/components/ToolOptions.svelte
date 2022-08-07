<script>
import TextWidget from "./widgets/TextWidget.svelte";
import CircleWidget from "./widgets/CircleWidget.svelte";
import { selectedObj } from "../store/store";
import TriangleWidget from "./widgets/TriangleWidget.svelte";
</script>

<main>
  <div class="widget" class:visible="{$selectedObj?.type === 'textbox'}">
    <TextWidget />
  </div>
  <div class="widget" class:visible="{$selectedObj?.type === 'circle'}">
    <CircleWidget />
  </div>
  <div class="widget" class:visible="{$selectedObj?.type === 'triangle'}">
    <TriangleWidget />
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
