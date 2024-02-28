// Initialize EmailJS
(function() {
  emailjs.init("your-emailjs-userid"); // Replace 'your-emailjs-userid' with your actual EmailJS user ID
})();

// Form submission handling
window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();

      // Here you can add additional validation if needed

      emailjs.sendForm('your_service_id', 'your_template_id', this)
          .then(function(response) {
              console.log('SUCCESS!', response.status, response.text);
              alert('Your message was sent successfully!');
              // Optionally reset the form here
              // document.getElementById('contact-form').reset();
          }, function(error) {
              console.log('FAILED...', error);
              alert('Failed to send the message, please try again.');
          });
  });
}
