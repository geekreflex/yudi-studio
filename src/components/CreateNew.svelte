<script>
import { create, width, height, editor, isCreated } from "../store/store";

const onClose = () => {
  create.update((v) => !v);
};

const onWidth = (val) => {
  width.set(val.value);
};

const onHeight = (val) => {
  height.set(val.value);
};

const createCanvas = () => {
  $editor.setWidth($width);
  $editor.setHeight($height);
  isCreated.set(true);
  onClose();
};
</script>

<main class="{$create ? 'create' : ''}">
  <div class="box">
    <h3>New Design</h3>

    <input
      value="{$width}"
      type="number"
      on:input="{(e) => onWidth(e.target)}" />
    <input
      value="{$height}"
      type="number"
      on:input="{(e) => onHeight(e.target)}" />
    <div class="btn-wrap">
      <button class="cancel-btn" on:click="{onClose}">Cancel</button>
      <button class="create-btn" on:click="{createCanvas}">Create</button>
    </div>
  </div>
</main>

<style>
main {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 99998;
  display: none;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
}

.create {
  display: flex;
}

.box {
  width: 500px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.1);
}

h3 {
  margin-bottom: 20px;
  text-align: center;
}

input {
  height: 30px;
  margin-bottom: 10px;
  padding: 0 10px;
  border: none;
  outline: none;
  background-color: #777;
  color: #fff;
  width: 300px;
}

button {
  padding: 10px 20px;
  border: none;
  outline: none;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
}

.create-btn {
  background-color: navy;
}
.cancel-btn {
  margin-right: 10px;
  color: #333;
}

.btn-wrap {
  display: flex;
}
</style>
