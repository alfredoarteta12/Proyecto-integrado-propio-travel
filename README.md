# 🌴 El Propio Travel

## Descripción

**El Propio Travel** es una plataforma web desarrollada como proyecto integrador que permite promocionar planes turísticos de Barranquilla.

Los turistas pueden explorar promociones, visualizarlas en un mapa interactivo y contactar directamente a los negocios mediante WhatsApp.

Los negocios pueden registrarse, iniciar sesión y administrar sus propias promociones.

---

# Tecnologías utilizadas

### Frontend

- HTML5
- CSS3
- JavaScript (ES Modules)

### Backend

- Node.js
- Express.js

### Base de datos

- PostgreSQL

### Librerías

- Leaflet
- bcrypt
- jsonwebtoken
- dotenv
- cors
- pg

---

# Estructura del proyecto

```text
proyecto integrador el propio travel/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── database/
│   └── script.sql
│
├── public/
│   └── images/
│
├── src/
│   ├── components/
│   ├── controllers/
│   ├── router/
│   ├── services/
│   └── views/
│
├── index.html
├── style.css
└── README.md
```

---

# Requisitos

Antes de ejecutar el proyecto debes tener instalado:

- Node.js
- PostgreSQL
- Git

---

# Instalación

## 1. Clonar el repositorio

```bash
git clone https://github.com/TU-USUARIO/Proyecto-integrado-propio-travel.git
```

## 2. Entrar al proyecto

```bash
cd Proyecto-integrado-propio-travel
```

## 3. Instalar las dependencias del backend

```bash
cd backend
npm install
```

---

# Configuración

Crear un archivo llamado:

```text
backend/.env
```

Con las variables de entorno correspondientes:

```env
POSTGRES_VERSION=18

POSTGRES_CONTAINER_NAME=riwi_db_local

POSTGRES_DB=el_propio_travel
POSTGRES_USER=magdalena
POSTGRES_PASSWORD=123456

POSTGRES_PORT=5432
POSTGRES_VOLUME_NAME=riwi-db-data-magdalena

---

# Base de datos

1. Crear la base de datos en PostgreSQL.

2. Ejecutar el script SQL ubicado en:

```text
database/
```

para crear las tablas del proyecto.

---

# Ejecutar el proyecto

## Backend

Desde la carpeta **backend** ejecutar:

```bash
npm run dev
```

o

```bash
npm start
```

El servidor iniciará en:

```text
http://localhost:3000
```

---

## Frontend

Abrir el archivo:

```text
index.html
```

en un servidor local (por ejemplo, con Live Server en Visual Studio Code).

---

# Funcionalidades

## Negocios

- Registro
- Inicio de sesión
- Crear promociones
- Editar promociones
- Eliminar promociones
- Geolocalización automática mediante OpenStreetMap

## Turistas

- Visualizar promociones
- Filtrar promociones
- Visualizar negocios en el mapa
- Contactar negocios por WhatsApp

---

# APIs utilizadas

- OpenStreetMap Nominatim
- Leaflet

---

# Autor

**Alfredo Arteta**
**SIlvio barrios**
**Yardelis**

Proyecto Integrador - RIWI

---

# Frase del proyecto

> 🌴 **¡Ven y pégate el propio viaje! Descubre Barranquilla con El Propio Travel.**