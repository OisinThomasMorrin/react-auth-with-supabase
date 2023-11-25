# Overview
This project is the website half of a demonstration of how to use a website to share authentication with a browser extension, and uses supabase and js-cookies.

# React + Vite

This is based on the template that provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Supabase Create React App User Management

This example will set you up for a very common situation: users can sign up with a magic link.

This demonstrates how to use:

- User signups using Supabase [Auth](https://supabase.com/auth).
- Frontend using [Create Vite](https://vitejs.dev/guide/).

## Technologies used

- Frontend:
  - [Create Vite](https://vitejs.dev/guide/) - a Vite toolchain.
  - [Supabase.js](https://supabase.com/docs/library/getting-started) for user management and realtime data syncing.
- Backend:
  - [supabase.com/dashboard](https://supabase.com/dashboard/): hosted Postgres database with restful API for usage with Supabase.js.

## Build from scratch

### 1. Create new project

Sign up to Supabase - [https://supabase.com/dashboard](https://supabase.com/dashboard) and create a new project. Wait for your database to start.


### 2. Get the URL and Key

Go to the Project Settings (the cog icon), open the API tab, and find your API URL and `anon` key, you'll need these in the next step.

The `anon` key is your client-side API key. It allows "anonymous access" to your database, until the user has logged in. Once they have logged in, the keys will switch to the user's own login token. This enables row level security for your data. Read more about this [below](#postgres-row-level-security).

![image](https://user-images.githubusercontent.com/10214025/88916245-528c2680-d298-11ea-8a71-708f93e1ce4f.png)

**_NOTE_**: The `service_role` key has full access to your data, bypassing any security policies. These keys have to be kept secret and are meant to be used in server environments and never on a client or browser.

### 3. Env vars

Create a file in this folder `.env`

```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

Populate this file with your URL and Key.

### 4. Run the application

Install the dependencies: `pnpm i`

Run the application: `pnpm run start`. Open your browser to `http://localhost:5173/` and you are ready to go 🚀.

