// Get the user's name from the URL query parameters  
const urlParams = new URLSearchParams(window.location.search);  
const name = urlParams.get('name');  
document.getElementById('rotiMessage').textContent = `Selamat ${name}, Anda Mendapatkan Roti!`;  
