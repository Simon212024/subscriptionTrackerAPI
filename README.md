# Subscription Tracker API

A robust RESTful API for managing subscription services and sending automated renewal reminders. This project helps users track recurring subscriptions, monitor renewal dates, and receive email notifications before subscriptions renew.

## Features

* User Registration and Authentication
* Create, Read, Update, and Delete (CRUD) Subscriptions
* Secure Password Management
* MongoDB Database Integration
* Automated Renewal Date Calculation
* Scheduled Background Jobs using Node-Cron
* Email Notifications using Nodemailer
* Subscription Status Management (Active, Cancelled, Expired)
* Input Validation and Error Handling
* Environment Variable Configuration
* RESTful API Architecture

---

## Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose ODM

### Authentication & Security

* JWT (JSON Web Tokens)
* bcrypt

### Email Services

* Nodemailer
* Gmail App Password Authentication

### Scheduling

* Node-Cron

### Development Tools

* Git
* GitHub
* Thunder Client

---

## Project Structure

```bash
subscription_tracker/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── cron/
│   └── subscriptionReminder.js
│
├── app.js
├── package.json
└── README.md
```

---

## Subscription Model

Each subscription contains:

* Name
* Price
* Frequency (Daily, Weekly, Monthly, Yearly)
* Category
* Payment Method
* Status
* Start Date
* Renewal Date
* Associated User

---

## Automated Reminder System

The application automatically:

1. Retrieves active subscriptions.
2. Calculates the number of days remaining before renewal.
3. Identifies subscriptions approaching renewal.
4. Sends professional email reminders to users.
5. Runs automatically using Node-Cron.

Example reminder:

```text
Hello Simon,

This is a friendly reminder that your subscription "Netflix Premium"
will renew in 3 days.

Amount: $15
Payment Method: Visa
Renewal Date: July 25, 2026

Thank you for using Subscription Tracker.
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/Simon212024/subscriptionTrackerAPI.git
```

### Navigate into the Project

```bash
cd subscriptionTrackerAPI
```

### Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env.development.local` file in the root directory.

```env
PORT=5500

MONGO_URI=mongodb+srv://kasibante:cephas22@cluster0.sh7gbck.mongodb.net/?appName=Cluster0

JWT_SECRET="secret"

EMAIL_USER=cephassimon38@gmail.com
EMAIL_PASS=olza lqhv pzfv xlbu
```

---

## Running the Application

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

---

## API Endpoints

### Authentication

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/sign_up | Register User |
| POST   | /api/auth/sign_in    | Login User    |

### Subscriptions

| Method | Endpoint               | Description           |
| ------ | ---------------------- | --------------------- |
| POST   | /api/subscriptions     | Create Subscription   |
| GET    | /api/subscriptions     | Get All Subscriptions |
| GET    | /api/subscriptions/:id | Get Subscription      |
| PUT    | /api/subscriptions/:id | Update Subscription   |
| DELETE | /api/subscriptions/:id | Delete Subscription   |

---

## Future Improvements

* Deployment on Render or Railway
* Password Reset Functionality
* Email Templates with HTML Styling
* User Dashboard
* Payment Gateway Integration
* Reminder History Tracking
* Multiple Reminder Intervals
* API Documentation with Swagger

---

## Author

Kasibante Simon

Computer Engineering Student | Backend Developer

---

## License

This project is licensed under the MIT License.
