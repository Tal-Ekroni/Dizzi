import { storageService } from './async-storage.service.js'

export const carService = {
    query,
    getById,
    save,
    remove,
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
    if (car._id) {
        return storageService.put(car)
    } else {
        return storageService.post(car)
    }
}

