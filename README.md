
# 🧭 Carrusel con React y Splide

Este proyecto implementa un **carrusel personalizado** utilizando [`@splidejs/react-splide`](https://splidejs.com/), con controles manuales, paginación dinámica y navegación programática.

## 🚀 Características

* ✅ Carrusel funcional con **autoplay** y **rebobinado automático**.
* 🎯 Control total mediante botones de navegación (anterior, siguiente e ir a una diapositiva específica).
* 🔢 Generación dinámica de **paginación personalizada**.
* 🧩 Totalmente controlado con React Hooks (`useState`, `useRef`, `useEffect`).
* 🎨 Estilizado con **Tailwind CSS** para una apariencia moderna y adaptable.

---

## 📦 Instalación

Clona el repositorio y ejecuta los siguientes comandos:

```bash
npm install
npm run dev
```

Asegúrate de tener instalado el paquete de Splide:

```bash
npm install @splidejs/react-splide
```

Y si usas Tailwind, revisa que esté configurado correctamente en tu proyecto.

---

## 💡 Uso del componente principal

El componente principal (`App.jsx`) implementa la lógica del carrusel.

### 🔧 Importaciones principales

```js
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useEffect, useRef, useState } from 'react';
```

### ⚙️ Hooks y referencias

* `useState` para controlar:

  * `totalSlides`: número total de slides.
  * `activeSlide`: slide actualmente activa.
* `useRef` para obtener una referencia al carrusel y poder usar sus métodos (`go`, `next`, `prev`, etc.).
* `useEffect` para obtener el número total de slides al montar el componente.

### 🧭 Navegación del carrusel

```js
const goNext = () => carruselRef.current?.splide.go(">");
const goPrev = () => carruselRef.current?.splide.go("<");
const goTo = (index) => carruselRef.current?.splide.go(index);
```

Permiten avanzar, retroceder o ir directamente a una diapositiva específica.

---

## 🧱 Estructura del JSX

```jsx
<Splide
  ref={carruselRef}
  options={{
    arrows: false,
    pagination: false,
    height: 300,
    autoplay: true,
    interval: 5000,
    rewind: true,
  }}
  onMove={(splide) => setActiveSlide(splide.index)}
  className='w-[300px]'
>
  <SplideSlide className="bg-amber-400 flex items-center justify-center text-5xl">1</SplideSlide>
  <SplideSlide className="bg-red-500 flex items-center justify-center text-5xl">2</SplideSlide>
  <SplideSlide className="bg-blue-300 flex items-center justify-center text-5xl">3</SplideSlide>
</Splide>
```

Cada `SplideSlide` representa una diapositiva.
Puedes reemplazar su contenido con imágenes, texto u otros componentes.

---

## 🔢 Paginación personalizada

El método `generaraPaginacion()` crea botones de página según la cantidad de slides.

```js
for (let i = 0; i < totalSlides; i++) {
  paginas.push(
    <div
      key={i}
      onClick={() => goTo(i)}
      className={`flex-1 flex items-center justify-center hover:bg-[#cfcfcf93] hover:cursor-pointer duration-200 select-none ${
        activeSlide == i ? 'bg-[#e6e6e6a4] font-bold text-gray-600' : ''
      }`}
    >
      {i + 1}
    </div>
  );
}
```

Esto crea una barra inferior con botones numerados que reflejan el slide activo.

---

## 🎮 Controles adicionales

Además de las flechas de navegación, se incluye un botón que lleva directamente al último slide:

```jsx
<div onClick={() => goTo(2)} className="bg-[#fadc55] p-5 rounded-2xl mt-5 hover:bg-[#d8b104] duration-200 text-xl select-none">
  Ir al final
</div>
```

---

## 🧠 Personalización

Puedes adaptar este carrusel fácilmente:

* Cambia los colores o el tamaño de los slides.
* Sustituye el contenido de cada `SplideSlide` por componentes dinámicos.
* Ajusta las **opciones** del carrusel (`autoplay`, `interval`, `rewind`, etc.).
* Agrega animaciones adicionales con Tailwind o CSS puro.

---


## 🧑‍💻 Autor

Desarrollado por **MarioWopi**.
Si te resulta útil, ¡no olvides dejar una ⭐ en el repositorio!
