import { writable } from "svelte/store";

export const editor = writable();
export const templatesModal = writable(false);
export const resizeModal = writable(false);
export const publishModal = writable(false);
export const previewModal = writable(false);
export const currentTemplate = writable({ id: null, name: null });
export const preview = writable();
export const templates = writable([]);
