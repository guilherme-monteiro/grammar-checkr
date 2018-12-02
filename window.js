const checkButton = document.getElementById('check-button')

const grammar = () => {
    console.log(document.getElementById('text-input').value)
}
checkButton.addEventListener('click', grammar)