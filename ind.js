const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data (you can use FormData API or other methods)
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Basic form validation (add more validation as needed)
    if (fullName === '' || email === '' || message === '') {
        alert('Please fill in all required fields.');
        return;
    }

    // TODO: Handle form submission
    // - Send data to a server using AJAX or Fetch API
    // - Display a success message
    // - Reset the form
    console.log('Form submitted:', fullName, email, subject, message);
});