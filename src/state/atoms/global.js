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
    minPrice:0,
    maxPrice:0
  },
});

export const assembledCarResultsAtom = atom({
  key: 'assembledCarResultsAtom',
  default: []
})

export const selectedCarModelAtom = atom({
  key: 'selectedCarModelAtom',
  default: null
})

