<script>
import FontFaceObserver from "fontfaceobserver";
import { selectedObj, editor } from "../../store/store";

const fontList = [
  "Helvetica",
  "Arial",
  "Sans serif",
  "Times New Roman",
  "Ubuntu",
  "Poppins",
  "Oleo Script Swash Caps",
];

const onFontFamilyChange = (font) => {
  const myfont = new FontFaceObserver(font);

  myfont
    .load()
    .then(function () {
      // when font is loaded, use it.
      $editor.getActiveObject().set("fontFamily", font);
      $editor.renderAll();
    })
    .catch(function (e) {
      console.log(e);
      alert("font loading failed " + font);
    });
};
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
