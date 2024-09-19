# Setup

1. Copy the `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Edit the `.env` file and update the environment variables with your credentials.
   ```bash
   cd <path to env example file>/
   cp .env.example .env
   ```
3. Run Docker
   ```bash
   docker run --name my-postgres --env-file .env -d -p 5432:5432 -v ~/postgres-data:/var/lib/postgresql/data postgres
   ```
