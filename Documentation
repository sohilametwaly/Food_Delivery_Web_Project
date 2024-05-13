# Food Delivery Web Project Overview

## Introduction

The Food Delivery Web Project aims to simplify and enhance the food ordering experience through the integration of smart technology and user-friendly design. Our goal is to provide users with abundant choices and ensure a seamless end-to-end experience.

### Objectives

- Develop an intuitive and aesthetically pleasing web interface that sets the standard for user experience excellence.
- Implement a robust backend infrastructure capable of handling order processing, real-time tracking, secure transactions, and personalized interactions.
- Curate a comprehensive catalog of culinary delights from top-notch establishments, presented in a unified platform.
- Ensure scalability, reliability, and security are at the forefront of development efforts.

## Scope

The project scope includes:

- Designing and developing a responsive, feature-rich front-end interface prioritizing user engagement, accessibility, and brand coherence.
- Architecting a scalable, fault-tolerant backend system engineered for exceptional performance, security, and data integrity.
- Integrating advanced features such as real-time order tracking, secure payment gateways, and personalized recommendations.
- Conducting rigorous testing and quality assurance to validate functionality, usability, and security compliance.
- Orchestrating a seamless deployment and launch process, followed by post-launch support and optimization.

## Stakeholders

- **Project Manager:** Oversees strategic direction, resource allocation, and milestone achievement.
- **Development Team:** Comprised of skilled developers, designers, and engineers translating project requirements into functional solutions.
- **Users:** Consumers and culinary establishments relying on the platform for seamless, enjoyable culinary experiences.
- **Administrators:** Responsible for platform governance, content curation, and operational oversight.

## Timeline and Milestones

### Week 1: Planning and Design

- **Milestone 1: Project Start and Design Ideas**
  - Kick off the project with a team meeting to set goals.
  - Create basic designs for the website's look and feel.

### Week 2: Front-end Development

- **Milestone 2: Front-end Implementation**
  - Begin front-end development based on finalized designs and specifications.
  - Implement core UI components, navigation structure, and basic functionality.

### Week 3: Back-end Development and Integration

- **Milestone 3: Back-end Infrastructure Setup and Implementation**
  - Set up the back-end infrastructure, including database configuration, server setup, and API development environment.
  - Develop back-end functionality for user authentication, order processing, and data management.
  
- **Milestone 4: Integration**
  - Integrate front-end and back-end components to ensure seamless communication and functionality.
  - Conduct integration testing to identify and address any compatibility issues or discrepancies.



# Functional Requirements Document (FRD)

## System Functionalities:

1. **User Authentication and Authorization:**
   - Users should be able to register, login, and manage their accounts securely.
   - Authentication methods shall include email/password and social media login.
   - Different user roles such as customer, restaurant owner, and delivery person shall have different levels of access to functionalities.

2. **Food Ordering and Management:**
   - Customers should be able to browse restaurants, view menus, and place orders.
   - Restaurant owners should be able to manage their menus, update item availability, and track orders.
   - Delivery persons should be able to view assigned orders, update order status, and communicate with customers.

3. **Order Tracking and Notifications:**
   - Customers should receive real-time updates on the status of their orders, including preparation, dispatch, and delivery.
   - Notifications shall be sent via email and/or SMS to inform users about order confirmations, status changes, and delivery updates.

## Requirements Prioritization and Dependencies:

1. **User Authentication and Authorization:**
   - **Priority:** High
   - **Dependencies:** None

2. **Food Ordering and Management:**
   - **Priority:** High
   - **Dependencies:** User Authentication and Authorization

3. **Order Tracking and Notifications:**
   - **Priority:** Medium
   - **Dependencies:** Food Ordering and Management



# Technical Requirements Document (TRD):

## Technical Specifications:

1. **System Architecture:**
   - The system shall be developed using a client-server architecture, with a front-end web application and a backend API.
     - **Frontend:** React.js for building interactive user interfaces.
     - **Backend:** Node.js with Express.js for creating RESTful APIs.

2. **Infrastructure Requirements:**
   - Hosting: The application shall be hosted on a cloud platform such as AWS or Heroku for scalability and reliability.
   - Database: MongoDB for storing user data, restaurant information, menu items, orders, and transaction records.

3. **Development Tools, Frameworks, and Libraries:**
   - **Frontend Framework:** React.js for building responsive UI components.
   - **Backend Framework:** Express.js for handling HTTP requests, routing, and middleware.
   - **Authentication:** Passport.js for implementing authentication strategies such as JWT (JSON Web Tokens).
   - **Database ORM:** Mongoose for MongoDB for simplified database interactions and schema management.
   - **HTTP Client:** Axios for making HTTP requests from both frontend and backend.
   - **Form Handling:** Formik for handling forms and form validation in React.
   - **State Management:** Redux or React Context API for managing application state, especially for complex applications with multiple components sharing data.

4. **APIs and Data Formats:**
   - RESTful APIs shall be designed and implemented for communication between the frontend and backend components.
   - Data exchanged shall be in JSON format for interoperability and ease of parsing.



# Database Schema Documentation

## Description:
The database schema for the Food Delivery Web Project includes tables to manage user data, orders, and food items. It is designed to provide a seamless experience for users, facilitating smooth order placements and deliveries while ensuring robust data integrity and security.

## Tables:

1. **User Table:**
   - _id (Primary Key): Unique identifier for each user.
   - name: Name of the user.
   - email: Email address of the user (unique constraint applied).
   - password: Hashed password for user authentication.
   - cartData: Object representing the user's cart data (default value provided).

2. **Orders Table:**
   - _id (Primary Key): Unique identifier for each order.
   - userId (Foreign Key): ID of the user who placed the order.
   - items: Array of items included in the order.
   - amount: Total amount of the order.
   - address: Object representing the delivery address.
   - status: Current status of the order (default value provided).
   - date: Date and time when the order was placed (default value provided).
   - payment: Boolean indicating whether payment has been completed (default value provided).

3. **Food Table:**
   - _id (Primary Key): Unique identifier for each food item.
   - name: Name of the food item.
   - description: Description of the food item.
   - price: Price of the food item.
   - image: URL of the image representing the food item.
   - category: Category of the food item.

## Relationships:
- User Table (1) <-> (0, N) Orders Table: Each user can have multiple orders.
- Orders Table (1) <-> (0, N) Food Table: Each order can include multiple food items.

## Constraints:
- User Table:
  - Email addresses must be unique to ensure each user has a distinct account.
- Orders Table:
  - The user ID must be provided for each order, ensuring referential integrity.
  - The items array and address object are required fields for each order.
- Food Table:
  - All fields are required for each food item to ensure completeness of information.
