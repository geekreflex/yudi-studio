<script>
export let onSwitch;
export let checked;
export let id;
</script>

<main>
  <label class="switch">
    <input
      type="checkbox"
      id="{id}"
      on:change="{onSwitch}"
      checked="{checked}" />
    <div class="knob"></div>
  </label>
</main>

<style>
.switch {
  position: relative;
  display: block;
  width: 40px;
  height: 24px;
}

input {
  opacity: 0;
  width: 0;
  height: 0;
}

input:checked + .knob {
  background-color: #256141;
}

input:focus + .knob {
  box-shadow: #256141;
}

input:checked + .knob:before {
  -webkit-transform: translateX(16px);
  -ms-transform: translateX(16px);
  transform: translateX(16px);
}

.knob {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}

.knob:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}
</style>
