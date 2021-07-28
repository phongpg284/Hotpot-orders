# Hotpot Orders

## Project Structure: 
- /server: project server
- /web: project client

## Setup requirement: 
- NodeJS
- MongoDB
- Yarn (optional)

## Config: 
- Install node_modules by `yarn` or `npm install` at  `/server` and `/web`
- Create `.env` corresponding to `.env.example` 
(Same key with `.env.example` corresponding)
- Keys: 
    - Server: 
        - NODE_ENV: environment run NodeJS (`development`/`production`)
        - PORT: server port, default `5000`
        - DB_URI: MongoDB url, default `mongodb://localhost:27017/hotpot`  
    - Web:  
        - REACT_APP_API_URL: api url, default `http://localhost:3001/graphql`

## Run:
- Run `yarn dev` at root folder `./`
