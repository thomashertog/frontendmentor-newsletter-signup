document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('email-input');
    if(emailInput.validity.valid){
        document.querySelector('.error-message').classList.add('sr-only');
        document.querySelector('.wrapper-signup-form').classList.add('hidden');
        document.querySelector('.wrapper-success-message').classList.remove('hidden');
    }else{
        document.querySelector('.error-message').classList.remove('sr-only');
    }
});