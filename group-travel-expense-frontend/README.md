# React + Vite
Group Travel Expenses Splitter frontend: 
The App built as to help users enjoy their trips with family and friend without calculate the amount of money spent. Whether it's a weekend getaway, a family vacation, or a work trip, it's important to keep track of who paid for what and ensure that everyone contributes fairly.A Group Travel Expenses Splitter is a handy tool that helps simplify this process. It allows you to easily divide up costs, record who paid for each item, and calculate how much each person owes or is owed. This way, you can focus on enjoying your trip instead of stressing over finances!

AddBill.jsx: A form where users can add their expenses.

Dashboard.jsx: The main dashboard view after a user logs in. It could display user stats, recent trips, and any upcoming events.
NavBar.jsx: A navigation bar for switching between pages like "Dashboard", "Add Expense", "Trips", "Sign In", etc.
SignIn.jsx: The sign-in page where users log into their accounts.
SignUp.jsx: The sign-up page where users can create a new account.
TripDetails.jsx: Displays detailed information about a particular trip (including participants, total expenses, etc.).
TripList.jsx: Displays a list of trips that the user is part of or has created.
LandingPage.jsx: A welcome page that users see before logging in.

Also, the services files that hold: 
tokenAuthService.js: This service will handle authentication, including storing the JWT token, signing in, and signing up.

tripService.jsx: This service manages all API interactions related to trips, like fetching trips, adding expenses, and more.

