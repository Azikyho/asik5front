# Assignment 5 — JavaScript Basics (DOM Manipulation & Events)

**Name:** Azamat Askar  
**Group:** IT-2503  

## About the Project

This project introduces the fundamentals of JavaScript, focusing on the Document Object Model (DOM), objects, arithmetic calculations, and event handling. The design follows my previous assignment layout with a dark header, a grey background, and white content blocks.

## Technologies

- HTML5
- CSS3
- Bootstrap 5
- JavaScript

## Part 1. Profile Object, Data Types & Arithmetic

### Task 1. The Personal Info Object

Created a `const userProfile` object that stores different data types:

- `name` (`string`)
- `birthYear` (`number`)
- `isDeveloper` (`boolean`)
- `hobbies` (`array`)

![Task 1 Screenshot](screenshots/task1.png)

### Task 2. Arithmetic Calculations

JavaScript dynamically calculates the user's current age (`currentYear - birthYear`), age in months (`age * 12`), and the total number of hobbies (`hobbies.length`). These values are displayed on the page and printed in the browser console.

![Task 2 Screenshot](screenshots/task2.png)

## Part 2. Form Input & Event Responses

### Task 3. HTML Form Setup

A form with inputs for Username, Birth Year, developer checkbox, and a "Create / Update Profile" submit button styled with Bootstrap classes (`form-label`, `form-control`, `btn-dark`).

### Task 4. Event Listener

A `submit` event listener captures the user's input values, updates the `userProfile` object, and recalculates the displayed profile metrics on the page.

![Task 3 and 4 Screenshot](screenshots/task3_4.png)

## Part 3. DOM List Manipulation

### Task 5. Creating & Removing Elements

An unordered list (`<ul>`) displays the user's hobbies and tasks:

- **Add Item** button creates a new `<li>` element with the user's input and appends it to the list.
- **Remove Item** button deletes the last `<li>` item from the list.

![Task 5 Screenshot](screenshots/task5.png)

## Summary of Work Process

I built the page layout using the same grid structure, dark navigation header, and white cards as in Assignment 4. Then I created the `userProfile` object in `script.js`, implemented dynamic age and hobby calculations, connected the form with `addEventListener` to update the object on submit, and added DOM manipulation logic (`createElement`, `appendChild`, `removeChild`) to add and remove list items dynamically.
