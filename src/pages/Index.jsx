import { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";

import { MarketerForm } from '../cmps/MarketerForm'
import { marketService } from '../services/market.service-axios'
import { UserMsg } from '../cmps/UserMsg'

export function Index() {
    const [marketers, setMarkerets] = useState(null)
    const [dataToAdd, setDataToAdd] = useState(marketService.getDataToAdd())
    const [msg, setMsg] = useState(null)


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
            showUserMsg('Fill out email field','red')
            return
        } else if (isAlreadySubmitted(dataToAdd.email)) {
            showUserMsg('Already Submitted','red')
            return
        }
        marketService.save(dataToAdd)
            .then(newData => {
                setMarkerets(prev=>[...prev,newData])
                onResetForm()
                showUserMsg('Thank you!','green')
            })
            .catch(err => {
                showUserMsg('Failed','red')
            })

    }

    function isAlreadySubmitted(email) {
        return !marketers.every(marketer => marketer.email !== email)
    }

    function showUserMsg(txt,color) {
        setMsg({txt,color})
        setTimeout(() => {
            setMsg(null)
        }, 2000);

    }

    function onResetForm() {
        setDataToAdd(marketService.getDataToAdd())
    }

    return (
        <section className="index">
            <NavLink to={'/Login'}> Go To Login Page</NavLink>
            {marketers && <h2>{marketers.length} marketers have joined so far!</h2>}
           {msg && <UserMsg msg={msg} />}
            <MarketerForm dataToAdd={dataToAdd} onSetChangeData={onSetChangeData} onSubmitForm={onSubmitForm} onResetForm={onResetForm} />
        </section>
    )
}