document.getElementById('loginform').addEventListener('submit', function(event) {
    // Inicializamos la variable de validación
    let isValid = true;

    // Función para mostrar mensajes de error
    function showError(input, message) {
        let errorElement = input.nextElementSibling;
        if (!errorElement || !errorElement.classList.contains('error-message')) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            input.parentNode.insertBefore(errorElement, input.nextSibling);
        }
        errorElement.innerText = message;
        isValid = false;
         // Cambiar el color del texto a rojo
        errorElement.style.color = 'red';
        // Agregar relleno al mensaje de error
        errorElement.style.marginBottom = '15px';
    }

    // Función para quitar mensajes de error
    function removeError(input) {
        let errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.parentNode.removeChild(errorElement);
        }
    }

    // Validación del usuario
    let nameInput = document.getElementById('usuario');
    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Por favor, ingresa tu usuario');
    } else {
        removeError(nameInput);
    }

    // Validación del correo electrónico
    let emailInput = document.getElementById('email');
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        showError(emailInput, 'Por favor, ingresa un correo electrónico válido');
    } else {
        removeError(emailInput);
    }

    
       // Validación de la Contraseña
       let passwordInput = document.getElementById('password');
       if (passwordInput.value.length < 8) {
           showError(passwordInput, 'La contraseña debe tener al menos 8 caracteres');
       } else {
           removeError(passwordInput);
       }

    // Si hay errores de validación, detenemos el envío del formulario
    if (!isValid) {
        event.preventDefault();
    }
});

// Agregar un evento para quitar el mensaje de error cuando el usuario corrija el campo
document.getElementById('contactForm').addEventListener('input', function(event) {
    let input = event.target;
    if (input.classList.contains('error-message')) {
        removeError(input.previousElementSibling);
    }
});