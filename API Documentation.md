# User Endpoints

## `POST /api/user/register`
registers a new user to the system

### Parameters
- `name` (required): name of the registered user.
- `password` (required): the password for the account being created. (must be more than 7 characters) 
- `email` (required): the email for the registered user. (must be unique)

### Response
Returns a JSON object with the following properties
- `success`: returns true if user was created successfully.
- `token`: Creates the JWT Token for the newly created user to validate the user's identity when sending requests to the server. Formed by signing the user's ID using the JWT Secret on the server (default secret is "random#secret").

### **Example**
### Request
```json
{
	"name" : "basmaa",
	"email" : "basma@talaat.me",
	"password": "12345678"
}
```

### Response
```json
{
	"success": true,
	"token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

### Errors:
- `{"success" : "false" , "message":"User already exists"}`: when the email of the user already exists.
- `{"success" : "false" , "message":"Please enter a valid email"}`: when the email's format isn't valid.
- `{"success" : "false" , "message":"Please enter a strong password"}`: when the password's length is less than 8 characters.
- `{"success" : "false" , "message":"Error"}`: an unexpected error occurred on the server.

<br><br>

## `POST /api/user/login`
logs in an existing user to their account.

### Parameters
- `email` (required): the email for the user's account. 
- `password` (required): the password which was created for that account.

### Response
Returns a JSON object with the following properties
- `success`: returns `true` if user was created successfully.
- `token`: Creates the JWT Token for the logged in user. Formed by signing the user's ID using the JWT Secret on the server (default secret is "random#secret").

### **Example**
### Request
```json
{
	"email" : "sohaila@gmail.me",
	"password": "bestC0d3r"
}
```

### Response
```json
{
	"success": true,
	"token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

### Errors:
- `{"success" : "false" , "message":"User doesn't exist"}`: when there's no account with the provided email registered on the system.
- `{"success" : "false" , "message":"Invalid credentials"}`: when the password is incorrect.
- `{"success" : "false" , "message":"Error"}`: an unexpected error occurred on the server.




---

# Food Endpoints

## `POST /api/food/add`
adds a new food item to the menu.
### Parameters
- `name` (required): The name of the food item.
- `description` (required): Brief details about the food item.
- `price` (required): The cost of the food item.
- `category` (required): The food category to which the item belongs.
- `image` (required): URL or path to an image of the food item.

### Response
Returns a JSON object with the following properties
- `success`: returns `true` when food is added successfully.
- `message`: returns "Food Added" when food is added.

### **Example**
### Request
```json
{
  "name": "Mr. Salta3 Burger",
  "description": "A mouthwatering burger with juicy beef patty, fresh lettuce, ripe tomatoes, and melted cheese, sandwiched between soft sesame seed buns.",
  "price": 9.99,
  "category": "Burgers",
  "image": "https://example.com/delicious-burger-image.jpg"
}

```

### Response
```json
{
	"success": true,
	"message" : "Food Added"
}
```

### Errors:
- `{"success" : "false" , "message":"Error"}`: an unexpected error occurred on the server.

<br><br>
## `GET /api/food/list`
lists all food items.
### Parameters
- `name` (required): The name of the food item.
- `description` (required): Brief details about the food item.
- `price` (required): The cost of the food item.
- `category` (required): The food category to which the item belongs.
- `image` (required): URL or path to an image of the food item.

### Response
Returns a JSON object with the following properties
- `success`: returns `true` when food is added successfully.
- `data`: An array of food objects. each with the following properties:
	- `name`: The name of the food item.
	- `description`: Brief details about the food item.
	- `price`: The cost of the food item.
	- `category`: The food category to which the item belongs.
	- `image`: URL or path to an image of the food item.

### **Example**
### Request
```url
GET /api/food/list
```

### Response
```json
{
  "success": true,
  "data": [
    {
      "name": "Krabby Patty",
      "description": "The famous sandwich from the Krusty Krab, made with a secret recipe beef patty, fresh lettuce, tomato, cheese, pickles, and Krabby Patty sauce.",
      "price": 5.99,
      "category": "Burgers",
      "image": "https://example.com/krabby-patty.jpg"
    },
    {
      "name": "Kelp Shake",
      "description": "A refreshing shake made with kelp juice, ice, and a hint of sweetness.",
      "price": 3.99,
      "category": "Drinks",
      "image": "https://example.com/kelp-shake.jpg"
    },
    {
      "name": "Seaweed Salad",
      "description": "A healthy salad made with fresh seaweed, cucumber, and tangy dressing.",
      "price": 4.99,
      "category": "Salads",
      "image": "https://example.com/seaweed-salad.jpg"
    }
  ]
}

```

### Errors:
- `{"success" : "false" , "message":"Error"}`: an unexpected error occurred on the server.

<br><br>
## `POST /api/food/delete`
deletes food item from the menu.
### Parameters
- `id` (required): The id of the food item.

### Response
Returns a JSON object with the following properties
- `success`: returns `true` when food is added successfully.
- `message`: returns "Food Removed" when food is deleted.

### **Example**
### Request
```json
{
  "name": "ca0e58b427d24b128b8d76b8"
}
```

### Response
```json
{
	"success": true,
	"message" : "Food Removed"
}
```

### Errors:
- `{"success" : "false" , "message":"Error"}`: food's ID doesn't exist or an unexpected error occurred on the server.


---



# Order Endpoints
## `POST /api/order/place`
places an order for the logged in user.
### Parameters
- `userId`: Unique identifier of the ordering user.
- `items`: Identifier of the ordered items.
- `amount`: Quantity of the ordered item.
- `address`: Delivery address for the order.

### Response
Returns a JSON object with the following properties:
- `success`: returns `true` when order is placed successfully.
- `message`: returns "Order created successfully" when order is placed successfully.

### **Example**
### Request
```json
{
  "userId": "66Jeb3eea8cbf7a6d3b9d43d",
  "address": {
    "firstName": "Basma",
    "lastName": "Talaat",
    "email": "basma.mohamed@example.com",
    "street": "456 Elm Street",
    "city": "Gaza",
    "state": "Gaza Strip",
    "zipcode": "12345",
    "country": "Palestine",
    "phone": "+970123456789"
  },
  "items": [
    {
      "_id": "1",
      "name": "Chicken Shwarma Pizza",
      "image": "/src/assets/best-pizza.jpg",
      "price": 12,
      "description": "Fresh salad with cucumbers, tomatoes, onions, olives, and feta cheese.",
      "category": "pizza",
      "quantity": 1
    }
  ],
  "amount": 12,
  "status": "Order Placed",
  "date": "2024-05-11T09:00:00.000Z",
  "payment": true
}


```

### Response
```json
{
	"success": true,
	"message" : "Order created successfully"
}
```

### Errors:
- `{"success" : "false" , "message":"Error"}`: an unexpected error occurred on the server.

<br><br>
## `GET /api/order/list`
lists all orders submitted on the system.
### Parameters
- user's token (required): to check if he's authorized to perform this action (admins only).

### Response
Returns a JSON object with the following properties
- `success`: returns `true` if user was authorized and request was processed correctly.
- `orders`: An array of all order objects representing users purchases. Each order includes:
	- `userId`: Unique identifier of the user placing the order.
	- `items`: An array of food items in the order, each with properties such as `_id`, `name`, `image`, `price`, `description`, `category`, and `quantity`.
	- `amount`: Total cost of the order.
	- `address`: Shipping address details including `firstName`, `lastName`, `email`, `street`, `city`, `state`, `zipcode`, `country`, and `phone`.
	- `status`: Current status of the order, defaulting to "Food Processing".
	- `date`: Date and time of order placement, defaulting to the current date and time.
	- `payment`: Payment status, defaulting to `false`.

### Example
### Request
```http
GET /api/order/list
```

### Response
```json
{
	{
  "orders": [
    {
      "userId": "66Jeb3eea8cbf7a6d3b9d43d",
      "items": [
        {
          "_id": "1",
          "name": "Chicken Shwarma Pizza",
          "image": "/src/assets/best-pizza.jpg",
          "price": 12,
          "description": "Fresh salad with cucumbers, tomatoes, onions, olives, and feta cheese.",
          "category": "pizza",
          "quantity": 1
        }
      ],
      "amount": 12,
      "address": {
        "firstName": "Basma",
        "lastName": "Talaat",
        "email": "basma.mohamed@example.com",
        "street": "456 Elm Street",
        "city": "Gaza",
        "state": "Gaza Strip",
        "zipcode": "12345",
        "country": "Palestine",
        "phone": "+970123456789"
      },
      "status": "Order Placed",
      "date": "2024-05-11T09:00:00.000Z",
      "payment": true
    },
    {
      "userId": "66Jeb3eea8cbf7a6d3b9d43d",
      "items": [
        {
          "_id": "2",
          "name": "Margherita Pizza",
          "image": "/src/assets/margherita-pizza.jpg",
          "price": 14,
          "description": "Classic pizza with tomato sauce, mozzarella cheese, and fresh basil.",
          "category": "pizza",
          "quantity": 3
        }
      ],
      "amount": 42,
      "address": {
        "firstName": "Basma",
        "lastName": "Talaat",
        "email": "basma.mohamed@example.com",
        "street": "456 Elm Street",
        "city": "Gaza",
        "state": "Gaza Strip",
        "zipcode": "12345",
        "country": "Palestine",
        "phone": "+970123456789"
      },
      "status": "Preparing",
      "date": "2024-05-11T10:30:00.000Z",
      "payment": true
    },
    {
      "userId": "66Jeb3eea8cbf7a6d3b9d43d",
      "items": [
        {
          "_id": "5",
          "name": "Chocolate Cake",
          "image": "/src/assets/chocolate-cake.jpg",
          "price": 18,
          "description": "Decadent chocolate cake with chocolate frosting and sprinkles.",
          "category": "dessert",
          "quantity": 2
        }
      ],
      "amount": 36,
      "address": {
        "firstName": "Basma",
        "lastName": "Talaat",
        "email": "basma.mohamed@example.com",
        "street": "456 Elm Street",
        "city": "Gaza",
        "state": "Gaza Strip",
        "zipcode": "12345",
        "country": "Palestine",
        "phone": "+970123456789"
      },
      "status": "Out for Delivery",
      "date": "2024-05-11T12:00:00.000Z",
      "payment": true
    }
  ]
}

}
```

### Errors:
- `{"success" : "false" , "message":"Error"}`: indicates every other unusual errors.

<br><br>
## `POST /api/order/update`
updates the status of an order.
### Parameters
- `orderid` (required): The id of the order to be updated.
- `status`(required): updated status of order. 

### Response
Returns a JSON object with the following properties
- `success`: returns `true` when status is updated successfully.
- `message`: returns "Status Updated" when status is updated successfully.

### **Example**
### Request
```json
{
	"orderid" : "660be5d636ac75aøcb1a6e8c",
	"status": "Out for delivery"
}
```

### Response
```json
{
	"success": true,
	"message" : "Order updated successfully"
}
```

### Errors:
- `{"success" : "false" , "message":"Error"}`: food's ID doesn't exist or an unexpected error occurred on the server.

<br><br>
## `POST /api/order/userorders`
lists the orders of the logged-in user.
### Parameters
- `id` (required): The id of the user requesting to see their orders.
- user's token in the headers.
### Response
Returns a JSON object with the following properties
- `success`: returns `true` when food is added successfully.
- `data`: An array of orders objects. each with the following properties:
	- `userId`: Unique identifier of the user placing the order.
	- `items`: An array of food items in the order, each with properties such as `_id`, `name`, `image`, `price`, `description`, `category`, and `quantity`.
	- `amount`: Total cost of the order.
	- `address`: Shipping address details including `firstName`, `lastName`, `email`, `street`, `city`, `state`, `zipcode`, `country`, and `phone`.
	- `status`: Current status of the order, defaulting to "Food Processing".
	- `date`: Date and time of order placement, defaulting to the current date and time.
	- `payment`: Payment status, defaulting to `false`.

### **Example**
### Request
```json
{
	"userId" : "66Jeb3eea8cbf7a6d3b9d43d"
}
```

### Response
```json
{
	{
  "orders": [
    {
      "userId": "66Jeb3eea8cbf7a6d3b9d43d",
      "items": [
        {
          "_id": "1",
          "name": "Greek Salad",
          "image": "/src/assets/greek-salad.jpg",
          "price": 12,
          "description": "Fresh salad with cucumbers, tomatoes, onions, olives, and feta cheese.",
          "category": "salad",
          "quantity": 1
        }
      ],
      "amount": 12,
      "address": {
        "firstName": "Basant",
        "lastName": "Mohamed",
        "email": "basant.mohamed@example.com",
        "street": "456 Elm Street",
        "city": "Gaza",
        "state": "Gaza Strip",
        "zipcode": "12345",
        "country": "Palestine",
        "phone": "+970123456789"
      },
      "status": "Order Placed",
      "date": "2024-05-11T09:00:00.000Z",
      "payment": true
    },
    {
      "userId": "66Jeb3eea8cbf7a6d3b9d43d",
      "items": [
        {
          "_id": "2",
          "name": "Margherita Pizza",
          "image": "/src/assets/margherita-pizza.jpg",
          "price": 14,
          "description": "Classic pizza with tomato sauce, mozzarella cheese, and fresh basil.",
          "category": "pizza",
          "quantity": 3
        }
      ],
      "amount": 42,
      "address": {
        "firstName": "Basant",
        "lastName": "Mohamed",
        "email": "basant.mohamed@example.com",
        "street": "456 Elm Street",
        "city": "Gaza",
        "state": "Gaza Strip",
        "zipcode": "12345",
        "country": "Palestine",
        "phone": "+970123456789"
      },
      "status": "Preparing",
      "date": "2024-05-11T10:30:00.000Z",
      "payment": true
    },
    {
      "userId": "66Jeb3eea8cbf7a6d3b9d43d",
      "items": [
        {
          "_id": "3",
          "name": "Chocolate Cake",
          "image": "/src/assets/chocolate-cake.jpg",
          "price": 18,
          "description": "Decadent chocolate cake with chocolate frosting and sprinkles.",
          "category": "dessert",
          "quantity": 2
        }
      ],
      "amount": 36,
      "address": {
        "firstName": "Basant",
        "lastName": "Mohamed",
        "email": "basant.mohamed@example.com",
        "street": "456 Elm Street",
        "city": "Gaza",
        "state": "Gaza Strip",
        "zipcode": "12345",
        "country": "Palestine",
        "phone": "+970123456789"
      },
      "status": "Out for Delivery",
      "date": "2024-05-11T12:00:00.000Z",
      "payment": true
    }
  ]
}

}
```

### Errors:
- `{"success" : "false" , "message":"Error"}`: food's ID doesn't exist or an unexpected error occurred on the server.


