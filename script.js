// Mostrar inicio de sesión basado en el tipo de usuario seleccionado
function showLogin(userType) {
    const loginSection = document.getElementById("login-section");
    const loginTitle = document.getElementById("login-title");
    const registerButton = document.getElementById("register-button");

    loginSection.style.display = "block";
    if (userType === "paciente") {
        loginTitle.textContent = "Inicio de Sesión - Paciente";
        registerButton.style.display = "block";
    } else if (userType === "doctor") {
        loginTitle.textContent = "Inicio de Sesión - Doctor";
        registerButton.style.display = "none";
    } else {
        loginTitle.textContent = "Inicio de Sesión - Otros";
        registerButton.style.display = "none";
    }
}

// Recuperar contraseña
function recoverPassword() {
    alert("Por favor, contacta con soporte para recuperar tu contraseña.");
}

// Registro de pacientes
function registerPatient() {
    alert("Por favor, completa el formulario de registro (próxima funcionalidad).");
}
