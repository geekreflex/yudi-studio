<script>
import { selectedObj } from "../../store/store";

import Color from "../excerpts/Color.svelte";
import Opacity from "../excerpts/Opacity.svelte";
import PostionSize from "../excerpts/PostionSize.svelte";

export let onShowColor;
</script>

<main>
  <div class="item">
    <div class="item-name">Color:</div>
    <div class="item-data">
      <Color mode="fill" val="{$selectedObj?.fill}" onClick="{onShowColor}" />
    </div>
  </div>
  <Opacity />
  <PostionSize />
</main>

<style>
</style>
