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

### `.env file`
Default in localhost:
- In server:
NODE_ENV=development
PORT=5000
MONGO_URL=mongodb://localhost:27017/hotpot
- In Websites:
REACT_APP_API_URL=http://localhost:5000/api

### `API`
- api/hotpots: add total ingredients of menu
- api/orders: add orders list (login/tableID/Price/Numbers/...)
- api/hotpots/`ID` :show lists of a menu



## Run:
- Run `yarn dev` at root folder `./`
