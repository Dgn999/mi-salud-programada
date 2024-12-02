// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Botones de selección
    const doctorButton = document.getElementById("doctor-button");
    const patientButton = document.getElementById("patient-button");

    // Agregar eventos a los botones
    doctorButton.addEventListener("click", () => showLogin("doctor"));
    patientButton.addEventListener("click", () => showLogin("paciente"));
});

// Mostrar la sección de inicio de sesión
function showLogin(userType) {
    const loginSection = document.getElementById("login-section");
    const loginTitle = document.getElementById("login-title");
    const registerButton = document.getElementById("register-button");

    loginSection.style.display = "block"; // Mostrar la sección de inicio de sesión
    document.getElementById("user-selection").style.display = "none"; // Ocultar selección de usuario

    if (userType === "paciente") {
        loginTitle.textContent = "Inicio de Sesión - Paciente";
        registerButton.style.display = "block"; // Mostrar botón de registro
    } else if (userType === "doctor") {
        loginTitle.textContent = "Inicio de Sesión - Doctor";
        registerButton.style.display = "none"; // Ocultar botón de registro
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
