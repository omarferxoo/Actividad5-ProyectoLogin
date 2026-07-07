document.addEventListener("DOMContentLoaded", () => {
  iniciarLogin();
  iniciarSistema();
});

function iniciarLogin() {
  const form = document.getElementById("loginForm");
  if (!form) return;

  const correo = document.getElementById("correoLogin");
  const password = document.getElementById("passwordLogin");
  const alerta = document.getElementById("loginAlert");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const correoValido = validarCorreo(correo.value);
    const passwordValido = validarPassword(password.value);

    marcarCampo(correo, correoValido);
    marcarCampo(password, passwordValido);

    if (!correoValido || !passwordValido) {
      mostrarAlerta(alerta, "Revisa el correo y la contrasena antes de entrar.");
      return;
    }

    localStorage.setItem("usuarioActivo", correo.value.trim());
    window.location.href = "index.html";
  });
}

function iniciarSistema() {
  const topbarUsuario = document.getElementById("usuarioDropdown");
  if (!topbarUsuario) return;

  const usuarioActivo = localStorage.getItem("usuarioActivo");

  if (!usuarioActivo) {
    window.location.href = "login.html";
    return;
  }

  topbarUsuario.textContent = usuarioActivo;
  configurarSidebar();
  configurarLogout();
  configurarFormularioUsuario();
  configurarFormularioAlumno();
}

function configurarSidebar() {
  const boton = document.getElementById("toggleSidebar");
  const sidebar = document.getElementById("sidebar");

  boton.addEventListener("click", () => {
    sidebar.classList.toggle("is-collapsed");
  });
}

function configurarLogout() {
  const botonSalir = document.getElementById("logoutButton");

  botonSalir.addEventListener("click", () => {
    localStorage.removeItem("usuarioActivo");
    window.location.href = "login.html";
  });
}

function configurarFormularioUsuario() {
  const form = document.getElementById("usuarioForm");
  const mensaje = document.getElementById("usuarioMensaje");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombreUsuario");
    const correo = document.getElementById("correoUsuario");
    const password = document.getElementById("passwordUsuario");

    const nombreValido = nombre.value.trim().length >= 3;
    const correoValido = validarCorreo(correo.value);
    const passwordValido = validarPassword(password.value);

    marcarCampo(nombre, nombreValido);
    marcarCampo(correo, correoValido);
    marcarCampo(password, passwordValido);

    if (!nombreValido || !correoValido || !passwordValido) {
      mensaje.textContent = "No se pudo guardar. Revisa los campos marcados.";
      mensaje.className = "form-message text-danger";
      return;
    }

    mensaje.textContent = "Usuario capturado correctamente.";
    mensaje.className = "form-message text-success";
    form.reset();
    limpiarValidacion([nombre, correo, password]);
  });
}

function configurarFormularioAlumno() {
  const form = document.getElementById("alumnoForm");
  const modalElemento = document.getElementById("edadModal");
  const modalMensaje = document.getElementById("edadModalMensaje");
  const modal = new bootstrap.Modal(modalElemento);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombreAlumno");
    const numeroControl = document.getElementById("numeroControl");
    const edad = document.getElementById("edadAlumno");

    const nombreValido = nombre.value.trim().length >= 3;
    const controlValido = validarNumeroControl(numeroControl.value);
    const edadValida = Number(edad.value) > 0 && Number(edad.value) <= 120;

    marcarCampo(nombre, nombreValido);
    marcarCampo(numeroControl, controlValido);
    marcarCampo(edad, edadValida);

    if (!nombreValido || !controlValido || !edadValida) return;

    const resultado = esMayorDeEdad(edad.value) ? "es mayor de edad" : "no es mayor de edad";
    modalMensaje.textContent = `${nombre.value.trim()} ${resultado}. Numero de control: ${numeroControl.value.trim()}.`;
    modal.show();
  });
}

function marcarCampo(campo, esValido) {
  campo.classList.toggle("is-valid", esValido);
  campo.classList.toggle("is-invalid", !esValido);
}

function limpiarValidacion(campos) {
  campos.forEach((campo) => {
    campo.classList.remove("is-valid", "is-invalid");
  });
}

function mostrarAlerta(alerta, mensaje) {
  alerta.textContent = mensaje;
  alerta.classList.remove("d-none");
}
