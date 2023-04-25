# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Introduction 

I developed a React-based front-end framework for the website, which is divided into two components for each major part, namely table head and table body. To track the state of the data, I used two useState hooks and a boolean state to conditionally render the data in the desired format.

To initially render all the data present in the database, I used useEffect. For seamless communication with the backend, I utilized Axios and asynchronous functions to handle promises in the application.

The app can present different data based on the user's query, without using routing in the front end, resulting in a quick response time. The UI is simple yet effective, as I utilized Material UI for simplicity and efficient representation of data in a table format.


## Key Information 

1) Query One - Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.

2) Query two - Male Users which have phone price greater than 10,000.

3) Query three - Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name 

4) Query Four - Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit

5) Query five - Show the data of top 10 cities which have the highest number of users and their average income

6) app runs on port 3000 localy 


## how to run the app 

1) Clone the app. 
2) Initialize npm. 
3) Install all dependencies. 
4) Rum command {npm start}.
