import { storageService } from './async-storage.service.js'

export const carService = {
    query,
    getById,
    save,
    remove,
}


function query() {
    return storageService.query()
}
function getById(carId) {
    return storageService.get(carId)
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

