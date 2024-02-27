document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('inputForm');
    const inputField = document.getElementById('textInput');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const inputValue = inputField.value;
        alert('You entered: ' + inputValue);
    });
});
