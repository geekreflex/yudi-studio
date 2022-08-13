<script>
import Draggable from "../Draggable.svelte";
import { elementWidget } from "../../store/store";
const closeWidget = () => {
  $elementWidget = false;
};
</script>

<Draggable visible="{true}" title="Elements and Icons" close="{closeWidget}">
  <main>hello</main>
</Draggable>

<style>
main {
  width: 600px;
  color: #fff;
}
</style>
