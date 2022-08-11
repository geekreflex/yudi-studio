<script>
import Color from "../excerpts/Color.svelte";
import PostionSize from "../excerpts/PostionSize.svelte";
import { selectedObj } from "../../store/store";
import Opacity from "../excerpts/Opacity.svelte";
</script>

<main>
  <div class="item">
    <div class="item-name">Color:</div>
    <div class="item-data">
      <Color mode="fill" val="{$selectedObj?.fill}" />
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
