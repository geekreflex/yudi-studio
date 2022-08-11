<script>
import { onOpacityChange } from "../../functions/editorFunctions";
import { selectedObj } from "../../store/store";
</script>

<main>
  <div class="item">
    <div class="item-name">Opacity:</div>
    <div class="item-data opacity">
      <input
        id="range"
        type="range"
        min="0"
        max="1"
        step="0.01"
        value="{$selectedObj?.opacity}"
        on:input="{(e) => onOpacityChange(e.target.value)}" />
    </div>
  </div>
</main>

<style>
main {
  position: relative;
}

#range {
  width: 100%;
}
</style>
