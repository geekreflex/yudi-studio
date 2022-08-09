<script>
import { editor, unfinishedModal } from "../store/store";
import Modal from "./Modal.svelte";

const onDiscardDesign = () => {
  $unfinishedModal = false;
  $editor.clear();
  $editor.set("backgroundColor", "#ffffff");
  $editor.setDimension({ width: 500, height: 500 });
};

const onContinueDesign = () => {
  $unfinishedModal = false;
};
</script>

<Modal
  visible="{$unfinishedModal}"
  pos="bottom-right"
  title="Hey, You're back!"
  blur="{true}">
  <main>
    <h3>Unfinished Design</h3>
    <p>
      We found this unfinshed design. Would you like to continue from where you
      left off?
    </p>
    <div class="btn-wrap">
      <button class="btn" on:click="{onDiscardDesign}">Discard</button>
      <button class="btn" on:click="{onContinueDesign}">Continue</button>
    </div>
  </main>
</Modal>

<style>
main {
  width: 300px;
  bottom: 0;
}

.btn-wrap {
  display: flex;
  justify-content: space-around;
}

h3 {
  text-align: center;
  margin-bottom: 10px;
}

p {
  text-align: center;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
