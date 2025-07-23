# 📝 Simple Express CRUD App

This is a basic blog-style CRUD application built with **Express.js**, **EJS**, and **UUID**. It allows users to create, read, update, and delete simple text posts.

---

## 🚀 Features

- View all posts
- Create new posts
- Edit existing posts
- Delete posts
- Uses EJS for server-side rendering
- Simulated in-memory data store (no database required)

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- UUID for unique post IDs
- Method-Override to support PUT & DELETE requests via HTML forms


---

## 📦 Install All Dependencies

Install all required packages using the following command:

```bash
npm install express ejs uuid method-override

This command installs:

- `express` – web framework
- `ejs` – templating engine
- `uuid` – for generating unique IDs
- `method-override` – to support PUT and DELETE via forms

> The `path` module is built into Node.js, so it doesn't need to be installed separately.
## 🎨 CSS Styling

Below is the CSS used for the blog UI:

```css
/* === Reset & Base === */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(-45deg, #ff9a9e, #fad0c4, #a1c4fd, #c2e9fb);
    background-size: 400% 400%;
    animation: wildBackground 20s ease infinite;
    padding: 50px 20px;
    color: #333;
    min-height: 100vh;
    perspective: 1000px;
    transition: background 1s;
}

/* === Headings === */
h1, h2, h3 {
    color: #fff;
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
    margin-bottom: 10px;
}

/* === 3D Card Style === */
.posts {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    padding: 25px;
    margin-bottom: 30px;
    box-shadow:
      0 10px 20px rgba(0, 0, 0, 0.15),
      0 6px 6px rgba(0, 0, 0, 0.1);
    transform-style: preserve-3d;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    animation: slideIn 0.6s ease;
    position: relative;
    overflow: hidden;
}

.posts:hover {
    transform: translateY(-12px) rotateX(2deg);
    box-shadow:
      0 20px 35px rgba(0, 0, 0, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.15);
}

/* === Post Content === */
.content {
    font-size: 1em;
    color: #444;
    margin: 15px 0;
}

button {
    background-color: #5471c0;
    border: none;
    color: white;
    padding: 8px 14px;
    border-radius: 10px;
    font-size: 0.9em;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    transition: background-color 0.3s ease, transform 0.2s;
}

a {
    text-decoration: none;
    color: #007bff;
    font-weight: 500;
    margin-right: 12px;
    transition: color 0.2s, transform 0.2s;
}

a:hover {
    color: #0056b3;
    transform: translateX(2px);
}

button:hover {
    background-color: #2c80b4;
    transform: scale(1.05);
}

input[type="text"], textarea {
    width: 100%;
    padding: 14px;
    margin-top: 10px;
    margin-bottom: 20px;
    border-radius: 12px;
    border: 1px solid #ccc;
    font-size: 1em;
    transition: border-color 0.3s, box-shadow 0.3s;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.05);
}

input[type="text"]:focus, textarea:focus {
    border-color: #3498db;
    outline: none;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
}

textarea {
    resize: vertical;
    min-height: 150px;
}

/* === Animations === */
@keyframes wildBackground {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@keyframes fadeIn {
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
}

@keyframes slideIn {
    0% { opacity: 0; transform: translateY(40px); }
    100% { opacity: 1; transform: translateY(0); }
}

/* === Responsive === */
@media (max-width: 768px) {
    .posts {
        padding: 20px;
    }

    input, textarea, button {
        font-size: 1em;
    }
}


