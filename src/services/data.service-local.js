
import { storageService } from './async-storage.service.js'

const STORAGE_KEY = 'carDB'

export const dataService = {
    getDataToAdd,
    save
}

function getDataToAdd() {
    return {
        firstName: '',
        lastName: '',
    }
}

function save(data) {
    if (data._id) {
        return storageService.put(STORAGE_KEY, data)
            .then((savedData) => {
                return savedData
            })
    } else {
        return storageService.post(STORAGE_KEY, data)
            .then((savedData) => {
                return savedData
            })
    }
}

