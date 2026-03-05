// Loading cepat 1.5 detik
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(() => {
    const loading = document.getElementById('loading');
    if (loading) loading.style.display = 'none';
  }, 1500); // 1.5 detik
});

// CS Toggle Functions
function toggleCS() {
  const card = document.getElementById('csCard');
  card.style.display = (card.style.display === 'block') ? 'none' : 'block';
}
function closeCS() {
  document.getElementById('csCard').style.display = 'none';
}
