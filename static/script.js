// IGDB API
const option = {
  method: 'GET',
  headers: {
    'Client-ID': 'vbwxbmene4l1wgm17cfr5c9b60xd9r',
    Authorization: 'Bearer samjeh51ql0q240la094i1pwmakt11',
    'Content-Type': 'application/json',
  },
};

fetch('https://api.twitch.tv/helix/games/top', option)
  .then((response) => response.json())
  .then((data) => {
    const list = data.data;

    list.map((item) => {
      const name = item.name;
      const cover = item.box_art_url
        .replace('{width}', '500')
        .replace('{height}', '600');

      const carousel = `<li class="slide"><img src="${cover}" alt="${name}" class="slide-img"></div>`;

      document.querySelector('ul').innerHTML += carousel;
    });
  })
  .catch((err) => console.error(err));

// Fallback default img slide & slide animation
const imgAlt = document.querySelectorAll('.slide-hidden');
const slideAnimation = document.querySelector('.slide-wrapper');

imgAlt.forEach((slide) => {
  slide.remove();
});

// Reduce motion slide
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

if (!mediaQuery || mediaQuery.matches) {
  slideAnimation.style.animation = 'none';
} else {
  slideAnimation.style.animation = 'slide 60s ease infinite';
}

// Intersection observer
const cards = document.querySelectorAll('.card-item');

const options = {
  root: null,
  threshold: 0.4,
  rootMargin: '0px',
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    entry.target.classList.toggle('slide-top', entry.isIntersecting);
  });
}, options);

cards.forEach((card) => {
  observer.observe(card);
  card.classList.add('hide');
});
