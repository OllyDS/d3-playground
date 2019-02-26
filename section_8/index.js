const form = document.querySelector('form')
const name = document.querySelector('#name')
const cost = document.querySelector('#cost')
const error = document.querySelector('#error')

form.addEventListener('submit', event => {
    event.preventDefault()
    
    if(name.value && cost.value) {
        const item = {
            name: name.value,
            cost: parseInt(cost.value)
        }
        // add this to the data.json file!!!!!
    } else {
        error.textContent = "Please enter valid inputs before submitting."
    }

})