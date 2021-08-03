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
        - REACT_APP_API_URL: api url, default `http://localhost:5000/api`

### `.env file`
Default in localhost:
- In server:
NODE_ENV=development
PORT=5000
MONGO_URL=mongodb://localhost:27017/hotpot
- In Websites:
REACT_APP_API_URL=http://localhost:5000/api

### `APIs`
- Current URL to server: `http://18.223.117.214:4000/`

- `/api/hotpots`: fixed hotpot type with `ingredients` fields lists array of ingredients in that hotpots type 
    - `GET` /api/hotpots: Get all hotpots type
    - `GET` /api/hotpots/id: Get specified hotpot by `id` field
    - `POST` /api/hotpots: Add new hotpot type
    - `DELETE` /api/hotpots: Delete hotpot type in database
    
- `/api/ingredients`: fixed ingredients with `id`, `name` and `quantity` fields
    - `GET` /api/ingredients: Get all ingredients
    - `GET` /api/ingredients/id: Get specified ingredient by `id` field
    - `POST` /api/ingredients: Add new ingredient 
    - `DELETE` /api/ingredients: Delete ingredient in database

- `/api/orders`: hotpot orders 
    - `GET` /api/orders: Get all hotpot orders
    - `GET` /api/orders/id: Get specified hotpot orders by `id` field
    - `POST` /api/orders: Add new hotpot orders 
    - `DELETE` /api/orders: Delete hotpot order in database

- `/api/ingredientOrder`: ingredient orders
    - `GET` /api/ingredientOrder: Get all ingredient orders
    - `GET` /api/ingredientOrder/id: Get specified ingredient orders by `id` field
    - `POST` /api/ingredientOrder: Add new ingredient order
    - `DELETE` /api/ingredientOrder: Delete ingredient order in database

## Run:
- Run `yarn dev` at root folder `./`
