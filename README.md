# App template

Create an app in no time with this template.

We using **Django** framework for the back-end and **Vue.js** for the front-end.

## Setting up the repository

- Choose a new repository name

- Use it to rename the current cloned repository

- Delete the current `.git` folder (the folder might be hidden)

- Update `README.md`

- Run the following command in the terminal of the repository :
  
  ```git
  git init
  git add .
  git commit -m "<commit message>"
  ```

*You are now ready to install the project. :)*

## Installation

For a quick and easy installation we using **Docker**, so make sure you have Docker installed.

> [How to install and use Docker](https://docs.docker.com/)

### Containerize the application

Run the following command in the terminal of the repository :

```bash
docker compose up -d --build
```

> When containerizing the application, a superuser is created.
>
> Superuser credentials :
>
> - Username : admin
>
> - Password : admin

### Access the application

Now that we have our container up and running, we can easily access our application.

To access the **back-end** and start playing with the available API (see *API REST* section below), open your favorite browser to http://localhost:8000 

To access the **front-end** of our application, open your favorite browser to http://localhost:5173

## API REST

| URI                                | Authorization | Method | Data                                   | Description                  |
| ---------------------------------- | ------------- | ------ | -------------------------------------- | ---------------------------- |
| /api/users/                        | No Auth       | GET    | None                                   | List of users                |
| /api/users/{{id_user}}/            | No Auth       | GET    | None                                   | User instance                |
| /api/users/{{id_user}}/            | Bearer Token  | PATCH  | email: `string`                        | Update user's instance email |
| /api/users/{{id_user}}/activate/   | Bearer Token  | PATCH  | None                                   | Activate user instance       |
| /api/users/{{id_user}}/deactivate/ | Bearer Token  | PATCH  | None                                   | Deactivate user instance     |
| /api/predict/                      | No Auth       | GET    | None                                   | Dummy price prediction       |
| /api/token/                        | No Auth       | POST   | username: `string`, password: `string` | Access and refresh tokens    |
| /api/token/refresh/                | No Auth       | POST   | refresh: `string`                      | New access token             |

Tokens lifetime :

- access token : 1 day
- refresh token : 15 minutes

## Update the application

Since our application is containerized, when you update the application, you are gonna have to rebuild the Docker container to see the effective updates.

You can rebuild the container by running the following commands in the terminal of the repository :

```bash
# rebuild the container
docker compose up -d --build
# remove old images
docker image prune
```

## Stop the container

You can stop the container by running the following command in the terminal of the repository :

```bash
docker compose down
```

> When stopping the container, our application is not accessible anymore.
>
> To access the application again, you are gonna have to re-containerize it.
