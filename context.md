# 📖 Documentación y Contexto del Proyecto: "Inteligencia de Datos"

Este documento describe a fondo la arquitectura, el funcionamiento de cada archivo y sección del proyecto, y ofrece una guía práctica paso a paso para personalizarlo según tus necesidades.

---

## 📑 Tabla de Contenido
1. [Visión General del Proyecto](#1-visión-general-del-proyecto)
2. [Estructura de Archivos](#2-estructura-de-archivos)
3. [Explicación a Fondo del HTML (`index.html`)](#3-explicación-a-fondo-del-html-indexhtml)
4. [Explicación a Fondo del CSS (`style.css`)](#4-explicación-a-fondo-del-css-stylecss)
5. [Explicación a Fondo del JavaScript (`script.js`)](#5-explicación-a-fondo-del-javascript-scriptjs)
6. [Cómo Modificar el Proyecto a tu Gusto](#6-cómo-modificar-el-proyecto-a-tu-gusto)

---

## 1. Visión General del Proyecto

El proyecto es una **Landing Page (página de aterrizaje) moderna, responsiva y accesible** para una consultora o empresa de **Inteligencia y Analítica de Datos**.

La página está construida con la tríada clásica de desarrollo web frontend sin dependencias externas pesadas:
* **HTML5:** Define la estructura y el contenido semántico.
* **CSS3:** Define la estética visual, la paleta de colores, el sistema de diseño responsivo (Flexbox y CSS Grid), las transiciones y animaciones.
* **JavaScript (Vanilla ES6):** Aporta interactividad, gestionando el comportamiento del menú desplegable móvil (hamburguesa) y la navegación suave.

---

## 2. Estructura de Archivos

```plaintext
PROYECTO DE GRADO/
│
├── index.html         # Archivo raíz con la estructura HTML de la página web.
├── style.css          # Hoja de estilos con variables, diseño responsive y temas.
├── script.js          # Lógica interactiva para la apertura y cierre del menú móvil.
├── assets/            # Directorio que aloja logotipos, iconos y gráficos decorativos.
│   ├── LOGOINTELIGENCIADEDATOSPOSITIVA.png
│   └── FORMAHERO..png
└── CHEAT.SHEET/       # Recursos, borradores de apoyo y ejercicios de práctica.
```

---

## 3. Explicación a Fondo del HTML (`index.html`)

El documento HTML está dividido en secciones semánticas clave:

### 3.1. Encabezado Técnico (`<head>`)
* **`<!DOCTYPE html>`:** Declara que el documento sigue el estándar moderno de HTML5.
* **`<meta charset="UTF-8">`:** Permite representar caracteres especiales del español (tildes, eñes, signos de interrogación).
* **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`:** Clave para el diseño responsivo. Hace que la escala del sitio coincida con el ancho de la pantalla del dispositivo móvil.
* **Google Fonts (`<link rel="stylesheet" href="...">`):** Importa la tipografía moderna **Outfit** con grosores 400 (regular) y 600 (semi-bold).
* **`<link rel="stylesheet" href="style.css">`:** Vincula las reglas visuales del archivo CSS externo.

---

### 3.2. Cabecera y Navegación (`<header>`)
* **`<a href="#inicio" class="logo-enlace">`:** Enlace envolvente que redirige al inicio al hacer clic en el logo.
* **`<img src="assets/LOGOINTELIGENCIADEDATOSPOSITIVA.png" class="logo">`:** Imagen del logotipo corporativo con texto alternativo (`alt`) para accesibilidad.
* **`<nav>` (Navegación principal):**
  * Contiene enlaces ancla (`<a href="#id">`) a las distintas secciones (`#inicio`, `#nosotros`, `#servicios`, etc.).
  * Al hacer clic, la página se desliza suavemente hacia la sección correspondiente gracias a `scroll-behavior: smooth` en CSS.
* **`<div class="header-actions">`:**
  * **`<button class="lang-switch">ES / EN / PT</button>`:** Botón visual para futuro soporte de cambio de idioma.
  * **`<button class="menu-toggle" id="menu-toggle">`:** Botón hamburguesa visible únicamente en celulares y tablets pequeñas. Contiene tres etiquetas `<span>` que representan las 3 líneas horizontales del icono.

---

### 3.3. Sección Hero / Portada (`<section class="hero" id="inicio">`)
Es la primera sección visible de la página y busca captar la atención del usuario inmediatamente:
* **`<div class="hero-texto">`:**
  * `<h1>`: Título de impacto ("Inteligencia que convierte datos en decisiones").
  * `<p>`: Descripción del valor agregado que ofrece el negocio.
  * `<a href="#nosotros" class="btn-primario">Comencemos</a>`: Botón de llamada a la acción (Call To Action o CTA).
* **`<img src="assets/FORMAHERO..png" class="hero-forma">`:** Gráfico decorativo superpuesto a la derecha que aporta dinamismo visual.

---

### 3.4. Sección "Nosotros" (`<section id="nosotros">`)
Presenta la identidad y valores de la empresa:
* **Título (`<h2>`) y Párrafo Introductorio (`<p>`):** Resumen de la actividad y propuesta de la comunidad.
* **Contenedor `.pilares`:**
  * Aloja 3 tarjetas estructuradas con etiquetas `<article>`.
  * **Misión (🚩):** Explica la transformación de datos en información accionable.
  * **Visión (💡):** Enfoque en la innovación estratégica digital.
  * **Propósito (🎯):** Foco en el impulso y rentabilidad de los clientes.
  * Cada tarjeta cuenta con un contenedor circular `.pilar-icono` para su emoji característico.

---

### 3.5. Sección "Servicios" (`<section id="servicios">`)
Muestra las soluciones que la compañía ofrece:
* **Separador SVG Ondulado (`<svg class="ola">`):**
  * Genera una transición gráfica fluida y moderna entre la sección anterior y la actual mediante 3 capas de curvas con diferentes tonos de azul y transparencias (`opacity="0.5"`, `opacity="0.7"`).
* **Encabezado y CTA:** Texto de introducción y botón "Más detalles".
* **Contenedor `.servicios-grid`:**
  * Diseñado en cuadrícula para albergar las tarjetas de servicios:
    1. **Asesorías personalizadas:** Fondo azul claro con texto oscuro.
    2. **Modelos predictivos:** Fondo azul marino con texto blanco.
    3. **Ingeniería de datos:** Fondo azul noche oscuro, configurado para abarcar ambas columnas en pantalla completa.

---

## 4. Explicación a Fondo del CSS (`style.css`)

El archivo CSS sigue una arquitectura organizada y limpia:

### 4.1. Variables Globales (`:root`)
Permiten centralizar colores y tipografías para facilitar cambios de diseño en un solo lugar:
```css
:root {
    --azul-marino: #243E6E;
    --naranja: #FF5043;
    --gris-claro: #EFF1F4;
    --gris-oscuro: #BEC2C6;
    --negro: #0D1828;
    --blanco: #ffffff;
    --fuente-titulos: 'Outfit', sans-serif;
    --fuente-texto: Helvetica, Arial, sans-serif;
}
```

### 4.2. Header Fijo (`position: sticky`)
```css
header {
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: var(--azul-marino);
    display: flex;
    align-items: center;
    justify-content: space-between;
}
```
* **`position: sticky; top: 0`:** Mantiene el encabezado visible en la parte superior mientras el usuario hace scroll hacia abajo.
* **`z-index: 100`:** Asegura que el menú siempre quede por encima de cualquier otro elemento de la página.

### 4.3. Animación de Enlaces y Botones
* Los botones y enlaces tienen `border-radius: 999px` para un acabado en forma de píldora redondeada.
* La propiedad `transition: background-color 0.2s ease` crea un cambio suave hacia el color `--naranja` cuando el cursor pasa por encima (`:hover`).

### 4.4. Hero con Fondo Dividido y Gradiente
```css
.hero {
    position: relative;
    overflow: hidden;
    background: linear-gradient(120deg, #ffffff 60%, var(--gris-claro) 60%);
}
```
* El gradiente en ángulo de 120 grados genera un corte geométrico donde el 60% inicial es blanco y el 40% restante es un gris suave decorativo.
* `overflow: hidden` evita que la imagen decorativa `.hero-forma` genere scroll horizontal no deseado si se sale del margen.

### 4.5. Efecto de Elevación en Tarjetas (Hover Card Effect)
```css
.pilares article {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.pilares article:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 30px rgba(0, 0, 0, 0.12);
}
```
* Al colocar el cursor sobre una tarjeta, se desplaza hacia arriba 8 píxeles (`translateY(-8px)`) y su sombra aumenta, creando una sensación de flotación 3D realista.

### 4.6. Cuadrícula de Servicios (CSS Grid)
```css
.servicios-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
}
.servicio-ingenieria {
    grid-column: 1 / -1;
}
```
* `grid-template-columns: 1fr 1fr`: Crea dos columnas de igual tamaño.
* `grid-column: 1 / -1`: Le indica a la tarjeta de "Ingeniería de datos" que inicie en la primera línea de la cuadrícula y termine en la última, ocupando todo el ancho horizontal.

### 4.7. Adaptabilidad Móvil (`@media (max-width: 768px)`)
En pantallas menores a 768 píxeles de ancho (celulares y tablets verticales):
1. **`.hero`:** Cambia a `flex-direction: column` para apilar verticalmente el texto y la imagen.
2. **`nav`:** Se oculta por defecto (`display: none;`).
3. **`.menu-toggle`:** Se activa y se vuelve visible (`display: flex;`).
4. **`nav.abierto`:** Al activarse mediante JavaScript, el menú se posiciona absolutamente debajo del header (`top: 100%`) desplegándose en formato vertical (`flex-direction: column`).

---

## 5. Explicación a Fondo del JavaScript (`script.js`)

El archivo contiene solo 19 líneas, pero implementa una lógica interactiva fundamental:

```javascript
// 1. Localizamos los elementos en el DOM
const boton = document.getElementById('menu-toggle');
const menu = document.querySelector('nav');

// 2. Escuchamos el clic en el botón de hamburguesa
boton.addEventListener('click', function() {
    menu.classList.toggle('abierto');
});

// 3. Cerramos el menú cuando se hace clic en cualquier enlace
const enlaces = document.querySelectorAll('nav a');
enlaces.forEach(function(enlace) {
    enlace.addEventListener('click', function() {
        menu.classList.remove('abierto');
    });
});
```

### ¿Qué hace cada parte?
1. **`document.getElementById('menu-toggle')` / `document.querySelector('nav')`:**
   Obtienen una referencia a los elementos HTML para manipularlos en tiempo real desde el código.
2. **`menu.classList.toggle('abierto')`:**
   * La función `.toggle()` verifica si la clase `'abierto'` está presente en el elemento `<nav>`.
   * Si **no** está, la agrega (el menú se muestra).
   * Si **ya** está, la remueve (el menú se oculta).
   * Esto ahorra escribir condicionales `if/else` manuales.
3. **`enlaces.forEach(...)`:**
   * En dispositivos móviles, si el usuario abre el menú y toca "Servicios", la página se desliza hacia servicios.
   * Sin este bloque, el menú seguiría abierto tapando la pantalla. El método `.classList.remove('abierto')` asegura que el menú se repliegue automáticamente tras hacer la selección.

---

## 6. Cómo Modificar el Proyecto a tu Gusto

Aquí tienes una guía rápida para personalizar los aspectos más comunes del proyecto:

### 🎨 1. Cambiar los Colores del Sitio
Abre `style.css` y ve a la sección `:root` en las primeras líneas. Puedes cambiar los códigos hexadecimales por los colores de tu marca:
```css
:root {
    --azul-marino: #1A365D;   /* Color del header y títulos oscuros */
    --naranja: #3182CE;       /* Color de acento al pasar el ratón (hover) */
    --gris-claro: #F7FAFC;    /* Fondo suave del hero */
    --blanco: #FFFFFF;
}
```

### ✍️ 2. Cambiar las Tipografías
1. Entra a [Google Fonts](https://fonts.google.com/) y escoge tu fuente favorita (por ejemplo, *Inter*, *Montserrat* o *Poppins*).
2. En `index.html`, en el `<head>`, reemplaza la línea del `<link href="https://fonts.googleapis.com/...">` con el código proporcionado por Google Fonts.
3. En `style.css`, actualiza la variable correspondiente:
   ```css
   :root {
       --fuente-titulos: 'Montserrat', sans-serif;
       --fuente-texto: 'Inter', sans-serif;
   }
   ```

### 🖼️ 3. Cambiar el Logotipo o las Imágenes
1. Coloca tu nueva imagen dentro de la carpeta `assets/` (por ejemplo, `assets/mi-nuevo-logo.png`).
2. En `index.html`, ubica la línea 14 y actualiza la ruta del atributo `src`:
   ```html
   <img src="assets/mi-nuevo-logo.png" alt="Logo de mi empresa" class="logo">
   ```
3. Si el logo se ve muy pequeño o muy grande, ajusta la propiedad `height` en `style.css`:
   ```css
   .logo {
       height: 50px; /* Modifica este número en píxeles */
       width: auto;
   }
   ```

### ➕ 4. Agregar un Nuevo Pilar (Misión, Visión, Valores...)
Para agregar una cuarta tarjeta en la sección "Nosotros":
1. En `index.html`, dentro de `<div class="pilares">`, copia y pega un bloque `<article>`:
   ```html
   <article>
       <div class="pilar-icono pilar-icono-valores">⭐</div>
       <h3>Valores</h3>
       <p>Integridad, transparencia e innovación constante en cada proyecto.</p>
   </article>
   ```
2. En `style.css`, puedes darle un color de fondo único al círculo del icono:
   ```css
   .pilar-icono-valores { background-color: #D97706; }
   ```
   *El diseño se ajustará automáticamente gracias a que cada artículo tiene `flex: 1`.*

### 🛠️ 5. Agregar Nuevas Secciones (Contacto, Testimonios, etc.)
Para agregar una nueva sección (por ejemplo, `#contactanos`):
1. En `index.html`, antes de `</body>`, crea una nueva etiqueta `<section>`:
   ```html
   <section id="contactanos" style="padding: 60px 40px; text-align: center;">
       <h2>Contáctanos</h2>
       <p>Escríbenos a contacto@tuempresa.com y conversemos sobre tu proyecto.</p>
   </section>
   ```
2. Dado que el menú ya contiene `<a href="#contactanos">Contáctanos</a>`, el navegador navegará suavemente hasta ella sin requerir cambios en el JavaScript.

### 📱 6. Ajustar el Tamaño en el que se Activa el Menú Móvil
Por defecto, el menú hamburguesa aparece en pantallas menores o iguales a `768px`. Si quieres que aparezca antes (por ejemplo, en pantallas de tablets de hasta `900px`), cambia ese valor en `style.css`:
```css
@media (max-width: 900px) {
    /* Aquí se aplican las reglas del menú móvil */
}
```
