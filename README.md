# Inventory Management (Backend)

Simple overview of use/purpose.

## Description

An in-depth paragraph about your project and overview of use.

## Getting Started

### Dependency Tools

* Nodejs Express
* Sequelize ORM (MySQL)

### Installing

* Forked this repository
* cd into the repo
* Install node_modules
```
npm install
```

### Setup the config.json file for database connection

### NOTE
* This app automatically create database based on your configuration (No configuration complexity). 
* Run (Xampp / Wampp / Laragon) for Mysql localhost server
* Check the username, password and port of localhost server for sequelize config.json and .env
* Go to config.json and name your database.


### Database scripts
* DROP database 
```
npm run db:drop
```
* Create database 
```
npm run db:create
```
* Database migration
```
npm run db:migrate
```
* Database undo migration
```
npm run db:migrate:undo
```
* Database seeder
```
npm run db:seed
```
* Database undo seed
```
npm run db:seed:undo
```
* RESET DATABASE ALL (MIGRATIONS AND SEEDERS)
```
npm run reset-db
```

### Executing program
* To run the program
```
npm run dev
```
* To run the program in production (MUST SETUP IN HOST CONFIGURATION)
```
npm run start
```

## Help

Any advise for common problems or issues.
```
command to run if program contains helper info
```

## Authors

Contributors names and contact info

Norrico Gerald Biason and Bricksoft Web Solutions
