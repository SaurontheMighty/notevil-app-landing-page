---
layout: post
title: Solving Sudoku Puzzles with Scanning and Elimination
description: "Sudoku has only one rule: the numbers 1-9 cannot repeat in any row/column/subgrid. To get you started with solving your first puzzle, there are two intuitive techniques that you can use, scanning and elimination."
short_title: 🧠 Techniques
include_in_header: false
---

# Sudoku Solving Techniques
<div class="hint-box">
  New to Sudoku? Learn how to play with an interactive puzzle in the <a href="/posts/how-to-play">how to play guide 🔗</a>
</div>

To get you started with solving your first puzzle, there are two intuitive techniques that you can use: scanning and elimination.

Quick Terminology: a cell is a single square in the grid, a house is a 3x3 group of cells. In Not Evil Sudoku, the houses are grouped together and you can see them clearly below. There are a total of 9 houses in a 9x9 grid.

## Scanning
The most basic technique is scanning - systematically looking for possible numbers that can go in each empty cell. 

{% include board.html 
  image="/assets/row_scanning_1.png"
  alt="Sudoku board showing scanning technique" 
  text="Here, we can see that in the first house one of the missing numbers is a 3.<br><br>If we scan the first row, we spot a 3 in the third house!<br><br>Thus, the first blank cannot be a 3 since we can only have one 3 in each row. So, our second blank must be a 3."
%}

{% include tip.html 
  tip="In Not Evil Sudoku, you can enable highlighting all instances of a selected number to help you scan the board."
  setting="Settings: Advanced → Highlighter"
%}

{% include board.html 
  image="/assets/row_scanning_2.png"
  alt="Sudoku board showing scanning technique" 
  text="Similarly, in the second row of houses, we can scan the rows to see where the 3s are.<br><br>We see that the 3s are in the fifth and sixth rows of our puzzle.<br><br>So, the 3 of the first house must be in the fourth row of our puzzle in the only available spot."
%}

{% include board.html 
  image="/assets/col_scanning.png"
  alt="Sudoku board showing scanning technique" 
  text="Scanning is not limited to rows, we can also scan columns!<br><br>Now that we filled in the 3s of the first two houses in our first column of houses, we can turn our attention to the last house.<br><br>Scanning the columns, we see that the 3 of the last house in our column must be in the first column and third row."
%}


## Elimination

{% include board.html 
  image="/assets/elimination1.png"
  alt="Sudoku board showing elimination technique" 
  text="Elimination is a very simple technique. We scan a row/column/house and see what numbers are missing.<br><br>Here, we can see that the numbers 1, 6 and 8 are missing in the first row of our puzzle.<br><br>But if we look at the last cell of our row, we can scan the column to see that both 1 and 8 are in the column. Therefore, the only missing number that could go in the cell of our first row is a 6!"
%}

{% include tip.html 
  tip="In Not Evil Sudoku, you can configure notes to help you keep track of possible numbers for each cell."
  setting="Settings: Notes"
%}

{% include board.html 
  image="/assets/elimination2.png"
  alt="Sudoku board showing elimination technique" 
  text="Each time you use a technique, more of the board is revealed and new opportunities arise!"
%}

