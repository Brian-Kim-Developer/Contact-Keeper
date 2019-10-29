# Contact Keeper
## Introduction
The aim of this project is to provide users with storage service that enables them to easily manage personal contact information.
With this service, the clients are able to simply access to summary of the targets' information - including Name, Email, Phone Number, status (Personal or Professional).

## Technologies
### (MERN Stack) MongoDB, Express.js, React.js, React Hooks & Context, Node.js

<br/><br/>
## Commands | []: optional

### ----- Setup Back-End ----- 
### 1. npm initialize
```npm init```<br/>

### 2. npm initialize with auto-generated 'package.json' file
#### You can modify the file to change variables main, description etc..
```npm init -y```

### 3. Install required environment for back-end - Step 1
```npm install express bcryptjs jsonwebtoken config express-validator mongoose```<br/><br/>
```express``` is a web framework for handling routing.<br/>
```bcryptjs``` is going to handle hashing passwords, so this is for authentication.<br/>
```jsonwebtoken``` is for json web token (JWT), which we can send back and forth. This enables us to use it to basically access protected routes on the server or back-end.</br>
```config``` is for global variables.</br>
```express-validator``` is for validating body data (email and password to be passed when we login).<br/>
```mongoose``` is an abstaction layer that enables us to deal with database (select, insert, update, delete).

### 4. Install required environment for back-end - Step 2
```npm install -D nodemon concurrently```<br/><br/>
```nodemon``` is for not to restart every time when we make changes<br/>
```concurrently``` will allow us to basically run our back-end and the front-end react server at the same time.

### 5. package.json example
```
{
  "name": "Contact_Keeper",
  "version": "1.0.0",
  "description": "Contact manager app",
  "main": "server.js",
  "scripts": {
    "start": "node server.js", <-- This is added.
    "server": "nodemon server.js" <-- This is added.
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "config": "^3.2.3",
    "express": "^4.17.1",
    "express-validator": "^6.2.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.7.7"
  },
  "devDependencies": {
    "concurrently": "^5.0.0",
    "nodemon": "^1.19.4"
  }
}

``` 

### ----- Setup Front-End ----- 
### 6. Create react application
```npx create-react-app [directory]```

### 7. Change package.json file in root directory
```
"scripts": {
    "start": "node server.js",
    "server": "nodemon server.js",
    "client": "npm start --prefix client", <-- This is added.
    "clientinstall": "npm install --prefix client", <-- This is added.
    "dev": "concurrently \"npm run server\" \"npm run client\"" <-- This is added.
},
```

```"client": "npm start --prefix client"``` will run in the client folder.<br/>
```"clientinstall": "npm install --prefix client"``` will run in the client folder.<br/>
```"dev": "concurrently \"npm run server\" \"npm run client\""``` will run both the "client" and the "server" at the same time.

### 8. Change package.json file in client directory
```
{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.11.0",
    "react-dom": "^16.11.0",
    "react-scripts": "3.2.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "proxy": "http://localhost:5000" <-- This is added.
}
```

```"proxy": "http://localhost:5000"``` will enables us not to type following value when making requests with Axios.

### 9. Run dev script
```npm run dev```<br/>

At this point, back-end is running on PORT 5000, and front-end is running on PORT 3000.

### 10. .gitignore example in root directory - Remove .gitignore and READ.ME file within client directory.
```
node_modules/

/client/build

.DS_Store
/client/.env.local
/client/.env.development.local
/client/.env.test.local
/client/.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

### 11. Install requried dependencies for front-end within client directory
```cd client```<br/>
```npm install axios react-router-dom uuid react-transition-group```<br/><br/>
```axios``` is for using HTTP client.<br/>
```react-router-dom``` contains the DOM bindings for React Router.<br/>
```uuid``` is ID-generater which is used before using API during development cycle.<br/>
```react-transition-group``` is for animation.

### 12. Run dev script in root directory
```cd ..```<br/>
```npm run dev```<br/>

### 13. Remove following files within src directory.
```App.test.js```<br/>
```index.css```<br/>
```logo.svg```<br/>
```serviceWorker.js```
