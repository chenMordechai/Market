
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { httpService } from './http.service.js'

const BASE_URL = 'marketer/'

export const marketService = {
    // query,
    // getById,
    // remove,
    // getEmptyToy,
    // getDefaultFilter
    getDataToAdd,
    save,
}

function getDataToAdd() {
    return {
        firstName: '',
        lastName: '',
        email: '',
        website: '',
        linkedIn: '',
        experience: '',
        maxBudget: 0,
    }
}

function save(data) {
    // console.log('data:', data)
    if (data._id) {
        return httpService.put(BASE_URL, data)
    } else {
        return httpService.post(BASE_URL, data)
    }
}



function query(filterBy = {}) {
    return httpService.get(BASE_URL, filterBy)
    // .then(toys => {
    //     return toys.filter(toy =>
    //         regExp.test(toy.vendor) &&
    //         toy.price <= filterBy.maxPrice
    //     )
    // })
}

function getById(toyId) {
    return httpService.get(BASE_URL + toyId)
}

function remove(toyId) {
    // return Promise.reject('Oh no!')
    return httpService.delete(BASE_URL + toyId)
}


function getEmptyToy() {
    return {
        vendor: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
        speed: utilService.getRandomIntInclusive(50, 200),
    }
}


function getDefaultFilter() {
    return { txt: '', maxPrice: '' }
}

// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 6', price: 980}).then(x => console.log(x))


