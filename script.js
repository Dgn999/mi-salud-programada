function openPatientMenu() {
  document.getElementById('user-selection').classList.add('hidden');
  document.getElementById('patient-menu').classList.remove('hidden');
}

function openDoctorMenu() {
  document.getElementById('user-selection').classList.add('hidden');
  document.getElementById('doctor-menu').classList.remove('hidden');
}

function openSchedule() {
  document.getElementById('patient-menu').classList.add('hidden');
  document.getElementById('schedule').classList.remove('hidden');
}

function viewAppointments() {
  alert("Aquí puedes ver tus citas.");
}

function viewScheduledAppointments() {
  const appointmentList = document.getElementById('appointment-list');
  appointmentList.innerHTML = `
    <div class="appointment">
      <p><strong>Paciente:</strong> Juan Pérez</p>
      <p><strong>Fecha:</strong> 2023-12-05</p>
      <p><strong>Hora:</strong> 10:00 AM</p>
      <p><strong>Tipo:</strong> Presencial</p>
      <button class="btn" onclick="confirmAppointment()">Confirmar</button>
      <button class="btn" onclick="addNotes()">Agregar Notas</button>
    </div>
  `;
  document.getElementById('doctor-menu').classList.add('hidden');
  document.getElementById('appointments').classList.remove('hidden');
}

function confirmAppointment() {
  alert("Cita confirmada.");
}

function addNotes() {
  const notes = prompt("Escribe tus notas:");
  if (notes) alert("Notas guardadas.");
}
