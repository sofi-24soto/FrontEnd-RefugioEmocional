document.getElementById('contactForm').addEventListener('submit', function(event) {
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

    // Validación del nombre
    let nameInput = document.getElementById('name');
    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Por favor, ingresa tu nombre');
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

    // Validación del teléfono
    let phoneInput = document.getElementById('phone');
    let phonePattern = /^\d{12}$/; // Asumiendo que el teléfono es de 10 dígitos
    if (!phonePattern.test(phoneInput.value.trim())) {
        showError(phoneInput, 'Por favor, ingresa un número de teléfono válido');
    } else {
        removeError(phoneInput);
    }

    // Validación del mensaje
    let messageInput = document.getElementById('message');
    if (messageInput.value.trim() === '') {
        showError(messageInput, 'Por favor, ingresa un mensaje');
    } else {
        removeError(messageInput);
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