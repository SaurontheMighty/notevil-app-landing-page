---
layout: post
title: Beginner Techniques - Scanning in Sudoku
description: "Scanning is the most basic technique for solving sudoku puzzles. It involves systematically looking for possible numbers that can go in each empty cell while scanning the puzzle."
short_title: 👀 Scanning
include_in_header: false
order: 4
category: "Techniques"
---

{% include blog-title.html title="Solving Cells with Scanning" %}
<div class="hint-box"> 
  New to Sudoku? Learn how to play with an interactive puzzle in the <a href="/posts/how-to-play">how to play guide 🔗</a>
</div>

{% include sudoku-terminology.html %}

{% include blog-subtitle.html title="What's Scanning" %}
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

Next up, <a href="/posts/elimination">elimination</a>.