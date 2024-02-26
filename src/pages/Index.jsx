import { useState, useEffect } from 'react'
import { MarketerForm } from '../cmps/MarketerForm'
import { marketService } from '../services/market.service-axios'
import { UserMsg } from '../cmps/UserMsg'

export function Index() {
    const [marketers, setMarkerets] = useState(null)
    const [dataToAdd, setDataToAdd] = useState(marketService.getDataToAdd())
    const [msg, setMsg] = useState('')


    useEffect(() => {

        marketService.query()
            .then(marketers => {
                console.log('marketers:', marketers)
            })

    }, [])

    function onSetChangeData(ev) {
        let { name, value } = ev.target
        setDataToAdd(prev => ({ ...prev, [name]: value }))
    }

    function onSubmitForm(ev) {
        ev.preventDefault()
        // if (!dataToAdd.email) console.log('Fill out email field')
        marketService.save(dataToAdd)
            .then(newData => {
                console.log('Add marketer to databade:', newData)
                onResetForm()
                showUserMsg('Thank you!')
            })
            .catch(err => {
                console.log(err, 'Failed to add marketer')
                showUserMsg('Failed')
            })

    }

    function showUserMsg(msg) {
        setMsg(msg)
        setTimeout(() => {
            setMsg('')
        }, 2000);

    }

    function onResetForm() {
        setDataToAdd(marketService.getDataToAdd())
    }

    return (
        <section className="index">
            <UserMsg msg={msg} />
            <MarketerForm dataToAdd={dataToAdd} onSetChangeData={onSetChangeData} onSubmitForm={onSubmitForm} onResetForm={onResetForm} />
        </section>
    )
}