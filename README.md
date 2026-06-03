# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# React Task Manager 📝

Una aplicación de lista de tareas construida con React y Vite.

## Respuestas de la Entrega Final

**1. ¿Qué fue lo más difícil?**
Lo más difícil fue entender el flujo de la información (las Props). Me costó un poco visualizar cómo el estado principal y las funciones viven en `App.jsx`, pero se deben enviar 'hacia abajo' pasando por `TaskList` hasta llegar finalmente a `TaskItem` donde el usuario realmente hace clic.

**2. ¿Qué error entendiste mejor?**
El error de 'Scope' (alcance de variables). Cuando metí por error las funciones de eliminar y completar DENTRO de las llaves de la función `addTask`. La terminal me decía que no estaban definidas en el `return`, y ahí entendí que si declaro algo dentro de unas llaves, se queda atrapado ahí y el resto del componente no puede verlo.

**3. ¿Qué parte del código podrías explicar sin mirar apuntes?**
Podría explicar cómo crear la estructura básica de un componente desde cero, la regla de que deben empezar en Mayúscula (PascalCase), y cómo importarlos y renderizarlos en `App.jsx` usando etiquetas como `<TaskForm />`.
