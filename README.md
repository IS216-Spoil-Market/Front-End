# Swaply

## Quickstart

### By cloning

- Clone this template with `git clone https://github.com/IS216-Spoil-Market/Front-End.git`
- Set direction to your current remote with `git remote add origin <your_git_remote>`
- Push it to your master branch in your remote repository `git push -u origin master`

### By zip file

- Download contents as zip file
- Initialize a git repository in the root directory with `git init`
- Set direction to your current remote with `git remote add origin <your_git_remote>`
- Push it to your master branch in your remote repository `git push -u origin master`

## Further Configuration

### Installing dependencies

- Run `bun install` to install all the dependencies (This step requires you to have bun installed globally with `npm install -g bun`)
- If you wished to run the dev build, run `bun run dev`. If you wished to build for production, run `bun run build` 

Note: Replace `bun` with `npm` if you are using `npm`

### ENV

Create an `.env` file which should contain
- `VITE_DEVELOPMENT_SERVER`: Value should be URL of the development server (eg: http://localhost:5001)
- `VITE_PRODUCTION_SERVER`: Value should be URL of the production server (eg: https://back-end-04u0.onrender.com)
- `VITE_SKILL_API_KEY`: Value should be an API Key from [Skills API](https://apilayer.com/marketplace/skills-api)
- `VITE_REDIRECT_ORIGIN`: Value should be URL of the location of this application (eg: http://localhost:3000)


### Running the backend

This application relies on the backend in this [Github Repository](https://github.com/IS216-Spoil-Market/Back-End) to function properly. Please refer to the README of the backend to use it

### URL

- Hosted Application: https://front-end-gz27.onrender.com
- GitHub Remote Repository (SSH): git@github.com:IS216-Spoil-Market/Front-End.git
- GitHub Remote Repository (HTTPS): https://github.com/IS216-Spoil-Market/Front-End.git

### Additional Comments

- You will need to use your gmail account to login. Authentication is not saved in our db, rest assured your password won't be compromised. However do take note that some PIIs are being stored (name and email)
- Application instances takes time to spin up after inactivity. Please allow up to 15 minutes for both instances to warm-up for every 1st access of pages with data you have made on the day for the hosted variant (especially the pages that requires data from the backend)