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
    | Field  | Type | Description | Example | Required | 
    | ------------- | ------------- | ------------| ----- | ----- |
    | id  | Number  | Hotpot ID | 1 | true |
    | name  | String | Hotpot name (price?) | 139k | true |
    | ingredients | Array of object | list of ingredients in hotpot set | [{ id: 1, name: "ngao tuoi" } , { id: 2, name: "mi tom" }] |
    | imgUrl | String | Image url | image.com | 
    - `GET` /api/hotpots: Get all hotpots type
    - `GET` /api/hotpots/id: Get specified hotpot by `id` field
    - `POST` /api/hotpots: Add new hotpot type
    - `DELETE` /api/hotpots: Delete hotpot type in database

- `/api/menu`: menu  
    | Field  | Type | Description | Example | Required | 
    | ------------- | ------------- | ------------| ----- | ----- |
    | id  | Number  | Hotpot ID | 1 | true |
    | name  | String | Hotpot name (price?) | 139k | true |
    | price | String |  | 
    | imgUrl | String | Image url | image.com | 
    - `GET` /api/hotpots: Get all hotpots type
    - `GET` /api/hotpots/id: Get specified hotpot by `id` field
    - `POST` /api/hotpots: Add new hotpot type
    - `DELETE` /api/hotpots: Delete hotpot type in database
    
- `/api/ingredients`: fixed ingredients type
    | Field  | Type | Description | Example | Required | 
    | ------------- | ------------- | ------------| ----- | ----- |
    | id  | Number  | Ingredient ID | 1 | true |
    | name  | String | Ingredient name | Ngao tuoi | true |
    | quantity | Number | Ingredient quantity | 10 | true |
    | imgUrl | String | Image url | image.com | 
    - `GET` /api/ingredients: Get all ingredients
    - `GET` /api/ingredients/id: Get specified ingredient by `id` field
    - `POST` /api/ingredients: Add new ingredient 
    - `DELETE` /api/ingredients: Delete ingredient in database

- `/api/orders`: hotpot orders 
    | Field  | Type | Description | Example | Required | 
    | ------------- | ------------- | ------------| ----- | ----- |
    | _id  | String  | Order _id | 1 | true/not editable |
    | userId  | String | User phone | 0123456789 | true |
    | guestQty | Number | Number of guest | 10 | true | 
    | priceType  | Number | User phone | 0123456789 | true |
    | hotpotType | String | Hotpot name | lau chua ko cay | true | 
    - `GET` /api/orders: Get all hotpot orders
    - `GET` /api/orders/_id: Get specified hotpot orders by `id` field
    - `POST` /api/orders: Add new hotpot orders 
    - `DELETE` /api/orders: Delete hotpot order in database

- `/api/ordersId`: hotpot orders but only return Id
    - `GET` /api/ordersId: Get all hotpot orders
    - `POST` /api/ordersId: Add new hotpot orders 

- `/api/ingredientOrder`: ingredient orders
    | Field  | Type | Description | Example | Required | 
    | ------------- | ------------- | ------------| ----- | ----- |
    | _id  | String  | Order _id | 1 | true/not editable |
    | userId  | String | User phone | 0123456789 | true |
    | tableId | Number | Table ID | 5 | true | 
    | Ingredient | String | Ingredient name | Ngao tuoi | true |
    | quantity  | Number | Ingredient quantity order | 5 | true |
    | imgUrl | String | Image of ingredient | image.com |  | 
    - `GET` /api/ingredientOrders: Get all ingredient orders
    - `GET` /api/ingredientOrders/_id: Get specified ingredient orders by `id` field
    - `POST` /api/ingredientOrders: Add new ingredient order
    - `DELETE` /api/ingredientOrders: Delete ingredient order in database

- Bonus fields data
    | Field  | Type | Description | Example | 
    | ------------- | ------------- | ------------| ----- | 
    | createdAt  | String(date)  | Create time | 2021-08-03T07:45:25.257Z | 

## Development run:
- Run `yarn dev` at root folder `./` to start both server and client.
- Run `yarn start` at server folder `./server` to start server.
- Run `yarn start` at web folder `./web` to start client.
