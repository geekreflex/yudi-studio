<script>
import { onColorWidget } from "../../functions/clickFunctions";
import { selectedObj, fillMode } from "../../store/store";

export let mode = "fill";
export let val = $selectedObj?.fill;

const showColorWidget = () => {
  $fillMode = mode;
  onColorWidget(true);
};
</script>

<main>
  <div
    for="fill-color"
    class="color-block"
    style="background: {val}"
    on:click="{showColorWidget}">
  </div>
</main>

<style>
main {
  position: relative;
}
</style>
