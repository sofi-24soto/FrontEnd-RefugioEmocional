function validateForm() {
    var linkValue = document.getElementById("linkInput").value;
    if (linkValue.trim() === "") {
        alert("Por favor, introduce un enlace.");
        return false;
    }
}