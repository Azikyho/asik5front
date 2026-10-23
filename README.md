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

<img width="1124" height="494" alt="image" src="https://github.com/user-attachments/assets/b384e4d8-7f57-4772-8718-7ea334843a02" />

### Task 2. Arithmetic Calculations

JavaScript dynamically calculates the user's current age (`currentYear - birthYear`), age in months (`age * 12`), and the total number of hobbies (`hobbies.length`). These values are displayed on the page and printed in the browser console.

<img width="1110" height="478" alt="image" src="https://github.com/user-attachments/assets/8cdcd1f0-5eda-4ad8-955b-cf169cbff5eb" />

## Part 2. Form Input & Event Responses

### Task 3. HTML Form Setup

A form with inputs for Username, Birth Year, developer checkbox, and a "Create / Update Profile" submit button styled with Bootstrap classes (`form-label`, `form-control`, `btn-dark`).

### Task 4. Event Listener

A `submit` event listener captures the user's input values, updates the `userProfile` object, and recalculates the displayed profile metrics on the page.

<img width="2218" height="1130" alt="image" src="https://github.com/user-attachments/assets/3a536f59-bcf5-4500-abfb-ea5dede84310" />
<img width="2220" height="1126" alt="image" src="https://github.com/user-attachments/assets/4fccc64a-f67e-4351-906b-9611bd9a6a80" />

## Part 3. DOM List Manipulation

### Task 5. Creating & Removing Elements

An unordered list (`<ul>`) displays the user's hobbies and tasks:

- **Add Item** button creates a new `<li>` element with the user's input and appends it to the list.
- **Remove Item** button deletes the last `<li>` item from the list.

<img width="2284" height="678" alt="image" src="https://github.com/user-attachments/assets/38efe6b3-f664-4f81-98f2-d8a8c6853778" />
<img width="2296" height="550" alt="image" src="https://github.com/user-attachments/assets/e13798e9-03a1-49d5-9cab-0192f45b6b13" />
<img width="2276" height="622" alt="image" src="https://github.com/user-attachments/assets/9c7a7b2a-129e-4c36-8e25-7f2f657b1cc5" />
<img width="2314" height="522" alt="image" src="https://github.com/user-attachments/assets/ccd070df-692e-48fa-baca-89bee9f0ef64" />

## Summary of Work Process

I built the page layout using the same grid structure, dark navigation header, and white cards as in Assignment 4. Then I created the `userProfile` object in `script.js`, implemented dynamic age and hobby calculations, connected the form with `addEventListener` to update the object on submit, and added DOM manipulation logic (`createElement`, `appendChild`, `removeChild`) to add and remove list items dynamically.
