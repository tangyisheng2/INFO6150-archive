const inputLabel = document.querySelector('.label__input');
console.dir(inputLabel);

const buttonAddLabel = document.querySelector('.add-form__submit');
buttonAddLabel.disabled = true;
console.dir(buttonAddLabel);

const outputLabel = document.querySelector('.info__report');
console.dir(outputLabel);

const valueCount = {};

inputLabel.addEventListener('input', () => {
    console.log(inputLabel.value);
    if (inputLabel.value) {
        buttonAddLabel.disabled = false;
    } else {
        buttonAddLabel.disabled = true;
    }
});

buttonAddLabel.addEventListener('click', (event) => {
    event.preventDefault();
    inputValue = inputLabel.value;
    if (!(inputValue in valueCount)) {
        valueCount[inputLabel.value] = 0;
    }
    valueCount[inputValue] += 1;
    console.log(`Add label: ${inputValue}`);
    outputLabel.innerText = `The count for ${inputValue} is ${
        valueCount[inputLabel.value]
    }`;
});
