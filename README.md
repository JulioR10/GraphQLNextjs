# GraphQLNextjs
Este proyecto consiste en una API que utiliza GraphQL como lnguaje de consulta, MongoDB como base de datos, Express.js como servidor, Next.js como framework de frontend.

## Creación del proyecto
Para crear el proyecto se han seguido los siguientes pasos:

1. Crea una carpeta para el proyecto completo y entra en ella:
```
mkdir mi-proyecto
cd mi-proyecto
```
2. Crea la carpeta para el backend:
```
mkdir back
```
3. Back-end (MongoDB y GraphQL):
 3.1. Entra en la carpeta "back" e inicializa un proyecto de Node.js:
```
cd back
npm init -y
```
 3.2. Instala las dependencias necesarias para trabajar con MongoDB y GraphQL:
```
npm install --save mongodb apollo-server graphql express
```
 3.3. Crea los archivos llamados "server.js" y "schema.js" para configurar el servidor y la conexión a MongoDB.
 3.4. En el servidor iniciaremos el back y en el schema organizaremos la estructura del funcionamiento deseado.
4. Front-end (Next.js):
 4.1. Inicializa un proyecto de Next.js con nombre front:
```
npx create-next-app front
```
 4.2. Instala las dependencias necesarias para trabajar con GraphQL y Apollo Client:
```
npm install @apollo/client graphql
```
5. Docker:
 5.1. Crea un archivo "Dockerfile" en la carpeta "back":
 5.2. Abre el "Dockerfile" en tu editor favorito y agrega el codigo para crear una imagen de Docker para el back-end.
 5.3. Crea un archivo "Dockerfile" en la carpeta "front".
 5.4. Abre el "Dockerfile" en la carpeta "front" en tu editor favorito y agrega el codigo para crear una imagen de Docker para el front-end.
6. Configura Docker Compose:
 6.1. Regresa a la carpeta principal del proyecto y crea un archivo "docker-compose.yml".
 6.2. Abre "docker-compose.yml" en tu editor favorito y agrega el codigo para configurar Docker Compose para el proyecto:
7. Ejecuta el proyecto:
 7.1. Asegúrate de tener instalado Docker y Docker Compose en tu máquina.
 7.2. Ejecuta el siguiente comando en la carpeta principal del proyecto para iniciar todos los servicios:
```
docker-compose up
```
8. Terminando con el back:
 8.1. Para tratar con informacion delicada instala dotenv:
```
npm install dotenv
```
 8.2. Crea un archivo .env en el back y agrega las variables de entorno que necesitas, como la uri de mongo.
 8.3. En donde lo necesites importa dotemv y carga las variables de entorno desde el archivo .env:
```
require('dotenv').config();
```
 8.4. Accede a las variables de entorno usando:
```
process.env.NOMBRE_DE_LA_VARIABLE;
```
 8.6. Instala nodemon:
```
npm install --save-dev nodemon
```
 8.7. Configura el package.json para la inicializacion correcta de tu servidor, en este caso el servidor se inicializa con:
```
npm run dev
```
 8.8. IMPORTANTE los archivos de Docker deben modificarse teniendo en cuenta .env
9. Finalizar la configuracion del front
 9.1. Instala las dependencias necesarias:
```
npm install @apollo/client grapql
```
 9.2. Crea una carpeta llamada "lib" dentro de src.
 9.3. Crea dentro un archivo llamado apolloClient.tsx o .js para configurar el cliente Apollo GraphQL para conectarse al back.
 9.4. Ahora en "src/pages" modificca el archivo llamado "_app.tsx" para envolver tu aplicacion con el componente "ApolloProvider".
 9.5. Instala los paquetes de tipos necesarios en el front para evitar errores:
```
npm install --save-dev @types/react @types/nodes
```

Una vez que los servicios se hayan iniciado, podrás acceder al front-end en http://localhost:3000, y al back-end (GraphQL) en http://localhost:4000.
