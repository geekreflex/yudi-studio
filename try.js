// import crypto from "crypto";

// console.log(crypto);
// console.log("");
// console.log("PHONE_NUMBER:", "+1(909)-269-6515");
// console.log("BANK_CLONING:", "[========= ]94%");
// console.log("SOCIAL_MEDIA_CLONING:", "[========= ]82%");
// console.log("CREDIT_CARD_CLONING:", "[========= ]91%");
// console.log("GMAIL_CLONING: ", "[========= ]97%");
// console.log("CAMERA_CLONING ", "[========= ]85%");
// console.log("MOBILE_DEVICE", "{{ COMPROMISED [**TARGET**] }}");
// console.log("");
// console.log(global);

// <script>
// import { templatesModal, editor } from "../store/store";
// import templates from "../templates/list";
// import { fabric } from "fabric";
// import { toDataURL } from "../utils/toDataUrl";
// import Modal from "./Modal.svelte";

// const renderTemplate = (temp) => {
//   $editor.clear();
//   let items = templates[temp];
//   const { backgroundColor, width, height, objects } = items;
//   $editor.setDimensions({ width, height });
//   $editor.set({ backgroundColor });
//   renderObjects(objects);
//   closeModal();
// };

// const renderObjects = (objs) => {
//   objs.map((ob) => {
//     if (ob.type === "text") {
//       renderTexts(ob);
//     }

//     if (ob.type === "image") {
//       renderImages(ob);
//     }

//     if (ob.type === "triangle") {
//       renderTriangle(ob);
//     }

//     if (ob.type === "circle") {
//       renderCircle(ob);
//     }
//   });
// };

// const renderTexts = (text) => {
//   const t = new fabric.Textbox(text.content, { ...text });
//   $editor.add(t);
// };

// const renderImages = (image) => {
//   toDataURL(image.url).then((dataUrl) => {
//     fabric.Image.fromURL(dataUrl, (img) => {
//       img.scaleToWidth(200);
//       img.set({ ...image });
//       $editor.add(img);
//     });
//   });
// };

// const renderTriangle = (triangle) => {
//   const t = new fabric.Triangle({
//     ...triangle,
//   });
//   $editor.add(t);
// };

// const renderCircle = (circle) => {
//   const c = new fabric.Circle({
//     ...circle,
//   });
//   $editor.add(c);
// };

// const closeModal = () => {
//   templatesModal.update(() => false);
// };

// const renderBlank = () => {
//   $editor.clear();
//   $editor.setDimensions({ width: 600, height: 500 });
//   $editor.set({ backgroundColor: "white" });
//   closeModal();
// };

// fetch("http://localhost:8400/api/templates")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// </script>

// <Modal visible="{$templatesModal}" close="{closeModal}" title="Templates">
//   <main>
//     <div class="template-list">
//       <div class="template" on:click="{renderBlank}">Blank</div>
//       <div class="template" on:click="{() => renderTemplate('pyramid')}">
//         Pyramid
//       </div>
//       <div class="template" on:click="{() => renderTemplate('birthday')}">
//         Birthday
//       </div>
//     </div>
//   </main>
// </Modal>

// <style>
// main {
//   width: 750px;
// }

// .template-list {
//   display: flex;
// }

// .template {
//   height: 100px;
//   width: 100px;
//   border: 1px solid #666;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
//   color: #fff;
// }
// </style>
