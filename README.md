# React Vite Project Template

This template contains a common entry point used for a lot of React projects that I will do

## Technologies

- [React Hook Form](https://react-hook-form.com/): For handling complex form states and their necessary processing
- [Zod](https://zod.dev/): For defining schemas used for validation of forms
- [Material UI](https://mui.com/material-ui/): UI and icons Library for the application (Configuration of base theming template included!)
- [React Query by TanStack](https://tanstack.com/query/v3/docs/framework/react/overview): Handles complex network query issues such as caching, prefetching and stale data
- [Axios](https://axios-http.com/docs/intro): Provides a Promise-based framework to make network calls
- [React router](https://reactrouter.com/en/main): Provides navigation for our SPA
- [Notistack](https://notistack.com/): Snackbar provider for the application, will be generally used for error handling and success response relating to network calls or form validations

## How to use this template?

### By cloning

- Clone this template with `git clone https://github.com/Bk49/React-Template.git`
- Set direction to your current remote with `git remote add origin <your_git_remote>`
- Push it to your master branch in your remote repository `git push -u origin master`

### By zip file

- Download contents as zip file
- Initialize a git repository in the root directory with `git init`
- Set direction to your current remote with `git remote add origin <your_git_remote>`
- Push it to your master branch in your remote repository `git push -u origin master`

## Further Configuration to utilize everything in this template

### Installing dependencies

- Run `bun install` to install all the dependencies (This step requires you to have bun installed globally with `npm install -g bun`)
- If you wished to run the dev build, run `bun run dev`. If you wished to build for production, run `bun run build` 

### Styling

- Import the font files into `src/assets`
- Define the colors and fonts in `src/config/theme.ts`

### ENV

Create an `.env` file which should contain
- `VITE_DEVELOPMENT_SERVER`: Value should be URL of the development server
- `VITE_PRODUCTION_SERVER`: Value should be URL of the production server

### Router

- If the application contains authentication, create `ProtectedRoute` and `PublicRoute` under `src/pages/<folder_name_for_route_protection>`, then configure a custom hook `useProtectedRoute` and `usePublicRoute` to handle state based routing
- Add in all the necessary pages and route to `src/config/router.tsx`

# TA DA!

That should be it! 😄
