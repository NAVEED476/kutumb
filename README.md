# Quote App

Quote App is a React-based web application that allows users to create, view, and manage quotes with associated images.

## Features

- User authentication (login)
- View a paginated list of quotes
- Create new quotes with text and image upload
- Responsive design optimized for mobile devices

## Technologies Used

- React
- TypeScript
- React Router for navigation
- Axios for API calls
- CSS for styling

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

To install Quote App, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/NAVEED476/kutumb.git
   ```
2. Navigate to the project directory:
   ```
   cd quote-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To run Quote App, use the following command:

```
npm start
```

This will start the development server. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## API Integration

This application integrates with the following APIs:

- Login: `https://assignment.stage.crafto.app/login`
- Upload Image: `https://crafto.app/crafto/v1.0/media/assignment/upload`
- Create Quote: `https://assignment.stage.crafto.app/postQuote`
- Get Quotes: `https://assignment.stage.crafto.app/getQuotes`


## Project Structure

```
quote-app/
  ├── src/
  │   ├── components/
  │   │   ├── QuoteItem.tsx
  │   │   ├── QuoteList.tsx
  │   │   └── QuoteForm.tsx
  │   ├── pages/
  │   │   ├── LoginPage.tsx
  │   │   ├── QuoteListPage.tsx
  │   │   └── QuoteCreationPage.tsx
  │   ├── services/
  │   │   ├── api.ts
  │   │   └── auth.ts
  │   ├── App.tsx
  │   ├── index.tsx
  │   └── index.css
  ├── public/
  ├── package.json
  └── README.md
```

