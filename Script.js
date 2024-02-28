document.addEventListener('DOMContentLoaded', () => {
  emailjs.init('h4h8uvx0jplPQd9zP'); // Replace with your actual public key

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const submitBtn = this.querySelector('button[type="submit"]');
    submitBtn.textContent = 'Sending...'; // Change the button text to indicate sending

    emailjs.sendForm('service_qtl8q9r', 'template_tgpg4x9', this)
      .then(() => {
        alert('Message sent successfully!');
        submitBtn.textContent = 'Send Message'; // Reset button text
        this.reset(); // Clear the form fields
      }, (error) => {
        alert('Failed to send the message. Please try again.');
        console.error('Failed to send message:', error);
        submitBtn.textContent = 'Send Message'; // Reset button text
      });
  });
});
