<script>
import { selectedObj, editor } from "../../store/store";

const onFillChange = (e) => {
  $editor.getActiveObject().set({ fill: e.target.value });
  $editor.renderAll();
};
</script>

<main>
  <div class="item">
    <div class="item-name">Color:</div>
    <div class="item-data color">
      <label
        for="color"
        class="color-block"
        style="background: {$selectedObj?.fill}"></label>
      <input
        id="color"
        type="color"
        value="{$selectedObj?.fill}"
        name="fill"
        on:input="{onFillChange}" />
    </div>
  </div>
</main>

<style>
.item {
  margin-bottom: 10px;
  position: relative;
}
.item-name {
  margin-bottom: 5px;
  font-size: 14px;
  color: #ccc;
}
.color-block {
  width: 100px;
  height: 30px;
  border: 3px solid #333;
  border-radius: 4px;
}

label {
  position: relative;
  margin-bottom: 0;
}

#color {
  visibility: hidden;
  opacity: 0;
  overflow: hidden;
  margin: 0;
  position: absolute;
}
</style>
