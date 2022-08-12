<script>
import {
  onPolygonCorners,
  onStarSpokeRatio,
} from "../../functions/editorFunctions";
import { selectedObj } from "../../store/store";
import Color from "../excerpts/Color.svelte";
import Opacity from "../excerpts/Opacity.svelte";
import PostionSize from "../excerpts/PostionSize.svelte";

export let onShowColor;

let renderPolySize = () => {
  if ($selectedObj?.name === "regpoly") {
    return $selectedObj?.points?.length;
  }

  if ($selectedObj.name === "star") {
    return $selectedObj?.points?.length / 2;
  }
};
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
  <div class="item">
    <div class="item-name">Corners:</div>
    <div class="item-data">
      <div class="input-wrap">
        <input
          min="3"
          type="number"
          value="{$selectedObj?.name && renderPolySize()}"
          on:input="{(e) =>
            onPolygonCorners(e.target.value, $selectedObj?.name)}" />
      </div>
    </div>
  </div>
  {#if $selectedObj?.name === "star"}
    <div class="item">
      <div class="item-name">Spike ratio:</div>
      <div class="item-data">
        <div class="input-wrap">
          <input
            type="number"
            value="{50}"
            on:input="{(e) => onStarSpokeRatio(parseInt(e.target.value))}" />
        </div>
      </div>
    </div>
  {/if}
</main>
