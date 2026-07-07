function validarCorreo(correo) {
  const expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return expresionCorreo.test(String(correo).trim());
}

function validarPassword(password) {
  const tieneLongitud = String(password).length >= 8;
  const tieneMayuscula = /[A-Z]/.test(password);
  const tieneMinuscula = /[a-z]/.test(password);
  const tieneNumero = /\d/.test(password);
  return tieneLongitud && tieneMayuscula && tieneMinuscula && tieneNumero;
}

function validarNumeroControl(numeroControl) {
  return /^\d{6}$/.test(String(numeroControl).trim());
}

function esMayorDeEdad(edad) {
  return Number(edad) >= 18;
}
