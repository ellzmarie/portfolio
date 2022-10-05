document.addEventListener("", function() {
    let firstName = document.querySelector('fname')
    let lastName = document.querySelector('lname')
    let email = document.querySelector('email')
    let comment = document.querySelector('subject')
})

function notEmpty(input) {
    if (input == null || typeof value == 'undefined')
    return false;

    return (value.length > 0)
}

console.log(notEmpty)

function email(emailInput) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase())
}

function formFilled(info, valFunc) {
    if (field == null) {
        return false
    }

    let fieldValid = valFunc(field.value)
    if (!fieldValid) {
        field.className = 'placeholderRed'
    } else {
        field.className = ''
    }
    return fieldValid
}

function checkIfValid () {
    
    let valid = true;

    valid &= fieldValid(fields.firstName, isNotEmpty);
    valid &= fieldValid(fields.lastName, isNotEmpty);

    return valid;
}

checkIfValid()
