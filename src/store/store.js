import { writable } from "svelte/store";

export const editor = writable();
export const templatesModal = writable(false);
export const publishModal = writable(false);
export const currentTemplate = writable({ id: null, name: null });
export const preview = writable();
export const templates = writable([]);
export const selectedObj = writable();
export const items = writable([]);
export const history = writable([]);
export const historyMods = writable(0);
export const colorWidget = writable(false);
export const skewWidget = writable(false);
export const resizeWidget = writable(false);
export const textWidget = writable(false);
export const freeDrawingMode = writable(false);
export const unfinishedModal = writable(false);
export const filterWidget = writable(false);
export const shadowStrokeWidget = writable(false);
export const fillMode = writable("fill");

// fills and stroke
export const shadowColor = writable("#000");
export const strokeColor = writable("#000");
export const canvasBg = writable("#fff");
export const freeDrawingColor = writable("#000");
