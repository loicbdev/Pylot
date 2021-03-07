<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#routes">Routes</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Pylot est une application qui a pour objectif de permettre aux étudiants et aux jeunes professionnels de rentrer chez eux, de manière collaborative, fun et sécurisée en utilisant les moyens de transport habituels (à pied, en bus, en tram commun, en vélo, en voiture). Concrètement, nous mettons en relation les personnes qui rentrent dans la même direction, pour se déplacer ensemble.

### Built With

- [Node](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySql](https://www.mysql.com/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```
- node > 12
  ```sh
  npm install node@latest -g
  ```
- mysql
  ```sh
  npm install mysql-server
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/WildCodeSchool/nts-js-202009-p3-backend-pylot.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Install MySql database
   ```sh
   $ mysql -u root -p
   mysql> CREATE DATABASE [new_database];
   $ mysql -u username -p new_database < pylot_dump.sql
   ```
4. Run the server
   ```sh
   npm start
   ```

<!-- ENV -->

### Env sample

```
REACT_APP_ORIGIN=<FRONT_END_URL>

#DATABASE
DB_HOST=<YOUR_HOST>
DB_NAME=<YOUR_DB_NAME>
DB_USER=<YOUR_DB_USER>
DB_PASSWORD=<YOUR_DB_PASSWORD>

#JWT TOKEN
ACCESS_TOKEN_SECRET=<YOUR_SECRET_TOKEN>

#PUSH NOTIFICATIONS
PUBLIC_VAPID_KEY=<YOUR_SECRET_KEY>
PRIVATE_VAPID_KEY=<YOUR_SECRET_KEY>

# This must be either a URL or a 'mailto:' address.
WEB_PUSH_CONTACT="mailto: <YOUR_MAIL>"
```

<!-- ROUTES -->

### API Routes:

| Method |                 Path                  |                Purpose                |
| :----: | :-----------------------------------: | :-----------------------------------: |
|  POST  |            /api/auth/login            |                 Login                 |
|  POST  |           /api/auth/sign-up           |                Sign-up                |
|  POST  |        /api/auth/authenticate         |        Authenticate JWT token         |
|  GET   |            /api/users/:id             |          Get a specific user          |
|  PUT   |  /api/users/:id/preferences/co-pylot  |        Update user preferences        |
|  PUT   |  /api/users/:id/preferences/distance  |        Update user preferences        |
|  PUT   |      /api/users/:id/presentation      |       Update user presentation        |
|  PUT   |        /api/users/:id/password        |         Update user password          |
|  POST  |  /api/users/:id/preferences/address   |        Add a favorite address         |
| DELETE |  /api/users/:id/preferences/address   |       Delete a favorite address       |
|  POST  |         /api/users/:id/angels         |             Add an angel              |
| DELETE |    /api/users/:id/angels/:angelId     |            Delete an angel            |
|  PUT   | /api/users/:id/angels/:angelId/active |          Toggle active angel          |
|  POST  |       /api/users/:id/roadtrips        |            Add a roadtrip             |
|  GET   |       /api/users/:id/roadtrips        | Get all roadtrips for a specific user |

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Bcrypt](https://www.bcrypt.fr/)
- [JWT](https://jwt.io/)
- [Express-validator](https://express-validator.github.io/docs/)
- [Multer](https://github.com/expressjs/multer)
- [Eslint](https://eslint.org/)
