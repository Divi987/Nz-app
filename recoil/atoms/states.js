import { atom } from "recoil";

export const userState = atom({
    key: "userState",
    default: {},
  });

export const userPassport = atom({
    key: "userPassport",
    default: ''
})