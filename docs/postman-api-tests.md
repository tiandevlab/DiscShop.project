# Postman Manual Testing Plan for DiscShop Pro API

## 1. Albums

### 1.1 Get All Albums
- **Method**: GET
- **URL**: `http://localhost:8080/discshoppro/albums`
- **Expected Result**: List of all albums

### 1.2 Get Album by ID
- **Method**: GET
- **URL**: `http://localhost:8080/discshoppro/albums/{id}`
- **Example**: `http://localhost:8080/discshoppro/albums/1`
- **Expected Result**: Details of the album with ID 1

### 1.3 Create New Album
- **Method**: POST
- **URL**: `http://localhost:8080/discshoppro/albums`
- **Body**:
  ```json
  {
    "title": "New Album",
    "artist": "New Artist",
    "releaseYear": 2024,
    "coverImageName": "newalbum.jpg",
    "price": 19.99,
    "copyright": "New Label"
  }
  ```
- **Expected Result**: Created album object with assigned ID

### 1.4 Update Album
- **Method**: PUT
- **URL**: `http://localhost:8080/discshoppro/albums/{id}`
- **Example**: `http://localhost:8080/discshoppro/albums/1`
- **Body**:
  ```json
  {
    "title": "Updated Album Title",
    "artist": "Updated Artist",
    "releaseYear": 2025,
    "coverImageName": "updated.jpg",
    "price": 24.99,
    "copyright": "Updated Label"
  }
  ```
- **Expected Result**: Updated album object

### 1.5 Delete Album
- **Method**: DELETE
- **URL**: `http://localhost:8080/discshoppro/albums/{id}`
- **Example**: `http://localhost:8080/discshoppro/albums/1`
- **Expected Result**: Successful deletion message or status

### 1.6 Search Albums
- **Method**: GET
- **URL**: `http://localhost:8080/discshoppro/albums/search?searchTerm={term}`
- **Example**: `http://localhost:8080/discshoppro/albums/search?searchTerm=Rock`
- **Expected Result**: List of albums matching the search term

### 1.7 Search Albums by Title
- **Method**: GET
- **URL**: `http://localhost:8080/discshoppro/albums/searchTitle?searchTerm={term}`
- **Example**: `http://localhost:8080/discshoppro/albums/searchTitle?searchTerm=Wall`
- **Expected Result**: List of albums with titles matching the search term

### 1.8 Get Albums by Artist
- **Method**: GET
- **URL**: `http://localhost:8080/discshoppro/albums/artist?artist={artistName}`
- **Example**: `http://localhost:8080/discshoppro/albums/artist?artist=The Smile`
- **Expected Result**: List of albums by the specified artist

### 1.9 Get Albums by Year
- **Method**: GET
- **URL**: `http://localhost:8080/discshoppro/albums/year/{year}`
- **Example**: `http://localhost:8080/discshoppro/albums/year/2024`
- **Expected Result**: List of albums released in 2024

### 1.10 Get Albums by Price Range
- **Method**: GET
- **URL**: `http://localhost:8080/discshoppro/albums/price?minPrice={min}&maxPrice={max}`
- **Example**: `http://localhost:8080/discshoppro/albums/price?minPrice=20&maxPrice=30`
- **Expected Result**: List of albums within the specified price range

### 1.11 Get Albums by Artist After Year
- **Method**: GET
- **URL**: `http://localhost:8080/discshoppro/albums/artist/{artist}/after/{year}`
- **Example**: `http://localhost:8080/discshoppro/albums/artist/Radiohead/after/2000`
- **Expected Result**: List of Radiohead albums released after 2000

### 1.12 Count Albums by Artist
- **Method**: GET
- **URL**: `http://localhost:8080/discshoppro/albums/count/{artist}`
- **Example**: `http://localhost:8080/discshoppro/albums/count/The Smile`
- **Expected Result**: Count of albums by The Smile

### 1.13 Get Top Expensive Albums
- **Method**: GET
- **URL**: `http://localhost:8080/discshoppro/albums/top-expensive?limit={limit}`
- **Example**: `http://localhost:8080/discshoppro/albums/top-expensive?limit=5`
- **Expected Result**: List of the top 5 most expensive albums

## 2. Users

### 2.1 Get All Users
- **Method**: GET
- **URL**: `http://localhost:8080/api/users`
- **Expected Result**: List of all users

### 2.2 Get User by ID
- **Method**: GET
- **URL**: `http://localhost:8080/api/users/{id}`
- **Example**: `http://localhost:8080/api/users/1`
- **Expected Result**: Details of the user with ID 1

### 2.3 Create New User
- **Method**: POST
- **URL**: `http://localhost:8080/api/users`
- **Body**:
  ```json
  {
    "username": "newuser",
    "password": "password123",
    "email": "newuser@example.com",
    "roles": ["USER"]
  }
  ```
- **Expected Result**: Created user object with assigned ID

### 2.4 Update User
- **Method**: PUT
- **URL**: `http://localhost:8080/api/users/{id}`
- **Example**: `http://localhost:8080/api/users/1`
- **Body**:
  ```json
  {
    "username": "updateduser",
    "password": "newpassword",
    "email": "updated@example.com",
    "roles": ["USER", "ADMIN"]
  }
  ```
- **Expected Result**: Updated user object

### 2.5 Delete User
- **Method**: DELETE
- **URL**: `http://localhost:8080/api/users/{id}`
- **Example**: `http://localhost:8080/api/users/1`
- **Expected Result**: Successful deletion message or status

## 3. Shopping Carts

### 3.1 Get All Shopping Carts
- **Method**: GET
- **URL**: `http://localhost:8080/api/shopping-carts`
- **Expected Result**: List of all shopping carts

### 3.2 Get Shopping Cart by ID
- **Method**: GET
- **URL**: `http://localhost:8080/api/shopping-carts/{id}`
- **Example**: `http://localhost:8080/api/shopping-carts/1`
- **Expected Result**: Details of the shopping cart with ID 1

### 3.3 Create New Shopping Cart
- **Method**: POST
- **URL**: `http://localhost:8080/api/shopping-carts`
- **Body**:
  ```json
  {
    "userId": 1,
    "createdAt": "2024-07-22T10:00:00Z"
  }
  ```
- **Expected Result**: Created shopping cart object with assigned ID

### 3.4 Update Shopping Cart
- **Method**: PUT
- **URL**: `http://localhost:8080/api/shopping-carts/{id}`
- **Example**: `http://localhost:8080/api/shopping-carts/1`
- **Body**:
  ```json
  {
    "userId": 1,
    "createdAt": "2024-07-22T11:00:00Z"
  }
  ```
- **Expected Result**: Updated shopping cart object

### 3.5 Delete Shopping Cart
- **Method**: DELETE
- **URL**: `http://localhost:8080/api/shopping-carts/{id}`
- **Example**: `http://localhost:8080/api/shopping-carts/1`
- **Expected Result**: Successful deletion message or status

### 3.6 Get Shopping Carts by User ID
- **Method**: GET
- **URL**: `http://localhost:8080/api/shopping-carts/user/{userId}`
- **Example**: `http://localhost:8080/api/shopping-carts/user/1`
- **Expected Result**: List of shopping carts for user with ID 1

## 4. Cart Items

### 4.1 Get All Cart Items
- **Method**: GET
- **URL**: `http://localhost:8080/api/cart-items`
- **Expected Result**: List of all cart items

### 4.2 Get Cart Item by ID
- **Method**: GET
- **URL**: `http://localhost:8080/api/cart-items/{id}`
- **Example**: `http://localhost:8080/api/cart-items/1`
- **Expected Result**: Details of the cart item with ID 1

### 4.3 Create New Cart Item
- **Method**: POST
- **URL**: `http://localhost:8080/api/cart-items`
- **Body**:
  ```json
  {
    "cartId": 1,
    "albumId": 1,
    "quantity": 2
  }
  ```
- **Expected Result**: Created cart item object with assigned ID

### 4.4 Update Cart Item
- **Method**: PUT
- **URL**: `http://localhost:8080/api/cart-items/{id}`
- **Example**: `http://localhost:8080/api/cart-items/1`
- **Body**:
  ```json
  {
    "cartId": 1,
    "albumId": 1,
    "quantity": 3
  }
  ```
- **Expected Result**: Updated cart item object

### 4.5 Delete Cart Item
- **Method**: DELETE
- **URL**: `http://localhost:8080/api/cart-items/{id}`
- **Example**: `http://localhost:8080/api/cart-items/1`
- **Expected Result**: Successful deletion message or status

### 4.6 Get Cart Items by Cart ID
- **Method**: GET
- **URL**: `http://localhost:8080/api/cart-items/cart/{cartId}`
- **Example**: `http://localhost:8080/api/cart-items/cart/1`
- **Expected Result**: List of cart items for the shopping cart with ID 1
