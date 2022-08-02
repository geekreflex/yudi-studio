import { writable } from "svelte/store";

export const editor = writable();
export const create = writable(false);
export const width = writable(800);
export const height = writable(500);
export const isCreated = writable(true);

export const leftPane = writable(null);
export const rightPane = writable(null);
export const gutter = writable(null);
