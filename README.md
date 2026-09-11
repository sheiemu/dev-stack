# Dev Stack

> Explore modern development technologies and build your perfect dev stack.

Dev Stack is a React web app where you can browse popular tools and technologies used in modern software development, add them to your personal stack, and manage your selections — all in one clean interface.

---

## Technologies Used

| Technology | Purpose |
|---|---|
| React.js | UI components and state management |
| Vite | Fast build tool and dev server |
| Tailwind CSS | Utility-first styling |
| Plain CSS | Custom responsive layout |
| React-Toastify | Toast notifications |
| JSON | Local technology data source |

---

## 3 Key Features

### 1. Explore Technologies
Browse 12 modern dev tools across 7 categories — Frontend, Backend, Database, Language, Styling, DevOps, and Tools — each with icon, badge, rating, and difficulty.

### 2. Build Your Stack
Click "Add to Stack" to add any technology to your personal sidebar. Remove individual items with x or clear everything with "Remove All".

### 3. Smart Notifications
Get instant toast alerts powered by React-Toastify — success when adding, warning on duplicate, and error on remove or clear.

---

## React Questions

**1. What is JSX, and why is it used in React?**

JSX is a syntax extension that lets you write HTML-like code inside JavaScript. React uses it because it makes building UI much easier and more readable than writing `React.createElement()` manually.

---

**2. What is the difference between props and state?**

Props are values passed into a component from outside — they are read-only. State is data managed inside the component itself that can change. When state updates, the component re-renders automatically.

---

**3. What does the `useState` hook do, and where did you use it in this project?**

`useState` lets a component store and update data. In this project I used it in the `Technologies` component to track three things — the list of technologies, the selected stack items, and the loading status.

---

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**

`useEffect` runs a side effect after the component renders. I used it to simulate loading the technology data from the JSON file — it sets the data and turns off the loading spinner after a short delay.

---

**5. Why does every item in a `.map()` list need a unique `key` prop?**

React uses the `key` to identify which items in a list changed, were added, or removed. Without it, React cannot efficiently update the DOM and may produce bugs or unnecessary re-renders.

---

**6. What is conditional rendering? Show one place you used it.**

Conditional rendering means showing different UI depending on a condition. In the Your Stack sidebar, I show an empty message when no technologies are selected, and the stack list when at least one item is added:

```jsx
{stack.length === 0 ? (
  <p>No technologies added yet.</p>
) : (
  stack.map(tech => <div key={tech.id}>...</div>)
)}
```

---

**7. How do you pass data from a parent to a child, and how does a child send something back?**

Data is passed from parent to child using props. A child sends data back by calling a function passed down as a prop. For example, the remove function is defined in the parent and passed to the stack item — when the x button is clicked, it calls that function to update the parent's state.

---

## Submission

- **GitHub Repository:** YOUR_GITHUB_LINK
- **Live Site:** YOUR_LIVE_SITE_LINK