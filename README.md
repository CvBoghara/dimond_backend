# Diamond Management & Employee Tracking System

## Overview

The Diamond Management & Employee Tracking System is a full-stack web application designed to manage employees, diamonds, work entries, salary calculations, and reporting within a diamond processing company.

The system allows administrators to track employee work, calculate salaries based on completed work entries, manage diamond records, and generate reports through a centralized dashboard.

---

## Features

* Employee Management
* Diamond Management
* Work Entry Tracking
* Salary Calculation
* Dashboard Summary
* Employee List with Pagination
* Employee-wise Reports
* Swagger API Documentation
* Unit Testing with Jest

---

## Tech Stack

### Backend

* NestJS
* MongoDB
* Mongoose
* Swagger
* Jest

### Frontend

* React.js
* Axios
* React Router DOM

---

## Database Schema

### Employee

| Field       | Type   |
| ----------- | ------ |
| employeeId  | String |
| name        | String |
| department  | String |
| joiningDate | Date   |

### Diamond

| Field       | Type   |
| ----------- | ------ |
| diamondCode | String |
| caratWeight | Number |
| status      | String |

### Work Entry

| Field        | Type     |
| ------------ | -------- |
| employeeId   | ObjectId |
| diamondId    | ObjectId |
| workType     | String   |
| quantity     | Number   |
| ratePerPiece | Number   |
| date         | Date     |

---

## API Endpoints

### Employees

* POST /employees
* GET /employees
* GET /employees/:id

### Diamonds

* POST /diamonds
* GET /diamonds
* GET /diamonds/:id

### Work Entries

* POST /work-entries
* GET /work-entries

### Salary

* GET /salary/:employeeId

### Reports

* GET /reports/daily
* GET /reports/monthly
* GET /reports/employee/:id

---

## Setup Instructions

### Backend Setup

```bash
cd backend
npm install
npm run start:dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Swagger Documentation

After starting the backend server:

```text
http://localhost:3001/api
```

---

## Running Unit Tests

```bash
npm run test
```

---

## Application Architecture

```text
React Frontend
        ↓
Axios API Calls
        ↓
NestJS Backend
        ↓
MongoDB Database
```

---

## Salary Calculation Formula

```text
Salary = Quantity × Rate Per Piece
```

### Example

```text
Quantity = 100
Rate Per Piece = ₹5

Salary = ₹500
```

---

## Implemented Requirements

✅ Employee CRUD Operations

✅ Diamond CRUD Operations

✅ Work Entry Management

✅ Salary Calculation API

✅ Dashboard Summary

✅ Employee List with Pagination

✅ Employee-wise Report API

✅ Swagger API Documentation

✅ Unit Testing

✅ MongoDB Integration

---

## Author

Chandresh Boghara

Full Stack Developer
