import { writable } from "svelte/store";

export const editor = writable();
export const templatesModal = writable(false);
export const resizeModal = writable(false);
export const publishModal = writable(false);
export const previewModal = writable(false);
export const currentTemplate = writable({ id: null, name: null });
export const preview = writable();
export const templates = writable([]);
export const selectedObj = writable();
export const items = writable([]);
export const history = writable([]);
export const historyMods = writable(0);
export const colorWidget = writable(false);
export const skewWidget = writable(false);
