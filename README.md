# Hotpot Orders
Support REST APIs and UI display for managing Hotpot Orders and Ingredients   
Created with [ReactAdmin](https://marmelab.com/react-admin/)

## Project Structure: 
- /server: REST apis server
- /web: UI display

## Requirement: 
- NodeJS
- MongoDB
- Yarn (optional)

## Config: 
- `yarn` or `npm install` at  `/server` and `/web` to install all dependencies
- Create `.env` corresponding to `.env.example` 
(Same key with `.env.example` corresponding)
- `.env  file keys: 
    - Server: 
        - NODE_ENV: environment run NodeJS (`development`/`production`)
        - PORT: server port, default `4000`
        - DB_URI: MongoDB url, default `mongodb://localhost:27017/hotpot`  
    - Web:  
        - REACT_APP_API_URL: APIs url, default `http://localhost:4000/api`

### `APIs`
- Current URL to server: `http://18.223.117.214:4000/`

- `/api/hotpots`: fixed hotpot type 
    - `GET` /api/hotpots: Get all hotpots type
    - `GET` /api/hotpots/id: Get specified hotpot by `id` field
    - `POST` /api/hotpots: Add new hotpot type
    - `DELETE` /api/hotpots: Delete hotpot type in database
    
- `/api/ingredients`: fixed ingredients type
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
    - `GET` /api/ingredientOrders: Get all ingredient orders
    - `GET` /api/ingredientOrders/id: Get specified ingredient orders by `id` field
    - `POST` /api/ingredientOrders: Add new ingredient order
    - `DELETE` /api/ingredientOrders: Delete ingredient order in database

## Development run:
- Run `yarn dev` at root folder `./` to start both server and client.
- Run `yarn start` at server folder `./server` to start server.
- Run `yarn start` at web folder `./web` to start client.
