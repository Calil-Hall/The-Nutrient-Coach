// Initialize EmailJS
(function() {
    emailjs.init("bsvy--sRrzKCy7ZTP"); // Replace with your public key
})();

// Form submission handling
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Basic validation example
        if (this.user_name.value.trim() == '' || this.user_email.value.trim() == '' || this.message.value.trim() == '') {
            alert('Please fill all the fields.');
            return;
        }

        emailjs.sendForm('service_fs33zu6', 'template_t3hik7e', this)
            .then(() => {
                console.log('SUCCESS!');
                alert('Email sent successfully!');
                this.reset(); // Reset form after successful submission
            }, (error) => {
                console.log('FAILED...', error);
                alert('Failed to send the email. Please try again.');
            });
    });
}
