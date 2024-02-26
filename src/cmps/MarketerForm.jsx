

export function MarketerForm({ dataToAdd, onSetChangeData, onSubmitForm, onResetForm }) {
    return (
        <section className="marketer-form">
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
                <input
                    onChange={onSetChangeData}
                    value={dataToAdd.email}
                    placeholder="Email"
                    type="email"
                    id="email"
                    name="email"
                    required
                />
                <input
                    onChange={onSetChangeData}
                    value={dataToAdd.website}
                    placeholder="Website address"
                    type="text"
                    id="website"
                    name="website" />
                <input
                    onChange={onSetChangeData}
                    value={dataToAdd.linkedIn}
                    placeholder="LinkedIn profile address"
                    type="text"
                    id="linkedIn"
                    name="linkedIn" />
                <label htmlFor="experience">How many years of experience do you
                    have with Facebook Marketing?</label>
                <select
                    onChange={onSetChangeData}
                    value={dataToAdd.experience}
                    id="experience"
                    name="experience">
                    <option value=""></option>
                    <option value="no experience">no experience</option>
                    <option value="0-1 years">0-1 years</option>
                    <option value="1-2 years">1-2 years</option>
                    <option value="2 or more years">2 or more years</option>
                </select>

                <label htmlFor="maxBudget">What was the
                    biggest campaign budget you have managed in a single month? between 1000$ and 500,000$</label>
                <input
                    onChange={onSetChangeData}
                    value={dataToAdd.maxBudget}
                    type="range"
                    id="maxBudget"
                    name="maxBudget"
                    min="1000"
                    max="500000"
                />
                <button>SUBMIT</button>
            </form>
            <button onClick={onResetForm}>Reset Form</button>

        </section>
    )
}