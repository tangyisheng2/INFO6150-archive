import { useState } from 'react';
import '../css/form.css';
function Form({ setCurrentUser }) {
    const [formData, setFormData] = useState({});
    const [errorMsg, setErrorMsg] = useState('');
    const saveData = (key, val) => {
        setFormData({ ...formData, [key]: val });
    };

    // This function checks the value while the user types
    // @return: bool
    const checkValid = (type, e) => {
        if (type === 'text') {
            if (e.target.value.length > 0) {
                e.target.classList.remove('error');
                return true;
            }
        } else if (type === 'email') {
            if (
                // Regex from stackoverflow: https://stackoverflow.com/questions/41348459/regex-in-react-email-validation
                /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e.target.value)
            ) {
                e.target.classList.remove('error');
                return true;
            }
        } else if (type === 'checkbox') {
            if (e.target.checked) {
                e.target.classList.remove('error');
                return true;
            }
        } else if (type === 'select') {
            if (e.target.value.length > 0) {
                e.target.classList.remove('error');
                return true;
            }
        }
        // Un-recoginized or not valid data
        e.target.classList.add('error');
        return false;
    };

    // This function checks the completeness of the form and generates error message
    // @return: bool
    const checkComplete = (data) => {
        const inCompleteSectionName = [];
        if (!(data['name'] !== undefined && data['name'].length > 0)) {
            inCompleteSectionName[inCompleteSectionName.length] =
                'Please check the name';
        }
        if (!(data['email'] !== undefined && data['email'].length > 0)) {
            inCompleteSectionName[inCompleteSectionName.length] =
                'Please check the email';
        }
        if (!(data['tier'] !== undefined && data['email'].length > 0)) {
            inCompleteSectionName[inCompleteSectionName.length] =
                'Please check the tier';
        }
        if (!data.agreed) {
            inCompleteSectionName[inCompleteSectionName.length] =
                'Please agree our TOS';
        }
        setErrorMsg(
            inCompleteSectionName.map((entry) => {
                return (
                    <p key={entry} className="form__errmsg">
                        {entry}
                    </p>
                );
            })
        );
        return inCompleteSectionName.length === 0;
    };
    return (
        <main id="main" className="form__main">
            <div className="form__errmsg-list">{errorMsg}</div>
            <form className="form__body" method="post" action="#">
                <label>
                    Name:<span className="required__mark">*</span>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Lelouch vi Britannia"
                        onChange={(e) => {
                            if (checkValid('text', e)) {
                                saveData('name', e.target.value);
                            }
                        }}
                        required
                    />
                </label>
                <label>
                    Email:<span className="required__mark">*</span>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@email.com"
                        onChange={(e) => {
                            if (checkValid('email', e)) {
                                saveData('email', e.target.value);
                            }
                        }}
                        required
                    />
                </label>
                <label>
                    Tier:<span className="required__mark">*</span>
                    <select
                        name="tier"
                        id="tier"
                        onChange={(e) => {
                            if (checkValid('select', e)) {
                                saveData('tier', e.target.value);
                            } else {
                                e.target.style = {};
                            }
                        }}
                        required
                    >
                        <option value="">Please Select</option>
                        <option value="1">Weekly</option>
                        <option value="2">Monthly</option>
                        <option value="3">Yearly</option>
                    </select>
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="agreed"
                        id="agree_tos"
                        onChange={(e) => {
                            if (checkValid('checkbox', e)) {
                                saveData('agreed', e.target.checked);
                            }
                        }}
                    />
                    <span>I agree the TOS.</span>
                    <span className="required__mark">*</span>
                </label>
                <button
                    className="newsletter__submit"
                    type="button"
                    onClick={() => {
                        if (checkComplete(formData)) {
                            // todo Complete the send request logic
                            setCurrentUser(formData);
                        }
                    }}
                >
                    Submit
                </button>
                <p className="newsletter__status"></p>
            </form>
        </main>
    );
}
export default Form;
