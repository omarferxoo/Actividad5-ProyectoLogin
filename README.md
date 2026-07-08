<div align="center">

TECNOLOGICO NACIONAL DE MEXICO

INSTITUTO TECNOLOGICO DE OAXACA

Departamento de Ingenieria en Sistemas Computacionales

<img src="img/logoportada.png" alt="Logo de portada" width="260">

Materia: Programacion Web

Actividad: Actividad 5. Login funcional con HTML, CSS y JavaScript

Docente: Martinez Nieto Adelina

Grupo: 7SD

Alumnos: 
Valencia Borja Omar Rutilio (22161258)    
Antonio Mendez Angel Gabriel (22161002)

Oaxaca, Oaxaca, 07 de Julio de 2026

</div>

# Actividad 5: Login funcional con HTML, CSS y JS

## Objetivo

Crear un login funcional en HTML, CSS y JavaScript que simule el acceso a un sistema, usando dos pantallas conectadas y documentando su uso para publicarlo en GitHub Pages.

## Descripcion

El proyecto consta de una simulación completa de acceso e interacción con un sistema web. Inicia en `login.html`, donde se captura y valida un correo electrónico y una contraseña mediante JavaScript estricto (sin backend). Al confirmar las credenciales, la sesión se simula persistiendo el usuario en `localStorage` y redirigiendo a `index.html`. 

En la vista principal (`index.html`), el sistema cuenta con un sidebar plegable, una barra de navegación (navbar) que identifica al usuario activo, menús desplegables para el cierre de sesión, y formularios dinámicos con etiquetas flotantes para la captura y validación de datos de usuarios y alumnos, culminando en la evaluación de la edad mediante ventanas modales.

---

## Explicación y Documentación Técnica

### Framework CSS Utilizado
Para el diseño de la interfaz se utilizó **Bootstrap 5**. Se aprovechó su sistema de cuadrículas (Grid System), componentes responsivos como el Navbar, Collapse (para el Sidebar) y Modales, además de las utilidades de validación de formularios y Floating Labels (etiquetas flotantes). Esto se complementó con una hoja de estilos personalizada (`login.css`) para aplicar un tema oscuro (dark mode) con gradientes y sombras personalizadas.

### Flujo del Login y Manejo de Sesión
El flujo de comunicación entre pantallas se logró mediante la Web Storage API:
1. Al enviar el formulario en `login.html`, si los datos pasan las validaciones de las expresiones regulares, se ejecuta `localStorage.setItem("usuarioActivo", correo.value)`.
2. Seguidamente, se realiza una redirección por medio de `window.location.href = "index.html"`.
3. Al cargar `index.html`, la función `iniciarSistema()` recupera el dato usando `localStorage.getItem("usuarioActivo")`. Si el dato no existe, expulsa al usuario de vuelta al login. Si existe, inyecta el correo directamente en el botón desplegable del Navbar (`topbarUsuario.textContent = usuarioActivo;`).
4. Al hacer clic en "Salir del sistema", se ejecuta `localStorage.removeItem("usuarioActivo")` y se devuelve al usuario al login.

### Métodos Principales (Lógica JavaScript)
El código se modularizó separando la lógica pura de la manipulación del DOM:
* **En `utileria.js`:**
  * `validarCorreo(correo)`: Usa expresiones regulares para asegurar la estructura `texto@dominio.com`.
  * `validarPassword(password)`: Verifica longitud (>= 8), una mayúscula, una minúscula y un número.
  * `validarNumeroControl(numeroControl)`: Valida estrictamente 6 dígitos numéricos.
  * `esMayorDeEdad(edad)`: Comprueba si el valor entero es >= 18.
* **En `login.js`:**
  * `iniciarLogin()` e `iniciarSistema()`: Funciones orquestadoras al cargar el DOM.
  * `configurarFormularioUsuario()` y `configurarFormularioAlumno()`: Manejan los eventos `submit`, aplican clases visuales de error/éxito (`is-valid`, `is-invalid`) y disparan los mensajes o ventanas modales.

---

## Proceso de Creación Paso a Paso

### 1. Estructuración y Pantalla de Login
Se diseñó la estructura base HTML y la librería matemática `utileria.js`. Posteriormente, se armó la tarjeta de login integrando las alertas visuales de validación.
<img width="1032" height="680" alt="image" src="https://github.com/user-attachments/assets/57134114-fd7a-4bf5-848c-dee3a799439f" />


### 2. Diseño del Dashboard (Sidebar y Navbar)
Se maquetó el `index.html` creando un Sidebar colapsable interactivo y un Navbar fijado en la parte superior. Se configuró el JavaScript para inyectar el nombre de usuario de la sesión simulada en el menú superior derecho.
<img width="1076" height="477" alt="image" src="https://github.com/user-attachments/assets/b59c2c7f-fe9b-4daa-a4b3-b99b285fa0e5" />

<img width="1157" height="637" alt="image" src="https://github.com/user-attachments/assets/e59a66e7-5a36-4e67-8b00-7bb77c00ecf8" />

### 3. Formularios de Captura Mejorados
Se implementaron formularios con Bootstrap *Floating Labels* en paneles en formato Grid (2 columnas en escritorio, 1 en móviles). Se conectó la validación del número de control de 6 dígitos.
<img width="720" height="1280" alt="photo_5078014403742993509_w" src="https://github.com/user-attachments/assets/d4513e54-b25a-40cd-9d3f-05d458fe62bf" />

<img width="720" height="1280" alt="photo_5078014403742993508_w" src="https://github.com/user-attachments/assets/a94decd0-1f96-439e-a38e-36cfcfd48c4d" />

<img width="1892" height="905" alt="image" src="https://github.com/user-attachments/assets/61e485a8-3bd8-48a9-8c93-abe4a106d351" />

<img width="767" height="707" alt="image" src="https://github.com/user-attachments/assets/b4642e45-fe46-48d4-adba-a794f6e7bda8" />

<img width="1917" height="915" alt="image" src="https://github.com/user-attachments/assets/50cca16a-800d-4f8c-8cd6-022d95605f86" />


### 4. Implementación de Modal y Lógica de Negocio
Se programó el lanzamiento del Modal de Bootstrap a través de JavaScript, el cual evalúa el campo de "Edad" ingresado y emite un veredicto usando la función `esMayorDeEdad()`.
<img width="1076" height="743" alt="image" src="https://github.com/user-attachments/assets/951a56b6-1f84-4fa9-a49e-d9caf6227c87" />

## Capturas del Flujo Completo Funcionando

1. **Ingresando credenciales:**
<img width="1917" height="975" alt="image" src="https://github.com/user-attachments/assets/c03234f6-9a98-4bbf-825c-654952b974f0" />


2. **Acceso concedido al sistema:**
<img width="1917" height="920" alt="image" src="https://github.com/user-attachments/assets/f1de84d6-d2f5-4848-a00b-6787bfadd872" />


3. **Cierre de Sesión:**
<img width="1913" height="900" alt="image" src="https://github.com/user-attachments/assets/aeeb6cae-88ee-478f-9619-bd65e7eb3657" />


---

## GitHub Pages

El flujo completo y funcional puede probarse en vivo desde el siguiente enlace:

🔗 **Enlace del proyecto:** https://omarferxoo.github.io/Actividad5-ProyectoLogin/login.html
