---
layout: post
title: Beginner Techniques - Eliminating Candidates in Sudoku
description: "Learn the elimination technique for solving sudoku puzzles. Use process of elimination to find the only possible number for each cell."
short_title: 🙅 Elimination
include_in_header: false
order: 5
category: "Techniques"
---

{% include blog-title.html title="Solving Cells with Elimination" %}
<div class="hint-box">
  New to Sudoku? Learn how to play with an interactive puzzle in the <a href="/posts/how-to-play">how to play guide 🔗</a>
</div>

{% include sudoku-terminology.html %}

If you haven't learned scanning yet, start with the <a href="/posts/scanning">scanning technique</a> first!

{% include blog-subtitle.html title="What's Elimination" %}

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

Now that you've mastered both scanning and elimination, you have the fundamental tools to solve most easy sudoku puzzles! 
