import { atom } from "nanostores";

export const $counter = atom<number>(0);
// Persistent client side nanostores do not support anything except strings, even in maps
// https://github.com/nanostores/persistent?tab=readme-ov-file
