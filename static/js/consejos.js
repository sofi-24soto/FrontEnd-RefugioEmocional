document.addEventListener('DOMContentLoaded', function() {
    function obtenerConsejoSaludMental() {
        fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            let consejoEnIngles = data.slip.advice;
    
            // Aquí utilizamos la API de Google Translate
            traducirAespanol(consejoEnIngles, mostrarConsejoEspanol);
        })
        .catch(error => console.error('Error al obtener consejo:', error));
    }
    
    function traducirAespanol(texto, callback) {
        // Utilizamos la API de Google Translate
        let url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=${encodeURIComponent(texto)}`;
        
        fetch(url)
        .then(response => response.json())
        .then(data => {
            let consejoEspanol = data[0][0][0];
            callback(consejoEspanol);
        })
        .catch(error => console.error('Error al traducir:', error));
    }
    
    function mostrarConsejoEspanol(consejo) {
        let consejoElement = document.getElementById('consejo');
        consejoElement.textContent = consejo;
    }
    
    document.getElementById('nuevo-consejo').addEventListener('click', obtenerConsejoSaludMental);
});