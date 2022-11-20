<h1 align="center">Genz Cash Backend</h1>

<br>

<p align="center">API made with JS, TS, Node and Postgres 🤓</p>

<p align="center">
  <img src="https://img.shields.io/conda/l/conda-forge/setuptools?color=036b52&logo=ghost&logoColor=036b52">
</p>

<br>

<h2 align="center">

[![My Skills](https://skills.thijs.gg/icons?i=js,ts,nodejs,postgres)](https://skills.thijs.gg)

</h2>

<br>

<h4 align="center">
	🚧  TS-Node-API 🚀 under construction...  🚧
</h4>

<br>

### Technologies

The following tools were used in building this API:

- [Node.js](https://nodejs.org/en/)
- [Javascript]()
- [TypeScript]()
- [Docker]()
- [Postgres]()
- [Sequelize]()
- [Express]()
- [Mocha]()
- [JsonWebToken]()
- [Sucrase]()
- [Bcrypt]()
- [Swagger]()
- [Zod]()

<br>

### Prerequisites

Before starting, you will need to have the following tools installed on your machine:

<br>Docker Compose version 1.27.0+,
<br>[Npmjs](https://www.npmjs.com), [Docker](https://www.docker.com), [Node.js](https://nodejs.org/en/).
<br>
Besides, it's good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/)

### 🎲 Running the App

```bash
# Install all dependencies for backend and frontend
$ npm run install:all

# Run or install the containers in docker, build the app and run db:migrate with this command:
$ npm run compose:up

# If no error occurred, the application should already be working.

# Some useful commands

# Note: the application is already build and the tables have already been created in docker containers when doing the compose:up command, but if there is an error, use the individual commands.

# You can take down and clean docker with:
$ npm run compose:down

# Application build
$ npm run build

# Create the tables in database with migrations
$ npm run db:migrate

# If you want some initial data, you can seed with:
$ npm run db:seed

# Run the application in development mode
$ npm run dev


# The server will start on port:3001 - access <http://localhost:3001>
```

<br>

## Swaggerjs <http://localhost:3001/docs>

<h3>Access the API with Swagger</h3>
<h4>
Most routes need a valid token. If you want to use it, I suggest that you first create a user in the 'Users' session, copy the token that will be generated, and paste it, clicking on the authorize button.
</h4>

<br>

<h1 align="center">Genz Cash Frontend</h1>

<br>

<h2 align="center">

[![My Skills](https://skills.thijs.gg/icons?i=js,ts,react,redux,git,sass,jest,vite,nodejs)](https://skills.thijs.gg)

</h2>

<br>

### Technologies

The following tools were used in building this APP:

- [Reactjs]()
- [Javascript]()
- [TypeScript]()
- [Redux]()
- [SASS]()
- [Jest]()
- [Mock Service Worker]()
- [Yup]()
- [Node.js](https://nodejs.org/en/)
- [Vite]()

<br>

### 🎲 Running the FrontEnd

```bash
# In the root of the project to install dependencies for backend and frontend
$ npm run install:all

# Or if you want to run just the frontend
$ cd frontend

# Install the dependencies
$ npm install

# Run the application in development mode
$ npm run dev

# The server will start on port:5173 - access <http://127.0.0.1:5173/>
```
