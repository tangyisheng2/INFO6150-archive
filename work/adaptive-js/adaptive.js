const inputLabel = document.querySelector(".label__input");
console.dir(inputLabel)

const buttonAddLabel = document.querySelector(".add-form__submit");
buttonAddLabel.disabled = true;
console.dir(buttonAddLabel);

const outputLabel = document.querySelector('.info__report');
console.dir(outputLabel);

let inputValue = "";
let inputValueCount = 0;

inputLabel.addEventListener('input', () => {
    console.log(inputLabel.value);
    if (inputLabel.value) {
        buttonAddLabel.disabled = false;
    } else {
        buttonAddLabel.disabled = true;
    }
})

buttonAddLabel.addEventListener('click', (event) => {
    event.preventDefault();
    if (inputLabel.value === inputValue){
        inputValueCount += 1;
    } else {
        inputValue = inputLabel.value;
        inputValueCount = 1;
    }
    inputValue = inputLabel.value;
    console.log(`Add label: ${inputValue}`)
    outputLabel.innerText = `The count for ${inputValue} is ${inputValueCount}`
})