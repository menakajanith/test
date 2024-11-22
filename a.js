// Dark/Light Mode Toggle
const themeSwitch = document.getElementById('theme-switch');
const themeIcon = document.getElementById('theme-icon');

// Event listener for theme switch toggle
themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    
    // Toggle between moon and sun icons
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.textContent = '🌙';  // Light mode icon (sun)
    } else {
        themeIcon.textContent = '🌝';  // Dark mode icon (moon)
    }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar ul');
const themeToggle = document.querySelector('.theme-toggle');

// Toggle the mobile menu and hide theme toggle
menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');

    // Check if the menu is active, then hide or show the theme toggle
    if (navbar.classList.contains('active')) {
        themeToggle.classList.add('hide');
    } else {
        themeToggle.classList.remove('hide');
    }
});




(function(){
    emailjs.init("yHNUS4uRcwxBAp7n8"); // Public Key
})();

// Form submission event listener
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Disable the submit button to prevent multiple submissions
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.disabled = true;
    submitBtn.value = "Sending...";

    // Send email using EmailJS
    emailjs.sendForm('service_kebqqpw', 'template_9r9cyup', this)
        .then(function() {
            // Show confirmation message and reset form
            document.getElementById('confirmation-message').style.display = 'block';
            document.getElementById('contact-form').reset();
            submitBtn.disabled = false;
            submitBtn.value = "Send Message";
        }, function(error) {
            // Show error and reset submit button
            alert('Failed to send message: ' + JSON.stringify(error));
            submitBtn.disabled = false;
            submitBtn.value = "Send Message";
        });
});
