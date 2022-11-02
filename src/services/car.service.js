import { storageService } from './async-storage.service.js'

export const carService = {
    query,
    getById,
    save,
    remove,
    getEmptyCar,
    getEmptySubModel,
    saveMultiCars
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

async function saveMultiCars(cars) {
    storageService.postMany(key, cars)
}

function getEmptyCar() {
    return {
        manufacturer: "",
        model: "",
        year: "2022",
        category: "",
        price: 0,
        subModels: [getEmptySubModel()],
    }
}

function getEmptySubModel() {
    return {
        name: "תת דגם חדש",
        safety: 1,
        motorType: "",
        volume: 0,
        horsePower: 0,
        momentum: 0,
        isAutoGear: true,
        breakesSystem: "",
        breakesFront: "",
        breakesBack: "",
        suspensionsFront: "",
        suspensionsBack: "",
        height: 0,
        width: 0,
        trunk: 0,
        clearance: 0,
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
}

