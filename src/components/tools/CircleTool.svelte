<script>
import Color from "../excerpts/Color.svelte";
import PostionSize from "../excerpts/PostionSize.svelte";
import { selectedObj } from "../../store/store";
import Opacity from "../excerpts/Opacity.svelte";

export let onShowColor;
</script>

<main>
  <div class="item">
    <div class="item-name">Color:</div>
    <div class="item-data">
      <Color val="{$selectedObj?.fill}" onClick="{onShowColor}" />
    </div>
  </div>
  <Opacity />
  <PostionSize />
</main>

<style>
main {
  display: flex;
  flex-direction: column;
}
</style>
