
---

# Workout Application

This **Workout Record-Keeping Application** helps users track their workouts, including the exercise name, number of repetitions (reps), and the weight lifted. Built with the **MERN stack** (MongoDB, Express, React, and Node.js), this application allows users to log, view, and analyze their workout history to track progress over time.

## Features

- **Workout Logging**: Keep track of the workout name, reps, and weight for each session.
- **History View**: View past workout records and filter by specific exercises.
- **Progress Tracking**: Monitor changes in reps and weight over time for each workout.
- **Responsive UI**: Clean, responsive user interface built with React.

## Technologies Used

- **MongoDB** - For storing workout data (name, reps, weight) in a flexible, document-based database.
- **Express.js** - For building the backend API to handle CRUD operations for workouts.
- **React.js** - For creating a dynamic and interactive user interface.
- **Node.js** - For running the server and handling backend logic.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mart-code/workout-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd workout-app
   ```

3. Install the dependencies for both frontend and backend:
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

## Running the Application

1. Set up your **MongoDB** database and update the MongoDB connection string in the `backend/.env` file:
   ```
   MONGO_URI=mongodb+srv://your-mongo-credentials
   ```

2. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

3. Start the frontend application:
   ```bash
   cd frontend
   npm start
   ```

The application should now be running on `http://localhost:3000`.

## API Endpoints

- **GET /api/workouts** - Retrieve all workout records.
- **POST /api/workouts** - Add a new workout record.
- **PUT /api/workouts/:id** - Update a specific workout record by ID.
- **DELETE /api/workouts/:id** - Delete a workout record by ID.

## Usage

1. **Log Workout**: Enter the workout name, the number of reps, and the weight lifted to log a session.
2. **View History**: Browse your workout history, filter by exercise, and track your progress.
3. **Update or Delete**: Modify or remove any workout entry as needed.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

---
