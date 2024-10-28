# Upstacker

Upstacker is a **React Native** mobile application that connects to the **GitHub API** to retrieve and display repository data.

## Features

- Retrieves and displays GitHub repository data interactively
- Smooth navigation and custom styling for enhanced user experience

## Tech Stack

- **React Native**
- **Redux** and **Redux-Saga** for state management
- **React-Query** for data fetching
- **tailwind-rn** for styling with Tailwind CSS
- **React Native Navigation**
- **React Native SVG** for vector graphics
- **Classnames** and **Lodash** for utility functions

## Installation Guide

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/upstacker.git
   cd upstacker
   ```

2. **Install Dependencies**:
   Ensure you have Node.js installed, then run:

   ```bash
   yarn
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root folder with the following:

   ```plaintext
   TOKEN=<YOUR GITHUB PERSONAL ACCESS TOKEN>
   DSN=<YOUR SENTRY DSN>
   ```

4. **Run the App**:
   For iOS:
   ```bash
   cd ios
   pod install
   cd ..
   yarn ios
   ```
   For Android:
   ```bash
   npx react-native run-android
   ```

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
