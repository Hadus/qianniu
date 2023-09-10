import { defineStore } from 'pinia';
import user from '@/assets/data/current/user.js';

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      ...user
    };
  },
  getters: {},
  actions: {
  }
});
