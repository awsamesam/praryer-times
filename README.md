# 🕌 Prayer Times

A simple and responsive **Prayer Times** web application built with **React + TypeScript** and **Material UI**.

The application allows users to select a city and view the daily prayer times for that city. Prayer times are retrieved dynamically from the **AlAdhan API** based on the selected city's latitude and longitude.

## 📸 Project Preview

> You can add your project screenshots here.

```md
![Prayer Times Screenshot](./images/screenshot.png)
```

📸 Project Screenshots
🕌 General View

(./src/assets/Main-Page.png)




📍 City Selection

(./src/assets/Selecting-the-City.png)




📱 Responsive Design

(./src/assets/Responsive-Design.png)

## ✨ Features

* 🕌 Display daily prayer times.
* 📍 Select a city from the available cities.
* 🔄 Automatically update prayer times when the city changes.
* 🌅 Display:

  * Fajr
  * Dhuhr
  * Asr
  * Maghrib
  * Isha
* 🎨 Modern glass-style UI.
* 📱 Responsive layout.
* ⚡ Fetch data dynamically using Axios.
* 🔷 Built with TypeScript for better type safety.
* 🎨 Uses Material UI components.

## 🏙️ Available Cities

The application currently supports:

* Gaza — غزة
* Nablus — نابلس
* Jerusalem — القدس
* Haifa — حيفا
* Jaffa — يافا
* Acre — عكا
* Tulkarm — طولكرم

## 🛠️ Technologies Used

| Technology  | Purpose                     |
| ----------- | --------------------------- |
| React       | Building the user interface |
| TypeScript  | Type safety                 |
| Vite        | Development and build tool  |
| Material UI | UI components and styling   |
| Axios       | API requests                |
| CSS         | Additional styling          |
| AlAdhan API | Prayer times data           |

## 🌐 API

The project uses the **AlAdhan Prayer Times API** to retrieve prayer times according to the selected city's geographic coordinates.

API endpoint:

```text
https://api.aladhan.com/v1/timings
```

The request uses:

* Latitude
* Longitude
* Calculation method

Example:

```text
https://api.aladhan.com/v1/timings?latitude=31.5&longitude=34.466&method=3
```

## 📂 Project Structure

```text
src/
├── App.tsx
├── Card.tsx
├── App.css
├── index.css
├── global.d.ts
└── main.tsx
```

### App.tsx

Contains the main application logic, including:

* City selection
* API request
* Prayer times state
* Displaying prayer cards

### Card.tsx

A reusable Material UI card component used to display each prayer time.

### global.d.ts

Contains TypeScript declarations for CSS files.

### App.css / index.css

Contains the application's CSS styles.

### main.tsx

The entry point of the React application.

## 🚀 Installation

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Go to the project directory:

```bash
cd prayer-times
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown by Vite in your browser.

## 📦 Build

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 🎯 Project Goal

The goal of this project is to practice building a real-world React application using **TypeScript**, working with external APIs, handling asynchronous requests with **Axios**, and creating reusable UI components with **Material UI**.

## 👨‍💻 Author

**Awsam Esam**

GitHub: `YOUR_GITHUB_USERNAME`

---

⭐ If you like this project, feel free to give it a star!
