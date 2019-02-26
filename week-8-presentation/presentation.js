function validateName() {
    let name = document.getElementById("lowercaseName");

    name.addEventListener("input", function (event) {
    if (name.validity.typeMismatch) {
        name.setCustomValidity("Please enter a lowercase name!");
    } else {
        name.setCustomValidity("");
    }
}