<script>
import { filterWidget } from "../../store/store";

import Draggable from "../Draggable.svelte";
import Shadow from "../excerpts/Shadow.svelte";
import Stroke from "../excerpts/Stroke.svelte";
</script>

<Draggable visible="{$filterWidget}" title="Filter">
  <main>
    <div class="filter">
      <Stroke />
    </div>
    <div class="filter">
      <Shadow />
    </div>
  </main>
</Draggable>

<style>
main {
  width: 300px;
  display: flex;
  color: white;
  flex-direction: column;
}

.filter {
  margin-bottom: 15px;
}

.filter:last-child {
  margin: 0;
}
</style>
