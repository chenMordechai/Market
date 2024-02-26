import { useState, useEffect } from 'react'
import { MarketerForm } from '../cmps/MarketerForm'
import { dataService } from '../services/data.service-local'

export function Index() {
    const [dataToAdd, setDataToAdd] = useState(dataService.getDataToAdd())
    console.log('dataToAdd:', dataToAdd)
    useEffect(() => {

    }, [])

    function onSetChangeData(ev) {
        let { name, value } = ev.target
        setDataToAdd(prev => ({ ...prev, [name]: value }))
    }

    function onSubmitForm(ev) {
        ev.preventDefault()
        dataService.save(dataToAdd)
            .then(newData => {
                console.log('newData:', newData)
            })
    }

    return (
        <section className="index">
            <h1>Index</h1>
            <MarketerForm dataToAdd={dataToAdd} onSetChangeData={onSetChangeData} />
        </section>
    )
}