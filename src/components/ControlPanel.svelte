<script>
import { editor } from "../store/store";

const onChnage = (e) => {
  if ($editor.getActiveObject()) {
    $editor.getActiveObject().set({ fontSize: e.target.value });
    $editor.renderAll();
  }
};
</script>

<main>
  <input on:input="{onChnage}" type="number" min="7" max="100" />
</main>

<style>
main {
  color: white;
}

input {
  font-size: 20px;
  width: 70px;
}
</style>
