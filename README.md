<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=40&pause=1000&color=F7F7F7&center=true&vCenter=true&width=435&lines=Talko+Chat+App;Real-Time+Connection;Chat+With+Friends+Now" alt="Typing SVG" />

  <p align="center">
    <strong>Connect Instantly. Connect Securely.</strong>
  </p>

  <a href="https://talko-orcin.vercel.app/">
    <img src="https://img.shields.io/badge/🚀_Launch_Live_App-Click_Here_To_Chat-FF0000?style=for-the-badge&logo=vercel&logoColor=white&labelColor=1a1a1a" height="45" alt="Live Demo" />
  </a>

  <p>
    👆 <strong>Click the button above to start chatting with your friends!</strong> 👆
  </p>

  <p align="center">
    <a href="https://github.com/abhishekpatil009/talko">
      <img src="https://img.shields.io/github/last-commit/abhishekpatil009/talko?style=for-the-badge&logo=github&color=7b2cbf" alt="Last Commit">
    </a>
    <a href="https://github.com/abhishekpatil009/talko/stargazers">
      <img src="https://img.shields.io/github/stars/abhishekpatil009/talko?style=for-the-badge&logo=star&color=ffbe0b" alt="Stars">
    </a>
    <a href="https://talko-orcin.vercel.app/">
      <img src="https://img.shields.io/website?url=https%3A%2F%2Ftalko-orcin.vercel.app%2F&style=for-the-badge&logo=vercel&label=Deployment" alt="Website Status">
    </a>
  </p>
</div>

---

<details>
  <summary><strong>📝 Table of Contents</strong> (Click to Expand)</summary>

  - [Overview](#-overview)
  - [Live Demo](#-live-demo)
  - [Screenshots](#-screenshots)
  - [Features](#-key-features)
  - [Tech Stack](#-tech-stack)
  - [Installation](#-getting-started)
  - [Author](#-author)
</details>

---

## 🚀 Overview

**Talko** is a robust, real-time messaging platform designed for speed and simplicity. Built on the **MERN Stack**, it leverages **Socket.io** for bidirectional communication, ensuring that messages are delivered instantly without page refreshes. 

Whether you're chatting 1-on-1 or in a group, Talko keeps you connected.

---

## 🌐 Live Demo

Don't just look at the code—experience it!

### [👉 Click here to open Talko](https://talko-orcin.vercel.app/)

> **Try it with a friend:** Open the link in two different browsers (or Incognito mode), create two accounts, and watch the messages fly instantly! ⚡

---

## 📸 Screenshots

<div align="center">
  <h3>✨ The Interface</h3>
  <img src="./assets/chat_main.jpeg" alt="Main Chat" width="800" style="border-radius: 10px; box-shadow: 0px 4px 20px rgba(0,0,0,0.5);"/>
  <p><em>Sleek, Dark-Themed Messaging Interface</em></p>
</div>

<br/>

<div align="center"> 
  <table>
    <tr>
      <td align="center"><strong>🔐 Secure Login</strong></td>
      <td align="center"><strong>📝 Easy Signup</strong></td>
      <td align="center"><strong>👤 User Profile</strong></td>
    </tr>
    <tr>
      <td><img src="./assets/login_screen.jpeg" width="250" style="border-radius: 8px;"/></td>
      <td><img src="./assets/signup_screen.jpeg" width="250" style="border-radius: 8px;"/></td>
      <td><img src="./assets/profile_screen.jpeg" width="250" style="border-radius: 8px;"/></td>
    </tr>
  </table>
</div>

---

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| **⚡ Real-Time** | Instant messaging powered by **Socket.io**. Zero lag. |
| **🔐 Authentication** | JWT-based auth with encrypted passwords (Bcrypt). |
| **🎨 Modern UI** | Built with **Tailwind CSS** for a responsive, dark-mode design. |
| **💾 Persistent Data** | All chats and user history stored safely in **MongoDB**. |
| **🟢 Live Status** | Real-time "Online" status indicators for friends. |
| **📱 Mobile Ready** | Fully responsive layout that looks great on any device. |

---

## 🛠️ Tech Stack

<div align="center">

| Frontend | Backend | Database & Tools |
| :---: | :---: | :---: |
| ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) | ![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) | ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) |
| ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) | ![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge) | ![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white) |
| ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) | ![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=white) | ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white) |

</div>

---

## 📂 Folder Structure

```bash
Talko/
├── 📂 client          # Frontend (React + Tailwind)
│   ├── 📂 src
│   │   ├── 📂 components
│   │   ├── 📂 context
│   │   └── 📂 pages
│   └── 📄 package.json
├── 📂 server          # Backend (Node + Express)
│   ├── 📂 controllers
│   ├── 📂 models
│   ├── 📂 routes
│   └── 📄 server.js
└── 📄 README.md