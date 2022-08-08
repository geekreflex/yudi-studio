<script>
import iro from "@jaames/iro";
import { onMount } from "svelte";
import { colorModal } from "../../store/store";
import Modal from "../Modal.svelte";

onMount(() => {
  var colorPicker = new iro.ColorPicker("#picker", {
    // Set the size of the color picker
    width: 320,
    // Set the initial color to pure red
    color: "#f00",
  });
});

const onClose = () => {
  $colorModal = false;
};
</script>

<Modal visible="{$colorModal}" title="Color Palette" close="{onClose}">
  <main>
    <div id="picker"></div>
  </main>
</Modal>

<style>
main {
  width: 600px;
}
</style>
