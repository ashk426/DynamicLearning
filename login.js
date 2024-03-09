$(document).ready(function () {
    // Function to handle login process
    function loginUser() {
        // Get form data
        var formData = {
            email: $('#email').val(),
            password: $('#password').val()
        };

        // Send AJAX request
        $.ajax({
            type: 'POST',
            url: 'login.php', // Replace 'login.php' with your server-side script URL
            data: formData,
            success: function (response) {
                // Check the response from the server
                if (response.trim() === 'success') {
                    // Redirect to welcome page upon successful login
                    window.location.href = 'welcome.html';
                } else {
                    // Handle login error
                    alert('Login failed. Please check your credentials.');
                }
            },
            error: function () {
                // Handle AJAX errors, if any
                alert('Error occurred. Please try again.');
            }
        });
    }

    // Handle form submission
    $('#loginForm').submit(function (e) {
        e.preventDefault(); // Prevent default form submission
        loginUser(); // Call loginUser function
    });

    // Handle button click
    $('#loginButton').click(function (e) {
        e.preventDefault(); // Prevent default button behavior
        loginUser(); // Call loginUser function
    });
});
