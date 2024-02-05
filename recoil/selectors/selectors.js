import { selector } from "recoil";
import { userPassport, userState } from "../atoms/states";

export const userStateSelector = selector({
    key: "userStateSelector",
    get: ({ get }) => get(userState),
  });

  export const userPassportStateSelector = selector({
    key: "userPassportStateSelector",
    get: ({ get }) => get(userPassport),
  });