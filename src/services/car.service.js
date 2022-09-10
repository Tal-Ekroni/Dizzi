import { storageService } from './async-storage.service.js'

export const carService = {
    query,
    getById,
    save,
    remove,
    getEmptyCar
}

const key = 'cars'


function query() {
    return storageService.query(key)
}
function getById(carId) {
    return storageService.get(key, carId)
}
function remove(carId) {
    return storageService.remove(key, carId)
}
function save(car) {
    if (car._id) {
        return storageService.put(key, car)
    } else {
        return storageService.post(key, car)
    }
}

function getEmptyCar() {
    return {
        _id: "test",
        manufacturer: "",
        model: "",
        year: "2022",
        category: "",
        price: 0,
        subModels: [
            {
                name: "",
                safety: 7,
                motor: {
                    type: "",
                    volume: 0,
                    horsePower: 0,
                    momentum: 0,
                    isAutoGear: false,
                },
                breaks: {
                    system: "",
                    front: "",
                    back: "",
                },
                suspensions: {
                    fron: "",
                    back: "",
                },
                measurments: {
                    height: 0,
                    width: 0,
                    trunk: 0,
                    clearance: 0,
                },
                features: {
                    isMagnezioumWheels: false,
                    isPanoramicRoof: false,
                    isMultimediaSystem: false,
                    isCarPlay: false,
                    isLeatherCovers: false,
                    isDigitalClocks: false,
                    isStartButton: false,
                    isElectricHandBreaks: false,
                },
            }
        ],
    }
}

