
# E-Commerce Full-Stack Application

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react) 
![Node.js](https://img.shields.io/badge/Node-24.8.0-green?logo=node.js)
![Java](https://img.shields.io/badge/Java-17-orange?logo=java)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-brightgreen)

---

 Overview
A full-stack e-commerce application built with React (frontend) and Spring Boot (backend).  

Features: Browse products, manage cart, buy now, user login with roles, and sample data persistence.  
Demonstrates React, Node, Spring Boot, Java, MySQL, REST APIs, and LocalStorage.

---

 Project Structure
```

FullStackProject/
├─ ecommerce-backend/      # Spring Boot backend
└─ ecommercefrontend/
└─ ecommerce-frontend/ # React frontend

````

---

 Technologies
- Frontend: React 18.2.0, Node 24.8.0  
- Backend: Spring Boot 3.x, Java 17  
- Database: MySQL 5.5.16 (recommended 8.x)  
- Other: REST APIs, LocalStorage for cart persistence

---

Features
- Browse products with image, description, price, stock  
- Add/remove products to/from cart  
- Buy Now button redirects to billing page  
- Cart persistence in localStorage  
- User login with role-based access (USER / SELLER)  
- Search products  
- Sample data preloaded via SQL

---

 Setup Guide

 Backend
```bash
# Open 'ecommerce-backend' in IntelliJ IDEA
# Ensure Java 17 is selected
# Update 'application.properties' with MySQL credentials
mvn spring-boot:run
````

Backend URL: [http://localhost:8080](http://localhost:8080)

 Frontend

```bash
# Open 'ecommercefrontend/ecommerce-frontend' in VS Code
npm install
npm start
```

Frontend URL: [http://localhost:3000](http://localhost:3000)

# Database

```sql
CREATE DATABASE ecommerce;
# Import 'sample_data.sql' to populate tables
```

* Note: Auto-increment IDs match backend entities.

---

 Sample Users

| Name          | Email                                               | Password | Role   |
| ------------- | --------------------------------------------------- | -------- | ------ |
| Test User     | [testuser@example.com](mailto:testuser@example.com) | 123456   | USER   |
| Bob Smith     | [bob@example.com](mailto:bob@example.com)           | bob123   | SELLER |
| Diana Prince  | [diana@example.com](mailto:diana@example.com)       | diana123 | USER   |
| Ethan Hunt    | [ethan@example.com](mailto:ethan@example.com)       | ethan123 | USER   |
| Alice Johnson | [alice@example.com](mailto:alice@example.com)       | alice123 | USER   |

---

# Notes

* `.gitignore` excludes `node_modules/`, `.idea/`, `target/`, and `build/`
* React frontend → 3000, Spring Boot backend → 8080
* Recommended: Upgrade MySQL to 8.x for best compatibility

---

# Future Improvements

* Persist cart history in database
* Payment integration
* Product image slideshows
* UI animations (hover effects, transitions)
* Role-based dashboards

---

# Author

Vigneshwaran S - Fresher Full-Stack Developer
GitHub: [https://github.com/vigneshwarans796](https://github.com/vigneshwarans796)

