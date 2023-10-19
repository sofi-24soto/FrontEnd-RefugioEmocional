document.getElementById('sectionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento por defecto de enviar el formulario

    // obtengo  el valor seleccionado
     var selectedSection = document.getElementById('secciones').value;

    // Si se ha seleccionado una sección  desplaza a ella
    if (selectedSection) {
        document.querySelector(selectedSection).scrollIntoView({ behavior: 'smooth' });
    }
});