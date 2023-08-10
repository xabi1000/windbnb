import { writable } from "svelte/store";

function createMenuStore() {
  const { subscribe, update } = writable(false);

  return {
    subscribe,
    toggleMenu: () => update((value) => !value),
  };
}

export const menuStore = createMenuStore();
