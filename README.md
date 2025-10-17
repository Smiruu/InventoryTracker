# 📦 Inventory Tracker

A simple web application built for a school project to manage an inventory of items.

This project uses a modern PERN-stack. and is containerized using Docker.

---

## ✨ Features

* **View** a list of all inventory items.
* **Add** new items to the inventory.
* **Update** existing item details (like quantity or name).
* **Delete** items from the inventory.

---

## 💻 Technology Stack

* **Client (Frontend):** **React** (built with **Vite**) and **TypeScript**.
* **Server (Backend):** **Node.js** and **Express.js**.
* **Database ORM:** **Prisma** 
* **Containerization:** **Docker** and `docker-compose` to run the client and server together.

---

## 🚀 How to Run

Since this project uses Docker, it's very simple to get started.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Smiruu/InventoryTracker.git](https://github.com/Smiruu/InventoryTracker.git)
    cd InventoryTracker
    ```

2.  **Build and run the containers:**
    (Make sure you have a `.env` file set up for Prisma/database connections if needed!)

    ```bash
    docker-compose up --build
    ```

3.  **That's it!**
    * The client (frontend) should be running on `http://localhost:3000`
    * The server (backend) should be running on `http://localhost:8000` (or as specified in your `docker-compose.yml`).
