import { selector } from "recoil";
import { assembledCarResultsAtom, selectedCarModelAtom } from "../atoms/global";

export const carResultsByModelSelector = selector({
    key: 'FilteredTodoList',
    get: ({ get }) => {
        const assembledCars = get(assembledCarResultsAtom);
        const selectedCarModel = get(selectedCarModelAtom)

        return assembledCars[selectedCarModel]
    },
});