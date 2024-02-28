import { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";

import { MarketerForm } from '../cmps/MarketerForm'
import { marketService } from '../services/market.service-axios'
import { UserMsg } from '../cmps/UserMsg'

export function Index() {
    const [marketers, setMarkerets] = useState(null)
    const [dataToAdd, setDataToAdd] = useState(marketService.getDataToAdd())
    const [msg, setMsg] = useState('')


    useEffect(() => {
        marketService.query()
            .then(setMarkerets)
    }, [])

    function onSetChangeData(ev) {
        let { name, value } = ev.target
        setDataToAdd(prev => ({ ...prev, [name]: value }))
    }

    function onSubmitForm(ev) {
        ev.preventDefault()
        if (!dataToAdd.email) {
            console.log('Fill out email field')
            showUserMsg('Fill out email field')
            return
        } else if (isAlreadySubmitted(dataToAdd.email)) {
            console.log('Already Submitted')
            showUserMsg('Already Submitted')
            return
        }
        marketService.save(dataToAdd)
            .then(newData => {
                console.log('Add marketer to databade:', newData)
                setMarkerets(prev=>[...prev,newData])
                onResetForm()
                showUserMsg('Thank you!')
            })
            .catch(err => {
                console.log(err, 'Failed to add marketer')
                showUserMsg('Failed')
            })

    }

    function isAlreadySubmitted(email) {
        return !marketers.every(marketer => marketer.email !== email)
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
            <NavLink to={'/Login'}> Go To Login Page</NavLink>
            {marketers && <h2>{marketers.length} marketers have joined so far!</h2>}
            <UserMsg msg={msg} />
            <MarketerForm dataToAdd={dataToAdd} onSetChangeData={onSetChangeData} onSubmitForm={onSubmitForm} onResetForm={onResetForm} />
        </section>
    )
}