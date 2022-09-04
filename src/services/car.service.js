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
    return storageService.remove(carId)
}
function save(car) {
    console.log(car);
    if (car._id) {
        return storageService.put(key, car)
    } else {
        return storageService.post(key, car)
    }
}

function getEmptyCar() {
    return {
        manufacturer: 'טויוטה',
        model: 'יאריס',
        type: 'מיני',
        price: 0,
        height: 0,
        trunk: 0,
        horsePower: 0,
        isGearAuto: false,
        safety: 1,
        isElectric: false,
        features: {
            isMagnezioumWheels: false,
            isPanoramicRoof: false,
            isMultimediaSystem: false,
            isCarPlay: false,
            isLeatherCovers: false,
            isDigitalClocks: false,
            isStartButton: false,
            isElectricHandBreaks: false
        }

    }
}

