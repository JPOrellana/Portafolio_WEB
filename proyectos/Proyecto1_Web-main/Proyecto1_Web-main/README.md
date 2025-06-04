# Calculadora React — Proyecto Académico

Este repositorio contiene una calculadora simple desarrollada en React. El enfoque del ejercicio está en el diseño basado en componentes, el manejo de pruebas (testing) y la aplicación de buenas prácticas de linting.

---

## 🎯 Objetivos de la tarea

- Practicar el diseño de aplicaciones con arquitectura basada en componentes.
- Aplicar conceptos básicos de testing y pruebas no triviales.
- Aplicar reglas de estilo con linters y respetar convenciones del proyecto.

---

## 🛠️ Tecnologías utilizadas

- React 
- JavaScript 
- CSS

---

## 🧩 Funcionalidad de la calculadora

- Entrada de datos únicamente mediante botones HTML (números y operaciones)
- Operaciones básicas: **suma, resta, multiplicación, división, módulo y punto decimal**
- Límite de 9 caracteres en el display (se ignoran entradas adicionales)
- Números negativos o mayores a 999,999,999 muestran **"ERROR"**
- Botón de **igual** para obtener resultados
- Botón **+/−** que invierte el signo del número mostrado (respetando límite de 9 caracteres)
- Hook personalizado implementado para lógica de estado
- Cada componente está limitado a un máximo de 20 líneas de código

---

## 📐 Reglas de validación

- El display no debe mostrar más de **9 caracteres**
- No se permiten **números negativos** en el resultado: deben lanzar `"ERROR"`
- No se permiten **resultados mayores a 999,999,999`: deben lanzar `"ERROR"`
- El **punto decimal** cuenta como carácter
- El botón **+/−** también cuenta con el límite de 9 caracteres
- Se prohíben los **puntos y coma** en el código

---

## 🧪 Testing

- Los tests deben ejecutarse con:

```bash
npm test
