<div align="center">

TECNOLOGICO NACIONAL DE MEXICO

INSTITUTO TECNOLOGICO DE OAXACA

Departamento de Ingenieria en Sistemas Computacionales

<img src="img/logoportada.png" alt="Logo de portada" width="260">

Materia: Programacion Web

Actividad: Actividad 5. Login funcional con HTML, CSS y JavaScript

Docente: Martinez Nieto Adelina

Grupo: 7SD

Alumnos: Valencia Borja Omar Rutilio            
Antonio Mendez Angel Gabriel

Numero de control: 22161258

Oaxaca, Oaxaca, 07 de Julio de 2026

</div>

# Actividad 5: Login funcional con HTML, CSS y JS

## Objetivo

Crear un login funcional en HTML, CSS y JavaScript que simule el acceso a un sistema, usando dos pantallas conectadas y documentando su uso para publicarlo en GitHub Pages.

## Descripcion

El proyecto inicia en `login.html`, donde se captura un correo electronico y una contrasena. La validacion se realiza con JavaScript, sin backend. Cuando los datos son correctos, el sistema guarda el usuario en `localStorage` y redirige a `index.html`.

En `index.html` se muestra la pantalla principal del sistema con sidebar, navbar, menu de usuario, opcion para cerrar sesion, formulario de captura de usuarios, formulario de alumnos y modal para indicar si el alumno es mayor o menor de edad.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- `localStorage` para simular la sesion

## Estructura del proyecto

```text
Actividad5/
+-- README.md
+-- login.html
+-- index.html
+-- css/
|   +-- login.css
+-- js/
|   +-- login.js
|   +-- utileria.js
+-- img/
    +-- logoportada.png
```

## Funcionalidades implementadas

- Login con correo y contrasena.
- Validacion de correo con `validarCorreo`.
- Validacion de contrasena con `validarPassword`.
- Redireccion de `login.html` a `index.html`.
- Simulacion de sesion con `localStorage`.
- Navbar con el correo del usuario que inicio sesion.
- Menu desplegable para salir del sistema.
- Sidebar con boton hamburguesa para abrir y cerrar.
- Menu Usuarios con submenu Captura.
- Formulario de usuarios con nombre, correo y contrasena.
- Formulario de alumnos con nombre, numero de control y edad.
- Validacion de numero de control de 6 digitos.
- Modal que indica si el alumno es mayor de edad o no.

## Uso del sistema

1. Abrir `login.html`.
2. Ingresar un correo valido, por ejemplo: `alumno@itoaxaca.edu.mx`.
3. Ingresar una contrasena valida, por ejemplo: `Alumno123`.
4. Presionar el boton `Entrar`.
5. El sistema redirige a `index.html`.
6. En la pantalla principal se pueden capturar usuarios y alumnos.
7. Para cerrar sesion, dar clic en el correo mostrado en la navbar y seleccionar `Salir del sistema`.

## Validaciones

### Correo electronico

El correo debe tener formato valido, por ejemplo:

```text
usuario@dominio.com
```

### Contrasena

La contrasena debe cumplir con:

- Minimo 8 caracteres.
- Al menos una letra mayuscula.
- Al menos una letra minuscula.
- Al menos un numero.

### Numero de control

El numero de control del alumno debe contener exactamente 6 digitos.

## GitHub Pages

Enlace del proyecto publicado:

```text
Pendiente de agregar cuando se active GitHub Pages.
```

## Participacion del equipo

La actividad es en equipo de 2 integrantes. Para cumplir con la indicacion de participacion, ambos integrantes deben aparecer en el historial de commits del repositorio con una distribucion aproximada de 50/50.

Rango aceptado:

```text
40/60 a 60/40
```

## Lo que falta para cumplir el 50/50

Actualmente el codigo base ya esta avanzado localmente, pero para que el repositorio cumpla con la regla del equipo falta que el segundo integrante haga commits reales desde su propia cuenta.

Recomendacion de division:

### Valencia Borja Omar Rutilio

- README del proyecto.
- Estructura base.
- Pantalla de login.
- Estilos generales.
- Validaciones iniciales.

### Companero de equipo

- Mejoras visuales en `index.html`.
- Ajustes del sidebar y navbar.
- Mejoras al formulario de usuarios.
- Mejoras al formulario de alumnos.
- Pruebas del flujo completo.
- Activacion o configuracion de GitHub Pages.

## Pendientes antes de entregar

- Confirmar el nombre del segundo integrante en este README.
- Subir el proyecto a un repositorio publico de GitHub.
- Hacer commits separados desde las cuentas de ambos integrantes.
- Activar GitHub Pages.
- Pegar el enlace publicado en la seccion GitHub Pages.
- Probar el flujo completo publicado: `login.html -> index.html -> salir`.
