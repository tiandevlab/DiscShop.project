# Online DiscShop.project

This project is an online music album shop, developed as part of the ICT Internal Placement module.

## Project Progress Log

### 2024-06-29

- Initialized Spring Boot project using Spring Initializr
- Set up project structure
- Created initial README.md
- Committed initial project setup to Git

### 2024-06-30

- Import initial Spring Boot project structure into IntelliJ
- Design a SQL script for database schema initialization
- Configure database connection in application.properties

### 2024-07-01

- Created Album entity class
- Implemented JPA annotations for ORM mapping
- Added necessary fields and methods to Album class

Entity Class Creation Details
Necessity:
The Album entity class is crucial for our project as it:

- Represents the core domain object of our music shop
- Facilitates Object-Relational Mapping (ORM) with the database
- Serves as the foundation for album-related business logic

Process:

1. Identified essential attributes for the Album entity
2. Created the Album class with appropriate fields
3. Applied JPA annotations (@Entity, @Id, @GeneratedValue, etc.)
4. Implemented constructors, getters, and setters
5. Added toString() method for debugging purposes

### 2024-07-02

- Created AlbumRepository interface
- Implemented custom query for case-insensitive title search

### 2024-07-03

- Extended AlbumRepository with additional query methods
- Learned and implemented various JPA query techniques:
    1. Method name queries (e.g., findByArtistIgnoreCase, findByReleaseYear)
    2. Custom JPQL queries using @Query annotation
    3. Named parameters in custom queries with @Param
    4. Advanced query operations:
        - Case-insensitive search
        - Date range queries
        - Aggregation functions (COUNT)
        - Sorting and pagination (for top N results)
    5. Combined criteria queries (e.g., findByArtistAndReleaseYearAfter)
- Practiced writing both derived query methods and custom JPQL queries
- Explored different ways to optimize search functionality in the repository

### 2024-07-04

- Started implementation of AlbumController using Spring Boot
- Created basic structure for the REST controller class
- Implemented getAllAlbums method to retrieve all albums
- Learning and exploring Spring Boot concepts:
    1. Understanding the role of @RestController in creating RESTful web services
    2. Studying the use of Spring Boot annotations like @GetMapping
    3. Exploring the relationship between controllers and repositories in a Spring Boot application

### 2024-07-05

- Implemented basic CRUD operations in AlbumController
- Created endpoints for GET, POST, PUT, and DELETE operations

### 2024-07-08

- Enhanced AlbumController with additional query methods:
    1. Implemented search functionality for albums by title or artist
    2. Added endpoint to find albums by specific artist
    3. Created method to retrieve albums by release year
    4. Implemented price range search for albums
    5. Added functionality to find albums by artist released after a specific year
    6. Created endpoint to count albums by artist
    7. Implemented method to get top expensive albums
- Utilized existing AlbumRepository methods to support new controller functionalities

### 2024-07-09

- Learned about and implemented ServletInitializer for traditional Servlet container deployment
- Explored Spring Boot application deployment options
- Continued to enhance understanding of Spring Boot project structure

### 2024-07-10

- Deepened understanding of entity classes and their importance in the project structure
    1. Learned how entity classes map database tables to Java objects
    2. Explored the role of annotations in defining relationships and constraints
- Updated database structure to include user management and shopping cart functionality
    1. Added new tables: users, user_roles, shopping_carts, and cart_items
    2. Included sample data in the init.sql script for testing purposes
- Implemented the User entity class
    1. Created User.java with necessary fields and annotations
    2. Established relationships with roles and shopping carts
- Gained insights into JPA (Java Persistence API) and its role in ORM (Object-Relational Mapping)

### 2024-07-11

- Created CartItem entity class
- Implemented JPA annotations for CartItem entity
- Continued learning and familiarizing with Spring Boot annotations and structure

### 2024-07-12

- Created new classes: ShoppingCart
- Learned about relationships between classes in Spring Boot:
  1. Discovered how to connect different parts of my online shop (like users, carts, and albums)
  2. Used annotations like @ManyToOne and @OneToMany to show these connections
- Started to understand how to represent a shopping cart in my application:
  1. ShoppingCart class to represent a user's cart
  2. CartItem class to represent individual items in the cart
- Practiced using JPA annotations in new classes

### 2024-07-15

- Created AlbumService interface in the service package
- Implemented AlbumServiceImpl class in the service.impl package
- Learned about the importance of separating interface from implementation
- Understood the benefits of using a service layer:
  1. Separation of concerns
  2. Improved testability
  3. Better code organization
  4. Enhanced maintainability

### 2024-07-16
- Implemented UserService interface
- Created UserServiceImpl class with CRUD operations
- Defined UserRepository interface for data access
- Integrated User service layer with existing project structure

### 2024-07-17

- Implemented CartItemRepository interface
- Created CartItemService interface and its implementation (CartItemServiceImpl)
- Learned about the importance of separating concerns in a Spring Boot application:
  1. Repository layer for data access
  2. Service layer for business logic
  3. How these layers interact with each other

### 2024-07-18

- Implemented ShoppingCartRepository interface
- Created ShoppingCartService interface and its implementation (ShoppingCartServiceImpl)
- Completed the service layer for all main entities (Album, User, CartItem, ShoppingCart)
- Strengthened understanding of the repository-service pattern in Spring Boot applications
- Practiced implementing custom finder methods and CRUD operations in repositories and services

### 2024-07-19

- Created UserController, CartItemController, and ShoppingCartController
- Implemented basic CRUD operations for each controller
- Learned about the role of controllers in handling HTTP requests and responses
- Understood the importance of RESTful API design principles
- Gained experience in structuring endpoints for different entities
- Practiced using Spring annotations such as @RestController, @RequestMapping, @GetMapping, etc.

### 2024-07-22

- Refactored the codebase to use DTOs (Data Transfer Objects) for more efficient data transfer and reduced nested responses
- Fixed user creation 500 error and improved password handling in UserDTO and UserServiceImpl
- Completed API testing for all endpoints using Postman
- Created comprehensive documentation for API tests, including request/response examples and test scenarios
- Enhanced overall code quality and API robustness through thorough testing and bug fixes

### 2024-07-26

- Started learning and understanding React concepts
- Initialized a new React frontend for the project using Create React App
- Cleaned up unnecessary files from the default React project structure
- Began exploring how to integrate React with the existing Spring Boot backend

### 2024-07-29

- Created components folder in the React project structure
- Implemented HomePage component for the main welcome section
- Updated App.js to integrate the new HomePage component
- Keep learning React's structure

### 2024-07-30

- Integrated Bootstrap into the React project
- Created Header component with navigation using React-Bootstrap
- Learned about React component structure and the use of React-Bootstrap

### 2024-08-01

- Continued learning React fundamentals
- Created Albums component to display the album catalog
- Updated App component to integrate the new Albums component
- Explored and implemented useState and useEffect hooks
- Practiced using arrow functions and async/await syntax in React components
- Still in the process of learning and understanding advanced React concepts

### 2024-08-04

- Implemented Admin component for album management
- Integrated Admin component into main App structure
- Continued learning React, with focus on useState and useEffect hooks:
- Used useState to manage component state (albums, modal visibility, current album)
- Implemented useEffect for fetching album data on component mount
- Practiced making API calls within React components
- Gained experience with React Bootstrap for styling and layout
- Enhanced understanding of CRUD operations in a React context

### 2024-08-06

- Implemented React Router for improved navigation in the application
- Updated App.js to include route configurations for Home, Albums, and Admin pages
- Modified Header.js to use React Router for navigation between pages
- Tested and verified correct routing functionality
- Confirmed that existing Album and Admin components work correctly with new routing structure

### 2024-08-07

- Redesigned the HomePage component to create a minimalist, user-friendly interface
- Implemented a clean, white background design with subtle animations for key elements
- Created a visually appealing welcome page with a clear call-to-action button
- Learned about the importance of user interface simplicity and visual hierarchy in web design
- Enhanced understanding of React component lifecycle and state management
- Practiced creating smooth transitions and animations using CSS in a React application
- Improved skills in responsive design, ensuring the homepage looks great on various devices
- Gained practical experience in using React Router for seamless navigation between pages

### 2024-08-08

- Implemented AlbumDetail component for displaying detailed information about individual albums
- Added new route in App.js for album details (/albums/:id)
- Updated Albums component to include links to individual album detail pages
- Enhanced user experience by providing detailed views for each album
- Integrated new AlbumDetail component into existing React application structure

### 2024-08-12
- Implemented ShoppingCart component with functionality to display and remove cart items
- Created Checkout component with payment method selection options
- Refined UI for ShoppingCart and Checkout pages, improving overall user experience
- Fixed issues with data fetching and display in ShoppingCart component
- Gained practical experience in React state management and component styling

### 2024-08-13

- Implemented Search component for album search functionality
- Created SearchResults component to display search results
- Updated Header component to include the Search feature
- Modified App.js to add a new route for search results

### 2024-08-15

- Refactored navigation bar to improve user interface
- Moved Admin link from main navigation to user dropdown menu
- Created new Profile component to display user information (currently using mock data)
- Implemented Wishlist component using localStorage for data persistence
- Updated App.js to include new routes for Profile and Wishlist
- Continued learning about React component structure and state management

### 2024-08-18
- Developed Wishlist component with add/remove functionality and UI for displaying items
- Enhanced AlbumDetail: integrated Wishlist toggle with visual indicators, resolved useEffect dependencies
- Improved UI with react-bootstrap-icons, addressing module resolution challenges
- Implemented temporary mock logic for Wishlist to facilitate frontend testing prior to backend completion

### 2024-08-19

- Added login endpoint to UserController
- Implemented login method in UserService
- Integrated user authentication with existing mock data
- Created Login component for user authentication
- Updated Login component to communicate with backend login endpoint

### 2024-08-20

- Implemented a comprehensive user authentication system using React Context API
- Created AuthContext for centralized authentication state management
- Added protected routes for Profile and Admin pages, ensuring only authorized users can access
- Refactored existing components (Header, Profile, Admin) to utilize the new authentication state
- Enhanced user experience with dynamic navigation based on user login status and role
- Improved overall application security by restricting access to sensitive functionalities
- Updated Login component to integrate with the new authentication system
- Added logout functionality in the Header component
- Conducted thorough testing of the new authentication flow and protected routes

### 2024-08-21

- Refined login component UI for improved user experience
- Implemented password visibility toggle feature in login form
- Aligned input fields and buttons in login interface for consistency
- Adopted Apple-inspired design elements for a modern look
- Improved responsive layout of login component

### 2024-08-22

- Completed major overhaul of shopping cart functionality
- Fixed critical issues with price display and calculations in the frontend
- Integrated album details retrieval in backend cart item service
- Implemented robust error handling and loading states in ShoppingCart component
- Conducted extensive debugging using browser developer tools to identify and resolve data flow issues
- Successfully connected frontend and backend to provide accurate cart information
- Overcame challenges in data structure mismatches between frontend expectations and backend responses
- Learned valuable lessons about the importance of consistent data models across the full stack