function selectUser(type) {
  document.getElementById('user-selection').classList.add('hidden');
  const authMessage = document.getElementById('auth-message');
  authMessage.textContent = type === 'patient'
    ? '¡Bienvenido, Paciente! Por favor, selecciona una opción:'
    : '¡Bienvenido, Doctor! Por favor, selecciona una opción:';
  document.getElementById('auth-options').classList.remove('hidden');
}

function showLogin() {
  document.getElementById('auth-options').classList.add('hidden');
  document.getElementById('login').classList.remove('hidden');
}

function showRegister() {
  document.getElementById('auth-options').classList.add('hidden');
  document.getElementById('register').classList.remove('hidden');
}

function showRecover() {
  document.getElementById('auth-options').classList.add('hidden');
  document.getElementById('recover').classList.remove('hidden');
}

function goBack() {
  document.querySelectorAll('section').forEach(section => section.classList.add('hidden'));
  document.getElementById('user-selection').classList.remove('hidden');
}

document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Inicio de sesión exitoso.');
});

document.getElementById('register-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Registro exitoso.');
});

document.getElementById('recover-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Se envió un correo para recuperar tu contraseña.');
});
