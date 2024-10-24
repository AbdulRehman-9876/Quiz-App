# Quiz App

This is a simple **React Quiz Application** that displays multiple-choice questions, keeps track of the score, and shows the final result after all questions have been answered.

## Features

- Displays a series of questions with four answer options.
- Users can select only one answer per question.
- Correct and incorrect answers are visually indicated (with colors).
- Keeps track of the user's score.
- Provides the option to reset the quiz after completion.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [How to Use](#how-to-use)
- [Customization](#customization)
- [Technologies Used](#technologies-used)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (for package management)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/quiz-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd quiz-app
   ```

3. Install the required dependencies:

   Using npm:
   ```bash
   npm install
   ```

   Or using yarn:
   ```bash
   yarn install
   ```

4. Start the development server:

   Using npm:
   ```bash
   npm start
   ```

   Or using yarn:
   ```bash
   yarn start
   ```

5. Open your browser and visit `http://localhost:3000` to view the Quiz App.

## How to Use

1. The quiz starts with the first question.
2. Select one of the four answer options by clicking on it.
   - If the answer is correct, the option will be highlighted in green.
   - If the answer is incorrect, the wrong option will be highlighted in red, and the correct option will be highlighted in green.
3. Click **Next** to proceed to the next question.
4. After completing all the questions, the app will display your final score.
5. Click **Reset** to start the quiz over.

## Customization

### Question Data

The quiz questions are stored in `data.js` located in the `assets` directory. You can easily customize or add new questions to this file.

```js
export const data = [
  {
    question: "Question 1?",
    option1: "Answer 1",
    option2: "Answer 2",
    option3: "Answer 3",
    option4: "Answer 4",
    ans: 1 // index of the correct answer (1-based)
  },
  // Add more questions as needed
];
```

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **CSS**: For styling the application.
