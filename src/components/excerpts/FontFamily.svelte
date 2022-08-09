<script>
import { onFontFamilyChange } from "../../functions/editorFunctions";
import { selectedObj } from "../../store/store";
import { fontList } from "../../data/fontList";
</script>

<main>
  <div class="item">
    <div class="item-name">Font family</div>
    <div class="item-data">
      <div class="input-wrap">
        <select
          value="{$selectedObj?.fontFamily}"
          on:input="{(e) => onFontFamilyChange(e.target.value)}">
          {#each fontList as font}
            <option value="{font}" style="font-family:{font}">{font}</option>
          {/each}
        </select>
      </div>
    </div>
  </div>
</main>
