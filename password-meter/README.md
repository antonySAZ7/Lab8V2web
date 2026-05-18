
Antony David  Saz 24710
web

# Password Strength Meter

Aplicacion desarrollada con React que evalua la fortaleza de una contrasenia utilizando test driven development
---

# Tecnologias utilizadas

- React
- Vite
- Vitest
- React Testing Library
- Bun
- ESLint

---

# Instalacion

Instalar dependencias:

```bash
bun install
```

---

# Ejecutar el proyecto

Levantar el servidor de desarrollo:

```bash
bun run dev
```

Luego abrir en el navegador:

```txt
http://localhost:5173
```

---

# Ejecutar tests

Correr todos los tests:

```bash
bun test
```

---

# Funcionalidades

El proyecto evalua la fortaleza de una contrasenia siguiendo estas reglas puestas en la asignacion.


---

# Casos evaluados

Los tests incluyen:

- Renderizado del componente
- Estado inicial
- Contrasenias debiles
- Contrasenias medias
- Contrasenias fuertes
- Contrasenias muy fuertes
- Limpieza del input
- Edge cases

---

# Estructura del proyecto

```txt
src/
├── components/
│   └── PasswordStrengthMeter.jsx
│
├── tests/
│   ├── PasswordStrengthMeter.test.jsx
│   └── passwordStrength.test.js
│
├── utils/
│   └── passwordStrength.js
│
├── App.jsx
├── main.jsx
├── index.css
└── setupTests.js
```

---

# Arquitectura

El proyecto separa:

## Logica pura

Archivo:

```txt
utils/passwordStrength.js
```

Contiene la logica de cálculo de fortaleza de contraseña.

---

## Componente React

Archivo:

```txt
components/PasswordStrengthMeter.jsx
```

Se encarga de la interfaz de usuario y la interaccion

---

# Flujo TDD utilizado

El proyecto fue desarrollado siguiendo el ciclo

```txt
RED → GREEN → REFACTOR
```

## RED
Primero se escribieron tests que fallaban

## GREEN
Luego se implemento el mínimo código necesario para hacerlos pasar

## REFACTOR
Finalmente se reorganizo y limpio el código manteniendo los tests en verde

---

# Testing

Se utilizo:

- Vitest como test runner
- React Testing Library para pruebas de componentes
- userEvent para simular interaccion real del usuario
- jsdom como entorno de testing

---
