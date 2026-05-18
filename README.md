# Stopwatch App Using useRef Hook

This project is a simple Stopwatch Application built using React and Vite.  
It demonstrates the practical usage of the `useRef` Hook along with `useState` for handling timers and intervals efficiently.

---

## Features

- Start Stopwatch
- Stop Stopwatch
- Reset Stopwatch
- Real-Time Timer Updates
- Beginner Friendly React Project
- Clean and Simple UI

---

## Technologies Used

- React JS
- Vite
- JavaScript
- CSS

---

## React Hooks Used

### useState()

Used to store and update stopwatch time.

```jsx
const [time, setTime] = useState(0);
```

### useRef()

Used to store interval reference without re-rendering the component.

```jsx
const intervalRef = useRef(null);
```

---

## Project Structure

```bash
src/
│
├── Components/
│   └── Stopwatch.jsx
│
├── App.jsx
├── App.css
├── main.jsx
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/rajnish0504/YourRepoName.git
```

Go to project folder:

```bash
cd YourRepoName
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## Learning Outcome

Through this project, I learned:

- React Functional Components
- Managing State using useState
- Storing Mutable Values using useRef
- Handling Timers in React
- Event Handling
- Component Structure in React

---

## Author

Rajnish Singh  
Software Developer Intern
