import { writable } from "svelte/store";

export const editor = writable();
export const templatesModal = writable(false);
export const resizeModal = writable(false);
