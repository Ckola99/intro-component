document.getElementById('submit-button').addEventListener('click', function (event) {
	event.preventDefault();

	let isValid = true;

	const firstName = document.getElementById('first-name');
	const lastName = document.getElementById('last-name');
	const email = document.getElementById('email');
	const password = document.getElementById('password');
	const passwordError = document.getElementById('password-error');
	const emailError = document.getElementById('email-error');
	const firstNameError = document.getElementById('first-name-error');
	const lastNameErrorText = document.getElementById('last-name-error');
	const emailField = document.getElementById('email-input-box');
	const passwordField = document.getElementById('password-input-box');
	const lastNameField = document.getElementById('lastName-input-box');
	const firstNameField = document.getElementById('firstName-input-box');


	// Validation for First Name
	if (!firstName.value) {
		isValid = false;
		firstName.nextElementSibling.style.display = 'block'; // Show error icon
		firstNameError.style.display = 'block'; // Show error message
		firstNameField.classList.add('errorBorder');
	} else {
		firstName.nextElementSibling.style.display = 'none'; // Hide error icon
		firstNameError.style.display = 'none'; // Hide error message
		firstNameField.classList.remove('errorBorder');
	}

	// Validation for Last Name
	if (!lastName.value) {
		isValid = false;
		lastName.nextElementSibling.style.display = 'block'; // Show error icon
		lastNameErrorText.style.display = 'block'; // Show error message
		lastNameField.classList.add('errorBorder');
	} else {
		lastName.nextElementSibling.style.display = 'none'; // Hide error icon
		lastNameErrorText.style.display = 'none'; // Hide error message
		lastNameField.classList.remove('errorBorder');
	}

	// Validation for Email
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!email.value || !emailPattern.test(email.value)) {
		isValid = false;
		email.nextElementSibling.style.display = 'block'; // Show error icon
		emailError.style.display = 'block'; // Show error message
		emailField.classList.add('errorBorder');
	} else {
		email.nextElementSibling.style.display = 'none'; // Hide error icon
		emailError.style.display = 'none'; // Hide error message
		emailField.classList.remove('errorBorder');
	}

	// Validation for Password
	if (!password.value) {
		isValid = false;
		password.nextElementSibling.style.display = 'block'; // Show error icon
		passwordError.style.display = 'block'; // Show error message
		passwordField.classList.add('errorBorder');
	} else {
		password.nextElementSibling.style.display = 'none'; // Hide error icon
		passwordError.style.display = 'none'; // Hide error message
		passwordField.classList.remove('errorBorder');
	}

	if (isValid) {

		// Clear the input fields
		firstName.value = '';
		lastName.value = '';
		email.value = '';
		password.value = '';

		alert('Form submitted successfully!');
	}
})
