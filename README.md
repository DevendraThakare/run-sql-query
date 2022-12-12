# Getting Started with Run SQL Query App

This project is bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Demo is available at https://run-sql-query.vercel.app

## Functionalities Implemented

- See multiple database connection list
- Add/Remove new Database connection
- Text Editor to run Query
- Copy and Run SQL command
- Added Tabs to run multiple queries
- Output SQL query result in tabular format
- Download Query result in SVG format
- Pane to show database tables and its collumns
- Search field to search available tables in database

## Framework and Plugins Used

[React](https://reactjs.org/):
A JavaScript library for building user interfaces

[Tailwind](https://tailwindui.com/):
Utility based styling framework used for styling the components.

[@uiw/react-codemirror](https://github.com/uiwjs/react-codemirror):
full-blown code-editor

[@heroicons/react](https://heroicons.com/):
Beautiful hand-crafted SVG icons

[axios](https://axios-http.com/docs/intro):
Axios is a promise-based HTTP Client for node.js and the browser. 

[react-virtual](https://github.com/TanStack/virtual)
Headless UI for virtualizing large scrollable elements list.

## Page Speed Insights

https://pagespeed.web.dev/report?url=https%3A%2F%2Frun-sql-query.vercel.app%2F&form_factor=desktop

======== Desktop ==========

Overall Prformance Score: 100

First Contentful Paint(FCP): 0.2 s
Time to Interactive: 0.5 s
Speed Index: 0.5 s
Total Blocking Time: 20 ms
Largest Contentful Paint: 0.6 s
Cumulative Layout Shift: 0

======== Mobile ==========

Overall Prformance Score: 83

First Contentful Paint(FCP): 0.8 s
Time to Interactive: 2.7 s
Speed Index: 2.0 s
Total Blocking Time: 340 ms
Largest Contentful Paint: 2.7 s
Cumulative Layout Shift: 0.177

## Optimization Done

[react-virtual](https://github.com/TanStack/virtual) is used For rendering large amount of rows  in the application without breaking the browser, or without crashing it.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
