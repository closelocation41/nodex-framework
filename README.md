# Nodex Framework

A guide to setting up and running the Nodex Framework application.

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (version 20.13.1 recommended)
- **npm** (Node Package Manager)
- **MongoDB**
- **MongoDB Compass** (for database GUI)

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/closelocation41/nodex-framework.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd nodex-framework
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Install `migrate-mongo` Globally**

   ```bash
   npm install -g migrate-mongo
   ```

5. **Run Database Migrations**

   ```bash
   migrate-mongo up
   ```

6. **Install Additional Dependencies**

   ```bash
   npm run install
   ```

7. **Download and Install MongoDB Compass**

   Download MongoDB Compass from the [official website](https://www.mongodb.com/try/download/compass) and set it up for easy database management.

8. **Start the Application**

   ```bash
   npm run start
   ```

9. **Access the Application**

   Open your browser and navigate to:
   
   ```
   http://localhost:3000/
   ```

## API Usage

To test the login API, you can use the following curl command:

```bash
curl --location 'http://localhost:3000/api/users/login' \
--header 'Content-Type: application/json' \
--data-raw '{ "username": "admin", "password": "Admin@123" }'
```

## Additional Notes

- Ensure MongoDB is running locally before executing `migrate-mongo up` or starting the application.
- Use MongoDB Compass to verify the database state and explore collections.

