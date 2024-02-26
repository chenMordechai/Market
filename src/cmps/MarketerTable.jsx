

export function MarketerTable({ marketers }) {

    return (
        <section>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>

                {marketers.map(m => <tr key={m._id}>
                    <td>{m.firstName}</td>
                    <td>{m.lastName}</td>
                    <td>{m.email}</td>
                </tr>)}
            </table>
        </section>
    )
}