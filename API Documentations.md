# User Endpoints

## `POST /api/user/register`
registers a new user to the system

### Parameters
- `name` (required): name of the registered user.
- `password` (required): the password for the account being created. (must be more than 7 characters) 
- `email` (required): the email for the registered user. (must be unique)

### Response
Returns a JSON object with the following properties
res.json({success:true,token})
- `success`: returns true if user was created successfully.
- `token`: Creates the JWT Token for the newly created user to validate the user's identity when sending requests to the server. Formed by signing the user's ID using the JWT Secret on the server (default secret is "random#secret").

### **Example**
### Request
```json
{
	"name" : "basmaa",
	"email" : "basma@hotmail.me",
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



## `POST /api/user/login`
logs in an existing user to their account.

### Parameters
- `email` (required): the email for the user's account. 
- `password` (required): the password which was created for that account.

### Response
Returns a JSON object with the following properties
res.json({success:true,token})
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
Returns a JSON object with the following properties
- `success`: returns `true` when order is placed successfully.
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





## `GET /api/order/list`
lists the orders of the logged-in user.

### Parameters
- `email` (required): the email for the user's account. 
- `password` (required): the password which was created for that account.

### Response
Returns a JSON object with the following properties
res.json({success:true,token})
- `success`: returns `true` if user was created successfully.
- `token`: Creates the JWT Token for the logged in user. Formed by signing the user's ID using the JWT Secret on the server (default secret is "random#secret").

### Example
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
- `{"success" : "false" , "message":"Error"}`: indicates every other unusual errors.

## `POST /api/order/update`
updates an order for the logged-in user.

## `POST /api/order/userorders`
lists the orders of the logged-in user.
## 
![[Pasted image 20240511093415.png]]