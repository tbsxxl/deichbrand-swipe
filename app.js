let currentIndex = 0;
let likedBands = [];
let bands = [];

fetch('bands.json')
  .then(res => res.json())
  .then(data => {
    bands = data;
    showCard();
  });

function showCard() {
  const container = document.getElementById('card-container');
  container.innerHTML = '';

  if (currentIndex >= bands.length) {
    container.innerHTML = '<p>Alle Bands durchgeswipt!</p>';
    return;
  }

  const band = bands[currentIndex];
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${band.image}" alt="${band.name}">
    <h2>${band.name}</h2>
    <p>${band.genre}</p>
    <div>
      <button onclick="swipe(false)">👎</button>
      <button onclick="swipe(true)">👍</button>
    </div>
  `;
  container.appendChild(card);
}

function swipe(like) {
  if (like) {
    likedBands.push(bands[currentIndex]);
  }
  currentIndex++;
  showCard();
}

document.getElementById('show-liked').addEventListener('click', () => {
  const list = document.getElementById('liked-list');
  list.classList.toggle('hidden');
  list.innerHTML = '<h3>Deine Favoriten:</h3>' +
    likedBands.map(b => `<p>${b.name} (${b.genre})</p>`).join('');
});
