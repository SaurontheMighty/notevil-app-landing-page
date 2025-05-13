---
layout: post
title: How to Play Sudoku for the Complete Beginner
description: People often (wrongly) assume that sudoku is a math game simply because it has numbers. But it's not, in fact, it has absolutely nothing to do with math or numbers. Learn the one simple rule of sudoku with an interactive puzzle.
short_title: 🧩 How to Play
thumbnail: /assets/how_to_play_img.png
include_in_header: false
order: 2
---

# How to Play Sudoku: Your First Solve
People often (wrongly) assume that sudoku is a math game simply because it has numbers. But it's not, in fact, it has absolutely nothing to do with math, to prove this point, let's look at a simple 4x4 grid of emojis.

#### The Rules
1. No row can have the same emoji repeated.
2. No column can have the same emoji repeated.
3. No 2x2 subgrid can have the same emoji repeated.

That's it! Now, let's try to solve your first mini sudoku puzzle:

<div style="display: flex; flex-direction: column; gap: 10px;">
    <div id="emoji-sudoku-container" style="display: flex; gap: 10px;">
        <div id="emoji-grid" style="display: grid; gap: 7px;">
            <div class="subgrid" style="display: grid; grid-template-columns: repeat(2, 80px);">
                <!-- Subgrid 1 will be filled by JavaScript -->
            </div>
            <div class="subgrid" style="display: grid; grid-template-columns: repeat(2, 80px);">
                <!-- Subgrid 2 will be filled by JavaScript -->
            </div>
            <div class="subgrid" style="display: grid; grid-template-columns: repeat(2, 80px);">
                <!-- Subgrid 3 will be filled by JavaScript -->
            </div>
            <div class="subgrid" style="display: grid; grid-template-columns: repeat(2, 80px);">
                <!-- Subgrid 4 will be filled by JavaScript -->
            </div>
        </div>
        
        <div id="emoji-choices" style="display: flex; flex-direction: column; gap: 2px;">
            <!-- Emoji choices will be filled by JavaScript -->
        </div>
    </div>
    <div class="hint-box" id="hint-text">
        <!-- Hint text will be filled by JavaScript -->
    </div>
</div>

<script>
const emojiGrid = [
    '🌊', '👽', '🎃', '🤨',
    '🎃', '🤨', '🌊', '',
    '', '🎃', '', '🌊',
    '🤨', '🌊', '', '🎃'
];

const emojiChoices = ['🤨', '🌊', '🎃', '👽'];
let selectedCell = null;
// Store initially empty positions
const emptyPositions = emojiGrid.map((val, idx) => val === '').reduce((acc, val, idx) => {
    if (val) acc.push(idx);
    return acc;
}, []);

function createGrid() {
    const grid = document.getElementById('emoji-grid');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(2, auto)';
    grid.style.gap = '12px';
    grid.innerHTML = '';
    
    // Create 4 subgrids
    for (let subgridIndex = 0; subgridIndex < 4; subgridIndex++) {
        const subgrid = document.createElement('div');
        subgrid.style.display = 'grid';
        subgrid.style.gridTemplateColumns = 'repeat(2, 80px)';
        
        // Fill each subgrid with 4 cells
        for (let cellIndex = 0; cellIndex < 4; cellIndex++) {
            const globalIndex = (Math.floor(subgridIndex / 2) * 8) + 
                              ((subgridIndex % 2) * 2) + 
                              (Math.floor(cellIndex / 2) * 4) + 
                              (cellIndex % 2);
            
            const cell = document.createElement('div');
            cell.style.width = '80px';
            cell.style.height = '80px';
            cell.style.borderTop = '1px solid #ccc';
            cell.style.borderLeft = '1px solid #ccc';
            // Add right border only to rightmost cells
            if (cellIndex % 2 === 1) {
                cell.style.borderRight = '1px solid #ccc';
            }
            // Add bottom border only to bottom cells
            if (cellIndex >= 2) {
                cell.style.borderBottom = '1px solid #ccc';
            }
            cell.style.display = 'flex';
            cell.style.alignItems = 'center';
            cell.style.justifyContent = 'center';
            cell.style.fontSize = '40px';
            cell.style.cursor = 'pointer';
            cell.textContent = emojiGrid[globalIndex];
            
            cell.addEventListener('click', () => selectCell(cell, globalIndex));
            subgrid.appendChild(cell);
        }
        
        grid.appendChild(subgrid);
    }
}

function createChoices() {
    const choices = document.getElementById('emoji-choices');
    choices.innerHTML = '';
    
    emojiChoices.forEach(emoji => {
        const button = document.createElement('div');
        button.style.width = '45px';
        button.style.height = '45px';
        button.style.border = '1px solid #ccc';
        button.style.borderRadius = '12px';
        button.style.display = 'flex';
        button.style.alignItems = 'center';
        button.style.justifyContent = 'center';
        button.style.fontSize = '25px';
        button.style.cursor = 'pointer';
        button.style.backgroundColor = '#e0e0ff';
        button.style.marginBottom = '7px';
        button.textContent = emoji;
        
        button.addEventListener('click', () => placeEmoji(emoji));
        choices.appendChild(button);
    });
}


function selectCell(cell, index) {
    // Allow selection if cell was initially empty
    if (!emptyPositions.includes(index)) return;
    
    if (selectedCell) {
        // Reset to normal borders
        const oldIndex = Array.from(selectedCell.parentNode.children).indexOf(selectedCell);
        selectedCell.style.borderTop = '1px solid #ccc';
        selectedCell.style.borderLeft = '1px solid #ccc';
        if (oldIndex % 2 === 1) {
            selectedCell.style.borderRight = '1px solid #ccc';
        }
        else {
            selectedCell.style.borderRight = 'none';
        }
        if (oldIndex >= 2) {
            selectedCell.style.borderBottom = '1px solid #ccc';
        }
        else {
            selectedCell.style.borderBottom = 'none';
        }
    }
    
    selectedCell = cell;
    cell.style.border = '3px solid rgb(137, 137, 255)';
}


function checkGrid() {
    console.log("Checking grid:", emojiGrid);

    // Reset any previous error highlighting
    const allCells = document.querySelectorAll('#emoji-grid .subgrid > div');
    allCells.forEach(cell => {
        cell.style.backgroundColor = '';
        cell.style.borderTop = '0.5px solid #ccc';
        cell.style.borderLeft = '0.5px solid #ccc';
        if (Array.from(cell.parentNode.children).indexOf(cell) % 2 === 1) {
            cell.style.borderRight = '1px solid #ccc';
        }
        if (Array.from(cell.parentNode.children).indexOf(cell) >= 2) {
            cell.style.borderBottom = '1px solid #ccc';
        }
    });

    // Check if grid is completely filled
    if (emojiGrid.includes('')) return false;

    // Check rows
    for (let row = 0; row < 4; row++) {
        const rowEmojis = new Set();
        for (let col = 0; col < 4; col++) {
            const emoji = emojiGrid[row * 4 + col];
            if (rowEmojis.has(emoji)) {
                console.log(`Found duplicate in row ${row + 1}: ${emoji}`);
                // Highlight the problematic row
                for (let i = 0; i < 4; i++) {
                    const subgridRow = Math.floor(row / 2);
                    const subgridCol = Math.floor(i / 2);
                    const subgridIndex = subgridRow * 2 + subgridCol;
                    const subgrids = document.querySelectorAll('.subgrid');
                    console.log(`Highlighting subgrid ${subgridIndex}, cell ${(row % 2) * 2 + (i % 2)}`);
                    if (subgrids[subgridIndex]) {
                        const cellInSubgrid = (row % 2) * 2 + (i % 2);
                        const cell = subgrids[subgridIndex].children[cellInSubgrid];
                        if (cell) {
                            cell.style.backgroundColor = '#ffebee';
                            cell.style.border = '2px solid red';
                        }
                    }
                }
                return { valid: false, message: `Row ${row + 1} has a repeated ${emoji}` };
            }
            rowEmojis.add(emoji);
        }
    }

    // Check columns
    for (let col = 0; col < 4; col++) {
        const colEmojis = new Set();
        for (let row = 0; row < 4; row++) {
            const emoji = emojiGrid[row * 4 + col];
            if (colEmojis.has(emoji)) {
                console.log(`Found duplicate in column ${col + 1}: ${emoji}`);
                // Highlight the problematic column
                for (let i = 0; i < 4; i++) {
                    const subgridRow = Math.floor(i / 2);
                    const subgridCol = Math.floor(col / 2);
                    const subgridIndex = subgridRow * 2 + subgridCol;
                    const subgrids = document.querySelectorAll('.subgrid');
                    console.log(`Highlighting subgrid ${subgridIndex}, cell ${(i % 2) * 2 + (col % 2)}`);
                    if (subgrids[subgridIndex]) {
                        const cellInSubgrid = (i % 2) * 2 + (col % 2);
                        const cell = subgrids[subgridIndex].children[cellInSubgrid];
                        if (cell) {
                            cell.style.backgroundColor = '#ffebee';
                            cell.style.border = '2px solid red';
                        }
                    }
                }
                return { valid: false, message: `Column ${col + 1} has a repeated ${emoji}` };
            }
            colEmojis.add(emoji);
        }
    }

    // Check 2x2 subgrids
    for (let subgridIndex = 0; subgridIndex < 4; subgridIndex++) {
        const subgridEmojis = new Set();
        const subgrids = document.querySelectorAll('.subgrid');
        const subgrid = subgrids[subgridIndex];
        
        if (subgrid) {
            // Check each cell in the subgrid
            for (let i = 0; i < 4; i++) {
                const emoji = emojiGrid[(Math.floor(subgridIndex / 2) * 8) + 
                                      ((subgridIndex % 2) * 2) + 
                                      (Math.floor(i / 2) * 4) + 
                                      (i % 2)];
                if (subgridEmojis.has(emoji)) {
                    console.log(`Found duplicate in subgrid ${subgridIndex + 1}: ${emoji}`);
                    // Highlight the problematic subgrid
                    Array.from(subgrid.children).forEach(cell => {
                        cell.style.backgroundColor = '#ffebee';
                        cell.style.border = '2px solid red';
                    });
                    return { valid: false, message: `Subgrid ${subgridIndex + 1} has a repeated ${emoji}` };
                }
                subgridEmojis.add(emoji);
            }
        }
    }

    return { valid: true, message: "Hurrah! You just solved your first sudoku puzzle! 🎉" };
}
function placeEmoji(emoji) {
    if (!selectedCell) return;
    
    // Calculate the global index based on subgrid and cell position
    const subgridIndex = Array.from(selectedCell.parentNode.parentNode.children).indexOf(selectedCell.parentNode);
    const cellIndex = Array.from(selectedCell.parentNode.children).indexOf(selectedCell);
    const globalIndex = (Math.floor(subgridIndex / 2) * 8) + 
                       ((subgridIndex % 2) * 2) + 
                       (Math.floor(cellIndex / 2) * 4) + 
                       (cellIndex % 2);
    
    emojiGrid[globalIndex] = emoji;
    selectedCell.textContent = emoji;
    
    // Reset to normal borders
    selectedCell.style.borderTop = '1px solid #ccc';
    selectedCell.style.borderLeft = '1px solid #ccc';
    if (cellIndex % 2 === 1) {
        selectedCell.style.borderRight = '1px solid #ccc';
    }
    else {
        selectedCell.style.borderRight = 'none';
    }
    if (cellIndex >= 2) {
        selectedCell.style.borderBottom = '1px solid #ccc';
    }
    else {
        selectedCell.style.borderBottom = 'none';
    }
    
    selectedCell = null;

    // Check if grid is complete and validate
    if (!emojiGrid.includes('')) {
        const result = checkGrid();
        const hintElement = document.getElementById('hint-text');
        if (result.valid) {
            hintElement.textContent = result.message;
            hintElement.style.color = '#4CAF50';  // Green color for success
        } else {
            hintElement.textContent = result.message;
            hintElement.style.color = '#F44336';  // Red color for errors
        }
    }
}

// Initialize hint text
document.addEventListener('DOMContentLoaded', () => {
    createGrid();
    createChoices();
    document.getElementById('hint-text').textContent = 'Fill in the grid following the rules...select a cell and choose an emoji to inhabit the cell';
});
</script>

### Sudoku Rules!
Now that you've solved your first sudoku-esque puzzle, let's look at the rules again but applied to a 9x9 grid of numbers. Really, there is only one rule: the numbers 1-9 cannot repeat in any group: row/column/subgrid.
<br>

{% include tip.html
  tip="We use numbers just because they're simple and easy to differentiate between on a grid. Instead of numbers, we could use any 9 symbols!"
%}

{% include board.html 
  image="/assets/gridexample.png"
  alt="Sudoku rules" 
  text="The numbers 1-9 each only appear once in each:<br>&nbsp;&nbsp;&nbsp;1. row<br>&nbsp;&nbsp;&nbsp;2. column<br>&nbsp;&nbsp;&nbsp;3. 3x3 subgrid (also called a house)"
%}


<div class="hint-box">
  <div class="hint-content">
    <p>Want to learn how to solve harder puzzles? Check out the guide on <a href="/posts/sudoku-solving-techniques" class="hint-link">some intuitive solving techniques</a></p>
  </div>
</div>


