# mern-auth

Minimal full-stack MERN app with authentication using passport and JWTs.

This project uses the following technologies:

- [React](https://reactjs.org) and [React Router](https://reacttraining.com/react-router/) for frontend
- [Express](http://expressjs.com/) and [Node](https://nodejs.org/en/) for the backend
- [MongoDB](https://www.mongodb.com/) for the database
- [Redux](https://redux.js.org/basics/usagewithreact) for state management between React components

## Configuration

Make sure to add your own `MONGOURI` from your mongoDB Atlas database in `config/keys.js`.

```javascript
module.exports = {
  mongoURI: "YOUR_MONGO_URI_HERE",
  secretOrKey: "secret"
};
```

## Quick Start

```javascript
// Install dependencies for server & client
npm install && npm run client-install

// Run client & server with concurrently
npm run dev

// Server runs on http://localhost:5000 and client on http://localhost:3000
```
**Home Page**

![Home](https://user-images.githubusercontent.com/65606499/146728624-a84a2357-3b9d-4ddb-aff8-2737aed16700.JPG)

**LOGIN and REGISTER PAGE**

![LoginPage](https://user-images.githubusercontent.com/65606499/146728773-4810f428-b6d0-4c7e-8020-f405e24fdf91.JPG)


![registerPage](https://user-images.githubusercontent.com/65606499/146728790-d8c07b38-9f47-44bb-aa40-52c5a0865b26.JPG)

**ADDITIONAL DETAILS**

![AdditionalDetails](https://user-images.githubusercontent.com/65606499/146728880-4578a436-0d14-435b-82a0-a87c81b911e7.JPG)

**ERROR FUNCTIONALITY IN EVERY FORM**

![errorsFunction](https://user-images.githubusercontent.com/65606499/146728990-654671a3-25ed-463f-b7b7-5287092b00b4.JPG)

**SUCCESS PAGE**

![Success](https://user-images.githubusercontent.com/65606499/146729573-4bfbe8b2-53c3-44fa-9808-ce29b09fd44f.png)

