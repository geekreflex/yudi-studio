<script>
import { toFixed } from "../../utils/number";
import { selectedObj, editor } from "../../store/store";

const onLeftPos = (e) => {
  $editor.getActiveObject().set({ left: e.target.vlue });
  $editor.renderAll();
};
</script>

<main>
  <div class="item">
    <div class="item-name">Position:</div>
    <div class="item-data">
      <div class="input-wrap">
        <label for="left">X:</label>
        <input
          id="left"
          type="number"
          value="{toFixed($selectedObj?.left, 3)}"
          on:input="{onLeftPos}" />
      </div>
      <div class="input-wrap">
        <label for="top">Y:</label>
        <input id="top" type="number" value="{toFixed($selectedObj?.top, 3)}" />
      </div>
    </div>
  </div>
  <div class="item">
    <div class="item-name">Size:</div>
    <div class="item-data">
      <div class="input-wrap">
        <label for="width">W:</label>
        <input
          id="width"
          type="number"
          value="{toFixed($selectedObj?.width * $selectedObj?.scaleX, 3)}" />
      </div>
      <div class="input-wrap">
        <label for="height">H:</label>
        <input
          id="height"
          type="number"
          value="{toFixed($selectedObj?.height * $selectedObj?.scaleY, 3)}" />
      </div>
    </div>
  </div>
</main>

<style>
.item {
  margin-bottom: 10px;
}
.item-name {
  margin-bottom: 5px;
  font-size: 14px;
  color: #ccc;
}

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
