# Darcy Social Network 🚀

Darcy is a social network that connects people from all over the world 🌎. Share your thoughts, photos, and interests with your friends and family 💬.

## Getting Started 💻

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites 🔧

- [Node.js](https://nodejs.org/en/)
- [pnpm](https://github.com/pnpm/pnpm)
- [make](https://www.gnu.org/software/make/)

### Installing 💾

1. Clone the repository:

```
git clone https://github.com/darcyinc/darcy-backend.git
```

2. Navigate to the project directory:

```
cd darcy-backend
```

3. Install the dependencies:

```
pnpm install
```

4. Rename the `.env.example` file to `.env` and fill in the environment variables.

5. Generate the Prisma client:

```
pnpm prisma generate
```

6. (Optional) Migrate your database:

```
pnpm prisma migrate dev
```

or

```
pnpm prisma migrate deploy
```

### Building the Project 🏗️

Use the following command to build the project:

```
pnpm build
```

### Running the Project 🏃‍♂️

Use the following command to start the project in development mode (all microservices):

```
make start-dev
```

Use the following command to start the project in production mode (a screen will be created for each microservice, Linux only):

```
make start-prod
```

## Built With 🛠️

- [Node.js](https://github.com/nodejs/node)
- [pnpm](https://github.com/pnpm/pnpm)
- [fastify](https://github.com/fastify/fastify)
- [Prisma](https://github.com/prisma/prisma)

## Contributing 🤝

We welcome contributions from the community! If you're interested in contributing, please read [CONTRIBUTING.md](https://github.com/darcyinc/darcy-backend/blob/development/CONTRIBUTING.md) for more information.

## License 📃

This project is licensed under the [Apache 2.0 License](https://github.com/darcyinc/darcy-backend/blob/development/LICENSE).
