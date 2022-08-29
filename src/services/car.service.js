
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
window.cs = carService;


function query() {
    return storageService.query(STORAGE_KEY)
}
function getById(carId) {
    return storageService.get(STORAGE_KEY, carId)
}
function remove(carId) {
    // return new Promise((resolve, reject) => {
    //     setTimeout(reject, 2000)
    // })
    // return Promise.reject('Not now!');
    return storageService.remove(STORAGE_KEY, carId)
}
function save(car) {
    if (car._id) {
        return storageService.put(STORAGE_KEY, car)
    } else {
        car.owner = userService.getLoggedinUser()
        return storageService.post(STORAGE_KEY, car)
    }
}

function getEmptyCar() {
    return {
        vendor: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}


