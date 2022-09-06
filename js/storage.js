// localStorage.getItem('name')
document.getElementById('btn-add-name').addEventListener('click', function(){
    const nameField = document.getElementById('name-field')
    const nameFieldValue = nameField.value
    // console.log(nameFieldValue)

    localStorage.setItem('name',nameFieldValue);
})



document.getElementById('btn-add-age').addEventListener('click', function(){
    const ageField = document.getElementById('age-field')
    const ageFieldValue = ageField.value
    console.log(ageFieldValue)

    localStorage.setItem('age',ageFieldValue);
})

document.getElementById('btn-remove-name').addEventListener('click', function(){
    localStorage.removeItem('name')
})


document.getElementById('btn-remove-age').addEventListener('click', function(){
    localStorage.removeItem('age')
})


document.getElementById('btn-clear-all').addEventListener('click', function(){
    localStorage.clear()
})