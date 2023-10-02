# Parcial1Web
aqui se llora
##  Tales Losada - 201819986

---Ejecución


## Pasos

### 1. Clonar el Repositorio

```
git clone <(https://github.com/taleslosada/Parcial1Web/edit/main/README.md)>
```

### 2. Tener instalado Node.js
Asegúrate de tener Node.js y npm (Node Package Manager) instalados en tu sistema. Ejecutar:

```
npm install
```

### 3. Iniciar la App

```
npm start
```

La aplicación se ejecutará en [http://localhost:3000](http://localhost:3000) en el navegador web predeterminado.

## Componentes y Elementos Utilizados

- [React](https://reactjs.org/): Una biblioteca de JavaScript para construir interfaces de usuario.
- [React Bootstrap](https://react-bootstrap.github.io/): Un conjunto de componentes de interfaz de usuario de Bootstrap para React.
- [React Router DOM](https://reactrouter.com/web/guides/quick-start): Biblioteca para la navegación y el enrutamiento en aplicaciones React.
- [React Intl](https://formatjs.io/docs/react-intl/): Librería para internacionalización y localización en aplicaciones React.

## Decisiones y Proceso de Desarrollo
###  Home

El componente Home muestra una lista de elementos (en este caso, detalles de automóviles) y permite al usuario seleccionar un elemento para ver más detalles. Algunos detalles clave:

- **Carga de Datos:** Los detalles de los automóviles se cargan desde un archivo JSON externo y se almacenan en el estado local utilizando `useState` de React.

- **Interacción del Usuario:** Los usuarios pueden hacer clic en un automóvil para seleccionarlo.

- **Enrutamiento:** Se utiliza React Router DOM para manejar el enrutamiento. Cuando un automóvil se selecciona, la aplicación navega a una página de detalles de automóviles individual.

### Login

El componente Login se creó para gestionar la autenticación de los usuarios. De momento solo logre con mi login y obviamente otra contraseña, pero sugiero que lo modifiquen para probar con los de ustedes.

- **Validación de Formulario:** Se implementó una validación de formulario para verificar la dirección de correo electrónico y la contraseña.

- **Manejo de Estado:** Los estados locales se utilizan para almacenar datos del formulario y mensajes de error. Cuando el usuario envía el formulario, se verifica si los datos son válidos antes de continuar.

- **Internacionalización:** Se implementó la internacionalización (i18n) para admitir varios idiomas. 

### PartDetail

El componente PartDetail muestra información detallada sobre un automóvil seleccionado. 

- **Obtención de Datos:** Utiliza `useLocation` para obtener los datos del automóvil seleccionado.

- **Internacionalización:** El precio se muestra en dólares o pesos colombianos según el idioma.

---
