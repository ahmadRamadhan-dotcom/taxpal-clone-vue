import { defineStore } from "pinia";

export const useHeaderStore = defineStore("main", {
  state: () => ({
    showNav: false,
  }),
});
