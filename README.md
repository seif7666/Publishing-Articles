# Publishing Articles Assignment
## About
### Overview
  A web application for handling articles to be published and adding reviews using comments. The application contains 3 main roles which are:
  *  Admin
  *  Author
  *  Reviewer
  
  You can sign up as an **Author** or a **Reviewer** but not as an **Admin** because it must be located in the database.
The author can:
* Create an article.
* See his previous works and know whether they were published, rejected or still pending. A pending article means that the admin hasn't made a decision about it yet.
* Edit a rejected article where he can see the reasons of rejection while editing.

The admin can:
* See all pending articles.
* Open an article and add comments in case of rejection.
* See the differences between the current and previous version of the article if present.
* Decide whether to publish or reject the article.

## Stack Used
* **Frontend**: ReactJS
* **Backend**: PHP Laravel
* **Database**: MySQL
  
## Deployment Instructions

This tutorial provides step-by-step instructions for deploying the project full-stack application, which is built with Laravel (backend) and React (frontend). Follow these instructions to deploy your application to a production environment.

### Prerequisites

Before you begin, ensure you have the following:

- [ ] Node.js and npm installed on your local machine.
- [ ] Composer installed on your local machine.
- [ ] Access to a server or hosting provider where you can deploy your Laravel backend.
- [ ] A domain name if you want to use a custom domain.

### Step 1: Setting Up the Laravel Backend

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/seif7666/Publishing-Articles

Navigate to the Laravel backend directory:

```bash
cd laravel-backend
```

Install composer dependencies:
```bash
composer install
```
Copy the .env.example file to .env and configure the database and other necessary settings:

```bash

cp .env.example .env
```
Change the configuration of the database as you like in config/database.php
Migrate the database:

```bash

php artisan migrate
```
Start the Laravel development server:

```bash

php artisan serve --port 5000
```

### Step2: Launching the frontend application:
- [] Navigate to the folder
  ```bash
    cd Frontend
  ```
- [] install packages
  ```bash
    npm install
  ```
- [] build project
  ```bash
   npm run build
  ```
-[] You can see the built application in a created **dist** directory.
-[] Frontend is configured to communicate with the backend on localhost:5000.

## Approach
  * This project was splitted during developing on iterations which were:
        * Design registration pages.
        * Design Author pages to be more familiar with required functionalities.
        * Design Admin pages.
        * Structuring the frontend to be more scalable.
        * Create the database and model classes in backend.
        * Start integrating using APIs.

## What's Next main roles
We are still in development phase since some features are not available yet which can be classified into :
### Functional Requirements:
  * Create the reviewers pages with required functionalities.
  * Add the searching feature.
  * Use pagination.
  * Multi versions of one article.
### Non Functional Requirements:
  * User Authentication using sessions.
  * Migrating the code to **Typescript** instead of **Javascript**.
  * Adding a caching system for faster processing.
  * Optimize UX by applying lazy loading techniques. 
