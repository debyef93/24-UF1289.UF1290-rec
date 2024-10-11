# UF1289 - UF1291

### Diseño de Elementos Software con Tecnologías basadas en Componentes
### Implementación e Integración de Elementos Software con Tecnologías basadas en Componentes

## Prueba Práctica de Programación Orientada a Objetos

### Criterios de Evaluación
   - Correcta implementación de las clases y herencia.
   - Conexión establecida y funcional a la base de datos MySQL.
   - Uso de POO para encapsular la lógica de acceso a datos.
   - Estructura clara y bien organizada del código.

---

### Parte 1: Refactorización con Clases (POO y Componentes)
   **Tiempo estimado:** 2 horas

#### Instrucciones:
1. Refactoriza el archivo `config.js` para crear una clase `Database`. Esta clase debe manejar la conexión a la base de datos MySQL y la ejecución de consultas SQL.
2. Implementa en la clase `Database` el método `getPersonById`, que reciba el `id` de un estudiante y devuelva los datos correspondientes desde la base de datos.

**Entregables:**
   - Clase `Database` correctamente implementada.
   - Conexión establecida a la base de datos y datos de estudiantes recuperados usando el método `getPersonById`.

---

### Parte 2: Herencia y Jerarquía de Clases
   **Tiempo estimado:** 2 horas

#### Instrucciones:
1. Crea una clase `Person` con atributos comunes como `id`, `name`, `email`.
2. Implementa las subclases `Person`, `Professor`, y `Admin`, que hereden de `Person`. Estas subclases deben tener un método `getRole` que devuelva su rol específico (por ejemplo, "Estudiante", "Profesor", etc.).
3. Usa estas clases para gestionar los roles de los usuarios de la base de datos. (ej, muestra a administradores y profesores sin puntuación y con un color de fondo distintivo)

**Entregables:**
   - Implementación de las clases `Person`, `Person`, `Professor` y `Admin`.
   - Método `getRole` correctamente implementado en cada subclase.

/* se cambio el nombre de .envEXAMPLE
en config.js el codigo funcionaba desde la linea 29 hasta linea 46 cuando le doy npm start va la web. 