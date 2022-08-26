import { defineStore } from "pinia";
import { store } from "../index";
type UserState = {
  userName: string;
};
export const useUserStore = defineStore("user", {
  state: (): UserState => {
    return {
      userName: "admin"
    };
  },
  actions: {
    modifyUserName(newName: string) {
      this.userName = newName;
    }
  }
});

export const useUserStoreWithoutSetup = () => useUserStore(store);
