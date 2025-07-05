# NewsMadness
NewsMadness is a React-based web application that provides users with the latest news from multiple countries (India, America, and Canada) across various categories including general, business, entertainment, health, science, sports, and technology.

## Features
- Browse top headlines from different countries
- Filter news by categories
- Infinite scrolling for seamless news browsing
- Responsive design that works on both desktop and mobile devices
- Clean, modern UI with Bootstrap styling

## Technologies Used
- React 18
- React Router for navigation
- React Infinite Scroll Component for continuous loading
- Bootstrap 5 for UI components and styling
- NewsAPI for fetching news data

## Getting Started
### Prerequisites
- Node.js (v14 or newer)
- npm or yarn package manager


### Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/newsmadness.git
cd newsmadness
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to http://localhost:3000

## Usage

- Change Country: Click on the "Country" dropdown in the navigation bar to select news from India, America, or Canada.
- Select Category: Use the "Category" dropdown to filter news by topics like business, sports, entertainment, etc.
- Read Full Articles: Click the "Read More" button on any news card to open the full article in a new tab.
- Infinite Scrolling: Simply scroll down to load more news articles automatically.

## Project Structure
- App.js: Main application component
- NavBar.js: Navigation bar with country and category selection
- NewsRow.js: Component for fetching and displaying news articles
- News.js: Individual news card component
- Loading.js: Loading spinner component

## API Key
This project uses the NewsAPI to fetch news data. The API key is currently included in the code, but in a production environment, you should:

1. Create a .env file in the root directory
2. Add your API key as REACT_APP_NEWS_API_KEY=your_api_key_here
3. Update the code to use process.env.REACT_APP_NEWS_API_KEY instead of hardcoding the key