import { atom } from "recoil";

export const carFilterByAtom = atom({
  key: "carFilterByAtom",
  default: {
    gender: "",
    isFullPayment: true,
    carTypes: [],
    threeImportantFeaturs: [],
    importantAccessories: [],
    luggageTypes: [],
    gearboxType: "",
  },
});

