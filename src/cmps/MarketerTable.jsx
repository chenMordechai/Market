import { utilService } from '../services/util.service'

export function MarketerTable({ marketers, onSortBy }) {

    return (
        <section className="marketer-table">
            <table>
                <thead>
                    <tr>
                        <th onClick={() => onSortBy('firstName')}>First Name</th>
                        <th onClick={() => onSortBy('lastName')}>Last Name</th>
                        <th onClick={() => onSortBy('email')}>Email</th>
                        <th onClick={() => onSortBy('date')}>Date</th>
                    </tr>
                </thead>

                <tbody>
                    {marketers.map(m => <tr key={m._id}>
                        <td>{m.firstName}</td>
                        <td>{m.lastName}</td>
                        <td>{m.email}</td>
                        <td>{utilService.getDate(m.date)}</td>
                    </tr>)}
                </tbody>
            </table>
        </section>
    )
}