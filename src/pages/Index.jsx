import { useState, useEffect } from 'react'
import { MarketerForm } from '../cmps/MarketerForm'
import { marketService } from '../services/market.service-axios'

export function Index() {
    const [dataToAdd, setDataToAdd] = useState(marketService.getDataToAdd())
    console.log('dataToAdd:', dataToAdd)
    useEffect(() => {

    }, [])

    function onSetChangeData(ev) {
        let { name, value } = ev.target
        setDataToAdd(prev => ({ ...prev, [name]: value }))
    }

    function onSubmitForm(ev) {
        console.log('onSubmitForm')
        ev.preventDefault()
        marketService.save(dataToAdd)
            .then(newData => {
                console.log('newData:', newData)
            })
    }

    return (
        <section className="index">
            <h1>Index</h1>
            <MarketerForm dataToAdd={dataToAdd} onSetChangeData={onSetChangeData} onSubmitForm={onSubmitForm} />
        </section>
    )
}