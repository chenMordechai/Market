

export function MarketerForm({ dataToAdd, onSetChangeData, onSubmitForm }) {
    return (
        <section className="marketer-form">
            <h1>Marketer Form</h1>
            <form onSubmit={onSubmitForm}>
                <input
                    onChange={onSetChangeData}
                    value={dataToAdd.firstName}
                    placeholder="First Name"
                    type="text"
                    id="firstName"
                    name="firstName" />
                <input
                    onChange={onSetChangeData}
                    value={dataToAdd.lastName}
                    placeholder="Full Name"
                    type="text"
                    id="lastName"
                    name="lastName" />
                <button>SUBMIT</button>
            </form>
        </section>
    )
}