

export function UserMsg({ msg }) {
    console.log('msg:', msg)
    return (
        <section className="user-msg" style={{backgroundColor: msg.color}}>
            <h1>{msg.txt}</h1>
        </section>
    )
}