// Handles form submission and toggles between sign-up and success message

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.wrapper-signup-form form');
  const emailInput = document.getElementById('email-input');
  const successWrapper = document.querySelector('.wrapper-success-message');
  const signupWrapper = document.querySelector('.wrapper-signup-form');
  const dismissBtn = successWrapper.querySelector('button');
  const successEmail = successWrapper.querySelector('strong');

  // Hide success message by default
  successWrapper.style.display = 'none';

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = emailInput.value.trim();

    // Basic email validation
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      emailInput.style.borderColor = 'hsl(4, 100%, 67%)';
      emailInput.focus();
      return;
    }

    // Set email in success message
    successEmail.textContent = email;

    // Show success, hide form
    signupWrapper.style.display = 'none';
    successWrapper.style.display = 'block';
    document.body.classList.add('success');
  });

  dismissBtn.addEventListener('click', function () {
    // Reset form and UI
    form.reset();
    emailInput.style.borderColor = '';
    signupWrapper.style.display = 'block';
    successWrapper.style.display = 'none';
    document.body.classList.remove('success');
  });
});