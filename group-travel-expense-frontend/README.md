# React + Vite
Group Travel Expenses Splitter frontend: 
The App built as to help users enjoy their trips with family and friend without calculate the amount of money spent. Whether it's a weekend getaway, a family vacation, or a work trip, it's important to keep track of who paid for what and ensure that everyone contributes fairly.A Group Travel Expenses Splitter is a handy tool that helps simplify this process. It allows you to easily divide up costs, record who paid for each item, and calculate how much each person owes or is owed. This way, you can focus on enjoying your trip instead of stressing over finances!
1. Signup Page
Handles user login. Users can enter their email and password, and the system will authenticate them via the API, providing a JWT token.

2. signin Page
Allows users to create an account by providing their email and password.

3. TripList Page
Displays a list of trips that the logged-in user is a part of. It fetches the trip data from the back-end and displays them in a list.

4. AddTrip Page
Allows users to create a new trip by providing the trip name, start date, and end date.

5. TripDetails Page
Shows the details of a selected trip, including participants and bills. This page allows the user to add participants and bills.

6. AddParticipant Page
Allows the user to add participants to a trip by selecting from the list of users.

7. Bill Page
Displays and adds bills to a trip. The user can input details such as the amount, payer, and description of the expense.

API Integration

The front-end communicates with the back-end API using Axios. API requests include:

POST /api/auth/login: For user login.
POST /api/auth/register: For user registration.
GET /api/trips: To get all trips for the logged-in user.
POST /api/trips: To create a new trip.
POST /api/participants: To add participants to a trip.
POST /api/bills: To add bills for a trip.



