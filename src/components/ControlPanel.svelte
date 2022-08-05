<script>
import { editor, selectedObj } from "../store/store";

const onFillChange = (e) => {
  console.log(e.target.value);
  $editor.getActiveObject().set({ fill: e.target.value });
  $editor.renderAll();
};
</script>

<main>
  <div>
    {$selectedObj?.type}
    <div>
      <input
        type="color"
        value="{$selectedObj?.fill}"
        name="fill"
        on:input="{onFillChange}" />
    </div>
  </div>
</main>

<style>
main {
  color: white;
}
</style>
