import { useState } from 'react';
import '../css/form.css';
function Form() {
    const [formData, setFormData] = useState({});
    const [errorMsg, setErrorMsg] = useState();
    const saveData = (key, val) => {
        setFormData({ ...formData, [key]: val });
        console.log(`${key}, ${val}`);
        console.log(formData);
    };

    // This function checks the value while the user types
    // @return: bool
    const checkValid = (type, e) => {
        console.log(e);
        if (type === 'text') {
            // Use != on purpose
            if (e.target.value != false) {
                e.target.classList.remove('error');
                return true;
            }
        } else if (type === 'email') {
            if (
                // Regex from stackoverflow: https://stackoverflow.com/questions/41348459/regex-in-react-email-validation
                /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e.target.value)
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
            // Use != on purpose
            if (e.target.value != false) {
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
        console.log(data);
        if (!('name' in data)) {
            inCompleteSectionName[inCompleteSectionName.length] =
                'Please check the name';
        }
        if (!('email' in data)) {
            inCompleteSectionName[inCompleteSectionName.length] =
                'Please check the email';
        }
        if (!('tier' in data) || !data.tier.length) {
            inCompleteSectionName[inCompleteSectionName.length] =
                'Please check the tier';
        }
        if (!data.agreed) {
            inCompleteSectionName[inCompleteSectionName.length] =
                'Please agree our TOS';
        }
        setErrorMsg(
            inCompleteSectionName.map((entry) => {
                return <p className="form__errmsg">{entry}</p>;
            })
        );
    };
    return (
        <div className="form">
            <p className="form__errmsg-list">{errorMsg}</p>
            <form className="form__body" method="post" action="#">
                <label>
                    Name:{' '}
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
                    Email:{' '}
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
                    Tier:{' '}
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
                </label>
                <button
                    class="newsletter__submit"
                    type="button"
                    onClick={() => {
                        checkComplete(formData);
                        console.log(formData);
                    }}
                >
                    Submit
                </button>
                <p class="newsletter__status"></p>
            </form>
        </div>
    );
}
export default Form;
