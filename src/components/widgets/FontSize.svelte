<script>
import { selectedObj, editor } from "../../store/store";

let fontSize = $selectedObj?.fontSize;

const onFontSize = (e) => {
  console.log(e.target.value, fontSize);
  $editor.getActiveObject().fontSize = parseInt(e.target.value);
  $editor.renderAll();
};
</script>

<main>
  <div class="item">
    <div class="item-name">Size</div>
    <div class="item-data">
      <div class="input-wrap">
        <input
          id="size"
          type="number"
          value="{fontSize}"
          name="size"
          on:input="{onFontSize}" />
      </div>
    </div>
  </div>
</main>
