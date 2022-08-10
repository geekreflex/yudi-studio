<script>
import Color from "../excerpts/Color.svelte";
import PostionSize from "../excerpts/PostionSize.svelte";
import { selectedObj } from "../../store/store";
import { onRoundX, onRoundY } from "../../functions/editorFunctions";
</script>

<main>
  <Color />
  <PostionSize />
  <div class="item">
    <div class="item-name">Radius:</div>
    <div class="item-data">
      <div class="input-wrap">
        <label for="rx">Rx:</label>
        <input
          id="rx"
          type="number"
          value="{$selectedObj?.rx}"
          on:input="{(e) => onRoundX(e.target.value)}" />
      </div>
      <div class="input-wrap">
        <label for="ry">Ry:</label>
        <input
          id="ry"
          type="number"
          value="{$selectedObj?.ry}"
          on:input="{(e) => onRoundY(e.target.value)}" />
      </div>
    </div>
  </div>
</main>

<style>
.item-data {
  display: flex;
  justify-content: space-between;
}

.item-data .input-wrap {
  width: 49%;
}

.item-data input {
  width: 100%;
}

.input-wrap {
  flex-direction: row;
  align-items: center;
}

.input-wrap label {
  margin-right: 5px;
}
</style>
