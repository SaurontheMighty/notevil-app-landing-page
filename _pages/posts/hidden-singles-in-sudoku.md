---
layout: post
title: Beginner Techniques - Hidden Singles in Sudoku
description: "Hidden singles is an intermediate sudoku technique where there is only one possible cell that a certain number can go in even if it doesn't immediately appear so from eliminating candidates."
short_title: 🙈 Hidden Singles
thumbnail: /assets/hiddensingle_thumbnail.png
include_in_header: false
order: 6
category: "Techniques"
---

{% include blog-title.html title="Hidden Singles in Sudoku" %}
<div class="hint-box">
  New to Sudoku? Learn how to play with an interactive puzzle in the <a href="/posts/how-to-play">how to play guide 🔗</a>
</div>
There are many websites that purport to find hot singles in your area, we can offer no such thing, however, we can help you find hidden singles in your sudoku puzzles.

{% include sudoku-terminology.html %}

{% include blog-subtitle.html title="What's a Single?" %}
In Sudoku, a single is a cell such that there is only one possible number that can occupy it. A naked single is a cell where the only candidate is obvious. 

{% include board.html 
  image="/assets/nakedsingle.jpg"
  alt="Sudoku board showing naked single technique" 
  text="Here, we can see that the house that the cell is in contains 1, 2, 3, 8, 9. This leaves 4, 5, 6, 7 as its possibilities. But, its row contains 4, 6 and the column contains 7. Thus, the solution must be 5. This is a typical naked single."
%}

{% include blog-subtitle.html title="What's a Hidden Single?" %}
A hidden single is a cell where there's only one possible candidate but its less obvious. This can be because even though all the other candidates are not eliminated by numbers in the row/column/house, there is no other cell that one of the candidates can go in. 

{% include board.html 
  image="/assets/hiddensingle.jpg"
  alt="Sudoku board showing hidden single technique" 
  text="Here, we can see that this cell has a lot of possibilities: 1, 5, 6, 7, 8, 9 even after we eliminate numbers that are in the row/column/house.<br><br>However, notice that 8 cannot go in any other cell of the house. This house must contain an 8 so this is the only possible place it can go. Bingo!"
%}

This was an example of a hidden single in a house but the same principle can be applied in a row or column. Sometimes, hidden singles can be uncovered without having having too many notes but some of them can be really hidden.

{% include tip.html 
  tip="In Not Evil Sudoku, you can shake your phone to reveal a hint. If there are no naked singles, the hint system will offer you all the possible candidates to help you find hidden singles and other trickier techniques."
%}

P.S. The graphics you see in this post are all directly from the hint system of Not Evil Sudoku. When you request a hint it'll highlight the house/row/column that contains the naked single and highlight the cell where it appears.
