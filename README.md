# Banking Platforms Setup

**Generate from inside the apps directory**

`cd apps/api-gateway`

`nest g co users`
`nest g s users`

Or

`nest g [module|controller|service|etc.] auth --project api-gateway`

**Start API Gateway From root**
`pnpm --filter api-gateway start:dev`

**_ Start DB Container _**

`docker compose --env-file .env -f infra/docker/compose.yml up -d`

Note: Docker is recommended for local development. If Docker is not available, you can use an existing local or remote PostgreSQL database for testing instead. Make sure your `DATABASE_URL` points to the correct database.
