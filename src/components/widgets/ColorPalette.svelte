<script>
import iro from "@jaames/iro";
import { onFillChange } from "../../functions/editorFunctions";
import { onMount } from "svelte";
import { colorModal, selectedObj } from "../../store/store";
import Draggable from "../Draggable.svelte";

onMount(() => {
  var colorPicker = new iro.ColorPicker("#picker", {
    width: $selectedObj?.fill,
    color: "#f00",
  });

  colorPicker.on(["mount", "color:setActive", "color:change"], function () {
    // colorPicker.color is always the active color
    const index = colorPicker.color.index;
    const hexString = colorPicker.color.hexString;
    console.log(hexString);
    onFillChange(hexString);
  });
});

const onClose = () => {
  $colorModal = false;
};
</script>

<Draggable visible="{$colorModal}" title="Color palette" close="{onClose}">
  <main>
    <div id="picker"></div>
  </main>
</Draggable>

<style>
main {
  width: 600px;
  background-color: #222;
  overflow: auto;
  z-index: 99;
  top: 0;
  left: 0;
  padding: 20px;
}
</style>
