# Product Display Application
This project is a React-based application for displaying products in a responsive card layout. It uses FakeAPI to fetch product data and displays each product's image, title, price, and rating. The layout is styled with Tailwind CSS and includes a loading indicator and error handling.

## Features
Responsive product card layout using CSS Grid and Flexbox
Fetches data from FakeAPI
Displays loading indicator while data is being fetched
Error handling with user-friendly messages on data fetch failure
Shows only the first three words of each product title
## Approach
Responsive Layout: The product cards are arranged using CSS Grid, allowing for a responsive layout that adjusts to different screen sizes. Flexbox is used for card content alignment.
Data Fetching: The fetchProducts function uses axios to fetch product data from FakeAPI. While data is loading, a spinner is displayed, and any fetch errors display a user-friendly message.
Title Truncation: A helper function in ProductCard displays only the first three words of each product title, ensuring consistency in card appearance.
Error Handling: Basic error handling is implemented by setting an error state when the data fetch fails, showing a message to users instead of a blank screen.
## Challenges Faced
- Data Fetching Errors: Handling network errors gracefully required setting up setError states to inform users of issues.

- Responsive Design: Balancing grid and flex properties for different screen sizes took some adjustment, especially ensuring elements aligned and resized cleanly across breakpoints.

- Title Truncation: Truncating the product title to exactly three words required a helper function to split and join only the first three words, handling titles of various lengths.

## Installation and Running Locally
**Clone the Repository:**


git clone `https://github.com/mohatem99/Elevate-Task.git`


cd project-name



**Install Dependencies:**


```npm install```


**Run the Application:**

```npm run dev```


## Technologies Used
React: For the user interface and component structure.

Vite: To build and serve the application.

Tailwind CSS: For responsive styling.

Axios: For making HTTP requests to the FakeAPI.
Acknowledgments

