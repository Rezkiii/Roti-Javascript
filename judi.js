const letters = ['A', 'B', 'C'];  
const boxes = [];  
let revealedCount = 0;  
  
// Generate random letters for the boxes  
for (let i = 0; i < 3; i++) {  
    boxes.push(letters[Math.floor(Math.random() * letters.length)]);  
}  
  
// Create boxes in the DOM  
const boxContainer = document.getElementById('boxContainer');  
boxes.forEach((letter, index) => {  
    const box = document.createElement('div');  
    box.className = 'bg-gray-200 border border-gray-400 w-16 h-16 flex items-center justify-center text-2xl font-bold m-2 cursor-pointer';  
    box.setAttribute('data-index', index);  
    box.textContent = '?'; // Initially hidden  
    box.onclick = function() {  
        this.textContent = letter; // Reveal letter  
        revealedCount++;  
        if (revealedCount === 3) {  
            displayResult(); // Call function to display result  
        }  
    };  
    boxContainer.appendChild(box);  
});  
  
function displayResult() {  
    const uniqueLetters = new Set(boxes);  
    const resultMessage = document.getElementById('resultMessage');  
    const stompImage = document.getElementById('stompImage'); // Reference to the stomp image  
  
    if (uniqueLetters.size === 1) {  
        resultMessage.textContent = "Selamat! Anda beruntung.";  
        stompImage.classList.add('hidden'); // Hide stomp image if lucky  
    } else {  
        resultMessage.textContent = "Anda kurang beruntung. Tidak dapat duit, tidak dapat roti pula.";  
        stompImage.classList.remove('hidden'); // Show stomp image if not lucky  
    }  
}  
