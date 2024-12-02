import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";
import { collection, addDoc, getDocs, updateDoc, doc } from "firebase/firestore";

document.getElementById("doctorButton").addEventListener("click", () => {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("login").style.display = "block";
});

document.getElementById("patientButton").addEventListener("click", () => {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("register").style.display = "block";
});

// Register Patient
document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await addDoc(collection(db, "requests"), {
      uid: userCredential.user.uid,
      name,
      email,
      status: "pending",
    });
    alert("Registro exitoso. Espera aprobación de un doctor.");
  } catch (error) {
    console.error("Error al registrar:", error);
  }
});

// Login
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    onAuthStateChanged(auth, async (user) => {
      if (user.email === "herederadegaleno@gmail.com") {
        loadDoctorDashboard();
      } else {
        loadPatientDashboard(user.uid);
      }
    });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
  }
});

async function loadDoctorDashboard() {
  const requests = await getDocs(collection(db, "requests"));
  const requestsDiv = document.getElementById("requests");
  requestsDiv.innerHTML = "<h3>Solicitudes Pendientes:</h3>";
  requests.forEach((doc) => {
    if (doc.data().status === "pending") {
      requestsDiv.innerHTML += `
        <p>${doc.data().name} (${doc.data().email})</p>
        <button onclick="approveRequest('${doc.id}')">Aprobar</button>
        <button onclick="rejectRequest('${doc.id}')">Rechazar</button>
      `;
    }
  });
  document.getElementById("login").style.display = "none";
  document.getElementById("doctorDashboard").style.display = "block";
}

async function loadPatientDashboard(uid) {
  const appointments = document.getElementById("appointments");
  appointments.innerHTML = "<p>No hay citas programadas aún.</p>";
  document.getElementById("login").style.display = "none";
  document.getElementById("patientDashboard").style.display = "block";
}

async function approveRequest(id) {
  const requestRef = doc(db, "requests", id);
  await updateDoc(requestRef, { status: "approved" });
  alert("Solicitud aprobada");
}

async function rejectRequest(id) {
  const requestRef = doc(db, "requests", id);
  await updateDoc(requestRef, { status: "rejected" });
  alert("Solicitud rechazada");
}
