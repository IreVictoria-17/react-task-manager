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


**1. ¿Qué componente fue más fácil?**
El componente `TaskItem` fue el más sencillo de construir. Su responsabilidad es muy clara: simplemente recibe los datos de la tarea individual y las funciones a través de las "props" y se encarga de mostrarlos en la interfaz. La lógica compleja no vive ahí, solo la estructura visual.

**2. ¿Qué componente fue más difícil?**
Definitivamente el componente `App.jsx`. Al ser el "director de orquesta" de la aplicación, concentra la mayor parte de la lógica. Fue un reto manejar el "Scope" (alcance) de las funciones para no anidarlas incorrectamente, y aprender a usar Variables Derivadas para calcular los contadores y los filtros sin tener que crear múltiples estados innecesarios que pudieran desincronizarse.

**3. ¿Dónde vive el estado principal y por qué?**
El estado principal de la lista de tareas (`const [tasks, setTasks] = useState([])`) vive en el componente padre `App.jsx`. La razón de esto es aplicar el principio de "Levantamiento de Estado" (Lifting State Up) de React. Como dos componentes "hermanos" necesitan esta información (`TaskForm` necesita actualizar la lista y `TaskList` necesita leerla), el estado debe vivir en el ancestro común más cercano a ambos para poder pasar la información hacia abajo a través de "props".
