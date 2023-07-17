## Invoice Backend [(Vercel)](https://techno-kart-backend.vercel.app/)


## Installation

To install dependencies for this project run

```bash
  npm install
```

## Start

To start this project on localhost run

```bash
  node index.js
```
or
```bash
  nodemon index.js
```
and the backend will start on the localhost port:1800

## Main .JS Files

The main .js files

### Entry Point
```bash
  cd ./index.js
```
### The Controller .js file which handles all the different types request to the backend
```bash
  cd ./Controller/UserController.js
  cd ./Controller/AdminController.js
```
### The .js file which handles all the logical part of a api request or the file which contains all the methods used by the controllers
```bash
  cd ./Services/UserService.js
  cd ./Services/AdminService.js
```

### Models for the MongoDB Database
```bash
  cd ./Model/Admin.js
  cd ./Model/User.js
```

### JWT for the API REQUEST AUTHENTICATION
```bash
  cd ./JWT/decrypt.js
  cd ./JWT/generate.js
```


