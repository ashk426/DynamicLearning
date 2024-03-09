
    // Wait for the document to be fully loaded
    document.addEventListener("DOMContentLoaded", function () {
        // Get the form element
        var form = document.querySelector('#exampleModal form');

        // Add event listener for form submission
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent default form submission

            // Collect form data
            var formData = {
                firstName: document.getElementById('f_name').value,
                lastName: document.getElementById('l_name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                degree: document.getElementById('degree').value,
                subject: document.getElementById('subject').value,
                address: document.getElementById('address').value,
                acknowledge: document.getElementById('acknowledge').checked
            };

            // Send AJAX request to the server
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'submit_form.php', true);
            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.onload = function () {
                if (xhr.status === 200) {
                    // Request was successful
                    console.log('Form data submitted successfully');
                    // Optionally, you can redirect the user to another page after successful submission
                    // window.location.href = 'success.html';
                } else {
                    // Request failed
                    console.error('Form submission failed');
                }
            };

            // Convert formData to JSON and send it in the request body
            xhr.send(JSON.stringify(formData));
        });
    });

