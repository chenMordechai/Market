import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { marketService } from '../services/market.service-axios'
import { MarketerTable } from '../cmps/MarketerTable'


export function Login() {
    const [credentials, setCredentials] = useState({ userName: '', password: '' })
    const [showTable, setShowTable] = useState(false)
    const [marketers, setMarkerets] = useState(null)
    const [descending, setDescending] = useState(true)

    useEffect(() => {
        marketService.query()
            .then(setMarkerets)
    }, [])

    function onSetChangeData(ev) {
        let { name, value } = ev.target
        setCredentials(prev => ({ ...prev, [name]: value }))
    }

    function onSubmitForm(ev) {
        ev.preventDefault()
        setCredentials({ userName: '', password: '' })
        setShowTable(true)
    }

    function onSortBy(sortBy) {
        const diff = descending ? 1 : -1
        setMarkerets(prev => {
            prev.sort((m1, m2) => m1[sortBy].localeCompare(m2[sortBy]) * diff)
            return [...prev]
        })
        setDescending(prev => !prev)
    }

    return (
        <section className="login">
            <NavLink to={'/'}>Go To Form Page</NavLink>

            <h1>Login Page</h1>

            <form onSubmit={onSubmitForm} >
                <input
                    onChange={onSetChangeData}
                    value={credentials.userName}
                    placeholder="User Name"
                    type="text"
                    id="userName"
                    name="userName" />
                <input
                    onChange={onSetChangeData}
                    value={credentials.password}
                    placeholder="Password"
                    type="password"
                    id="password"
                    name="password" />
                <button>Submit</button>
            </form>


            {showTable && <MarketerTable marketers={marketers} onSortBy={onSortBy} />}
        </section>
    )
}