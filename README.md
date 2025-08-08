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