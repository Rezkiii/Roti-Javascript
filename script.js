let userName = '';  
  
function startGame() {  
    userName = document.getElementById('name').value;  
    if (userName) {  
        document.getElementById('nameInputContainer').style.display = 'none';  
        document.getElementById('welcomeMessage').textContent = `Selamat datang, ${userName}!`;  
        document.getElementById('options').classList.remove('hidden');  
    } else {  
        alert('Silakan masukkan nama Anda.');  
    }  
}  
  
function getRoti() {  
    // Redirect to the roti.html page with the user's name as a query parameter  
    window.location.href = `roti.html?name=${encodeURIComponent(userName)}`;  
}  
  
function getJudi() {  
    // Redirect to the judi.html page with the user's name as a query parameter  
    window.location.href = `judi.html?name=${encodeURIComponent(userName)}`;  
}  
