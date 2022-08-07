<script>
import { selectedObj, editor } from "../../store/store";

const onFillChange = (e) => {
  $editor.getActiveObject().set({ fill: e.target.value });
  $editor.renderAll();
};

const onOpacityChange = (e) => {
  $editor.getActiveObject().set({ opacity: e.target.value });
  $editor.renderAll();
};
</script>

<main>
  <div class="item">
    <div class="item-name">Color:</div>
    <div class="item-data color">
      <label
        for="fill-color"
        class="color-block"
        style="background: {$selectedObj?.fill}">
        <input
          id="fill-color"
          type="color"
          value="{$selectedObj?.fill}"
          name="fill"
          on:input="{onFillChange}" />
      </label>
    </div>
  </div>
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
        on:input="{onOpacityChange}" />
    </div>
  </div>
</main>

<style>
main {
  position: relative;
}
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

#fill-color {
  visibility: hidden;
  opacity: 0;
  overflow: hidden;
  margin: 0;
  /* position: absolute; */
}

#range {
  width: 100%;
}
</style>
