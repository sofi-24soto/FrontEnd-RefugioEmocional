document.getElementById('loginform').addEventListener('submit', function(event) {
        // Inicializamos la variable de validación
        let isValid = true;
    
        // Función para mostrar mensajes de error
        function showError(input, message) {
        let errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.innerText = message;
        input.parentNode.insertBefore(errorElement, input.nextSibling);
        isValid = false;
        errorElement.style.color = 'red'; // Cambiar el color del texto a rojo
        errorElement.style.marginBottom = '15px'; // Agregar relleno al mensaje de error
    }
    
         // Función para quitar mensajes de error
    function removeError(input) {
        let errorElement = input.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.parentNode.removeChild(errorElement);
        }
    }

        // Validación del Usuario
    let nameInput = document.getElementById('usuario');
    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Por favor, ingresa tu Usuario');
    } else {
        removeError(nameInput);
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
    