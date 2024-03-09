
  
        document.addEventListener('DOMContentLoaded', function () {
            const form = document.querySelector('form');
    
            form.addEventListener('submit', function (event) {
                const username = document.getElementById('username').value.trim();
                const email = document.getElementById('email').value.trim();
                const password = document.getElementById('password').value.trim();
    
                if (username === '' || email === '' || password === '') {
                    alert('Please fill out all fields.');
                    event.preventDefault(); // Prevent form submission
                    return false;
                }
    
                if (!/[A-Z]/.test(password)) {
                    alert('Password must contain at least one capital letter.');
                    event.preventDefault(); // Prevent form submission
                    return false;
                }
    
                if (!/[!@#$%^&*]/.test(password)) {
                    alert('Password must contain at least one special character.');
                    event.preventDefault(); // Prevent form submission
                    return false;
                }
                window.location.href = 'welcome.html';
                // Additional validation can be added here if needed
    
                // Form is valid, continue with submission
                return true;
            });
        });
 