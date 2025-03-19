const goFeatures = document.getElementById('featuresBtn');
const goContact = document.getElementById('contactBtn');
const nextSection = document.getElementById('section1');
const secondSection = document.getElementById('section2');

goFeatures.addEventListener('click', () => {
  nextSection.scrollIntoView({ behavior: 'smooth' });
});

goContact.addEventListener('click', () => {
  secondSection.scrollIntoView({ behavior: 'smooth' });
});

function footerYear() {
  const now = new Date();
  const year = now.getFullYear();

  document.getElementById('footerYear').textContent = year;
}

footerYear();