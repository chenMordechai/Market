
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { httpService } from './http.service.js'

const BASE_URL = 'marketer/'

export const marketService = {
    getDataToAdd,
    save,
    query,
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
    if (data._id) {
        return httpService.put(BASE_URL, data)
    } else {
        return httpService.post(BASE_URL, data)
    }
}

function query() {
    return httpService.get(BASE_URL)
}




