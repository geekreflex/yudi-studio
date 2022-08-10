<script>
import { filterWidget } from "../../store/store";

import Draggable from "../Draggable.svelte";
import Shadow from "../excerpts/Shadow.svelte";
</script>

<Draggable visible="{$filterWidget}" title="Filter">
  <main>
    <Shadow />
  </main>
</Draggable>

<style>
main {
  width: 300px;
  display: flex;
  padding: 20px;
  color: white;
}
</style>
