
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'car'

export const carService = {
    query,
    getById,
    save,
    remove,
    getEmptyCar,
    subscribe

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

