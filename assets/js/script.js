const billInput = document.querySelector('.bill')
const peopleInput = document.querySelector('.people')
const tipInput = document.querySelector('.tip')

const resultPeople = document.querySelector('.calculator-result--value__people')
const resultTotal = document.querySelector('.calculator-result--value__total')

const calculateBtn = document.querySelector('.calculate-btn')
const resetBtn = document.querySelector('.reset-btn')

const form = document.querySelector('form')


const calculateTip = (event) => {
    event.preventDefault();

    if(billInput.value == '' || peopleInput.value == '' || tipInput.value == '') {
        // alert('Insira um valor.')
        showAlert()
    } else {

        const tipAmount = (tipInput.value / 100) + 1;
        const totalAmount = tipAmount * billInput.value
        const amountPerPerson = totalAmount / peopleInput.value
    
        const tipValue = totalAmount - billInput.value
        const tipPerPerson = tipValue / peopleInput.value
    
        resultPeople.innerHTML = '$' + tipPerPerson.toFixed(2)
        resultTotal.innerHTML = '$' + amountPerPerson.toFixed(2)
    }

}

form.addEventListener('submit', calculateTip)

const showAlert = () => {
    const div = document.createElement('div')
    div.className = `alert`
    div.appendChild(document.createTextNode('Insira um valor.'))
    const container = document.querySelector('.calculator-inputs--element')
    const form = document.querySelector('form')
    form.insertBefore(div, container)

    setTimeout( () => document.querySelector('.alert').remove(), 3000)
}

const resetValues = () => {
    billInput.value = ''
    peopleInput.value = ''
    resultPeople.innerHTML = '$0.00'
    resultTotal.innerHTML = '$0.00'
    tipInput.value = ''
}


resetBtn.addEventListener('click', resetValues)