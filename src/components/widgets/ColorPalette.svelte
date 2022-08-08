<script>
import iro from "@jaames/iro";
import { onMount } from "svelte";
import { colorModal } from "../../store/store";
import Draggable from "../Draggable.svelte";

onMount(() => {
  var colorPicker = new iro.ColorPicker("#picker", {
    width: 320,
    color: "#f00",
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
