const emails = [
    'muhazzib@gmail.com',
    'ali@gmail.com',
    'admin@gmail.com',
    'user@example.com',
    'guest@gmail.com'
];

const form = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorText = document.getElementById('error-message');
const loginScreen = document.getElementById('login-section');
const dashboardScreen = document.getElementById('dashboard-section');
const logoutButton = document.getElementById('logout-button');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailValue = emailInput.value.trim().toLowerCase();
    const passwordValue = passwordInput.value.trim();

    if (!emailValue || !passwordValue) {
        errorText.textContent = 'Please enter both email and password.';
        return;
    }

    if (emails.indexOf(emailValue) !== -1) {
        loginScreen.classList.add('hidden');
        dashboardScreen.classList.remove('hidden');
        errorText.textContent = '';
    } else {
        errorText.textContent = 'User not found! Enter correct email';
    }
});

logoutButton.addEventListener('click', function () {
    emailInput.value = '';
    passwordInput.value = '';
    errorText.textContent = '';
    dashboardScreen.classList.add('hidden');
    loginScreen.classList.remove('hidden');
    emailInput.focus();
});
