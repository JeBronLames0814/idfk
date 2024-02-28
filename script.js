document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('inputForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const inputField = document.getElementById('textInput');
        const inputValue = inputField.value;

        // Create a new FormData object
        const formData = new FormData();
        formData.append('inputData', inputValue);

        // Send a POST request to the server
        fetch('/submit', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to submit form');
            }
        })
        .then(data => {
            alert(data.message); // Display success message
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while submitting the form');
        });
    });
});
