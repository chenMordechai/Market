import { useState, useEffect } from 'react'
import { MarketerForm } from '../cmps/MarketerForm'
import { marketService } from '../services/market.service-axios'

export function Index() {
    const [dataToAdd, setDataToAdd] = useState(marketService.getDataToAdd())
    useEffect(() => {

    }, [])

    function onSetChangeData(ev) {
        let { name, value } = ev.target
        setDataToAdd(prev => ({ ...prev, [name]: value }))
    }

    function onSubmitForm(ev) {
        console.log('onSubmitForm')
        ev.preventDefault()
        // if (!dataToAdd.email) console.log('Fill out email field')
        marketService.save(dataToAdd)
            .then(newData => {
                console.log('Add marketer to databade:', newData)
            })
            .catch(err => {
                console.log(err, 'Failed to add marketer')
            })

    }

    function onResetForm() {
        setDataToAdd(marketService.getDataToAdd())
    }

    return (
        <section className="index">
            <MarketerForm dataToAdd={dataToAdd} onSetChangeData={onSetChangeData} onSubmitForm={onSubmitForm} onResetForm={onResetForm} />

        </section>
    )
}