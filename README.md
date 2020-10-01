# lab-03-rock-paper-scissors

Goal: The user chooses rock, paper, or scissors. Track their wins and total attempts


STATE:
- wins
- draws
- total attempts
- current user selection


HOW WE SHOW THAT STATE:
- Span textContent
- user selection highlighted


HTML: 
- State Changers: 
    - Radio button (images)
        - User selection
    - Play button
    - Reset button
- State Viewers: 
    - Wins span
    - Draw span
    - Total span
- Explanation of rules (list)



ON CLICK:
- Radio Button
    - User selection changes
- Play Button
    - Game runs -- rock, paper, or scissors is randomly chosen
    - Get user's choice
    - Compare user's choice to game's choice
        - Paper beats rock
        - Rock beats scissors
        - Scissors beats paper
    - If they win, increment wins AND increment total
    - If they lose, increment total
    - If it's a draw, increment draw AND increment total 
- Reset Button
    - Reset game


POSSIBLE OUTCOMES:
    - userThrow === computerThrow: DRAW
    - Player chooses rock, computer chooses paper: LOSE
    - Player chooses rock, computer chooses scissors: WIN
    - Player chooses paper, computer chooses scissors: LOSE
    - Player chooses paper, computer chooses rock: WIN
    - Player chooses scissors, computer chooses rock: LOSE
    - Player chooses scissors, computer chooses paper: WIN

