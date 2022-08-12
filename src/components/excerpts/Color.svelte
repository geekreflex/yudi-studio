<script>
import { selectedObj } from "../../store/store";

export let onClick;
export let val = $selectedObj?.fill;
</script>

<main>
  <div
    for="fill-color"
    class="color-block"
    style="background: {val}"
    on:click="{onClick}">
  </div>
</main>

<style>
main {
  position: relative;
}
</style>
