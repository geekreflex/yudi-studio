<script>
import { templatesModal, editor } from "../store/store";
import templates from "../templates/list";
import { fabric } from "fabric";
import { toDataURL } from "../utils/toDataUrl";

const renderTemplate = (temp) => {
  $editor.clear();
  let items = templates[temp];
  const { backgroundColor, width, height, objects } = items;
  $editor.setDimensions({ width, height });
  $editor.set({ backgroundColor });
  renderObjects(objects);
  closeModal();
};

const renderObjects = (objs) => {
  objs.map((ob) => {
    if (ob.type === "text") {
      renderTexts(ob);
    }

    if (ob.type === "image") {
      renderImages(ob);
    }

    if (ob.type === "triangle") {
      renderTriangle(ob);
    }

    if (ob.type === "circle") {
      renderCircle(ob);
    }
  });
};

const renderTexts = (text) => {
  const t = new fabric.Textbox(text.content, { ...text });
  $editor.add(t);
};

const renderImages = (image) => {
  toDataURL(image.url).then((dataUrl) => {
    fabric.Image.fromURL(dataUrl, (img) => {
      img.scaleToWidth(200);
      img.set({ ...image });
      $editor.add(img);
    });
  });
};

const renderTriangle = (triangle) => {
  const t = new fabric.Triangle({
    ...triangle,
  });
  $editor.add(t);
};

const renderCircle = (circle) => {
  const c = new fabric.Circle({
    ...circle,
  });
  $editor.add(c);
};

const closeModal = () => {
  templatesModal.update(() => false);
};

const renderBlank = () => {
  $editor.clear();
  $editor.setDimensions({ width: 600, height: 500 });
  $editor.set({ backgroundColor: "white" });
  closeModal();
};
</script>

<main class="{$templatesModal ? 'visible' : 'hidden'}">
  <div class="overlay" on:click="{closeModal}"></div>
  <div class="wrap">
    <div class="template-list">
      <div class="template" on:click="{renderBlank}">Blank</div>
      <div class="template" on:click="{() => renderTemplate('pyramid')}">
        Pyramid
      </div>
      <div class="template" on:click="{() => renderTemplate('birthday')}">
        Birthday
      </div>
    </div>
    <button on:click="{closeModal}">Close Modal</button>
  </div>
</main>

<style>
main {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  justify-content: center;
  align-items: center;
}

.visible {
  display: flex;
}

.hidden {
  display: none;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
}

.wrap {
  width: 800px;
  background-color: #fff;
  padding: 30px;
  position: relative;
  border-radius: 10px;
}

.template-list {
  display: flex;
}

.template {
  height: 100px;
  width: 100px;
  border: 1px solid #666;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
