// Mostrar pantalla de selección de usuario
function showUserSelection() {
  document.getElementById('welcome-screen').classList.add('hidden');
  document.getElementById('user-selection').classList.remove('hidden');
}

// Mostrar pantalla según el tipo de usuario
function selectUser(userType) {
  alert(`Has seleccionado: ${userType}`);
  document.getElementById('user-selection').classList.add('hidden');
  document.getElementById('appointment-screen').classList.remove('hidden');
}

// Volver a la pantalla anterior
function goBack() {
  document.getElementById('appointment-screen').classList.add('hidden');
  document.getElementById('user-selection').classList.remove('hidden');
}
