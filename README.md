# Homework-4: Build a Javascript Quiz Application
 Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## User Story
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers

## Acceptance Criteria
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score

## My Approach
1. Create a start screen to launch the quiz (start.html)
2. Use a separate screen and javascript file to load and display the questions and answer choices. This screen displays the running time which also doubles as the score. (quiz.html, script.js)
3. When all questions have been answered OR the time runs out, game is over and score is displayed. (alldone.html, alldone.js)
4. User enters initials and high score.(alldone.html, alldone.js)
5. High score page displays all high scores with initials from local storage. (scores.html)

## Files Included
index.html<br>
style.css<br>
quiz.html<br>
quiz.js<br>
alldone.html<br>
alldone.js<br>
scores.html<br>
README.md<br>

## What I Learned
Good project to exercise html and css skills , while also buildinhg new skills of DOM manipulation, timers and local storage. 

(NOTE: I had some trouble with step #5 and was able to display the most recent game score and initials from localStorage, but ran out of time prior to HW submission to append the high scores in a running fashion).

## Links
GitHub link to project file repo: https://github.com/rgsommer777/04-Homework<br>
GitHub link to hosted page: https://rgsommer777.github.io/04-Homework/

## Screenshots   
Index: https://raw.githubusercontent.com/rgsommer777/04-Homework/master/Assets/Screenshots/Start_Screen.png<br>
Quiz: https://raw.githubusercontent.com/rgsommer777/04-Homework/master/Assets/Screenshots/Quiz_Screen.png<br>
All Done: https://raw.githubusercontent.com/rgsommer777/04-Homework/master/Assets/Screenshots/All_Done_Screen.png<br>
Scores: https://raw.githubusercontent.com/rgsommer777/04-Homework/master/Assets/Screenshots/High_Scores.png
