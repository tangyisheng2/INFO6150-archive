const submitButton = document.querySelector(".newsletter__submit");
const email = document.querySelector("#email");
const name_ = document.querySelector("#name");
const tier = document.querySelector("#tier");
const form = document.querySelector(".newsletter__form");

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    let valid = true;
    if (!email.validity.valid) {
        email.style.border = "2px solid red";
        valid = false;
    }
    if (!name_.validity.valid) {
        name_.style.border = "2px solid red";
        valid = false;
    }
    if (!tier.validity.valid) {
        tier.style.border = "2px solid red";
        valid = false;
    }

    if (valid) {
        for (let elem of [email, name_, tier]) {
            console.log(elem);
            elem.style.border = "";
        }
    }
    if (!("success" in submitButton.attributes)) {
        if (valid) {
            submitButton.toggleAttribute("success");
            submitButton.innerText = "Success";
        }
    }
});
