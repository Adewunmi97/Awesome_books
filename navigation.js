const links = document.querySelectorAll('.nav-link');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = link.getAttribute('href').slice('1');

    const currentSection = document.getElementById(id);
    const blockElement = document.querySelector('.block');
    blockElement.classList.remove('block');
    blockElement.classList.add('none');
    currentSection.classList.remove('none');
    currentSection.classList.add('block');
  });
});

function checkTime(i) {
  if (i < 10) {
    i = `0${i}`;
  }
  return i;
}

var DateTime = luxon.DateTime;

function clock() {
  const now = DateTime.local().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  let timeHtml = `<p>${now}</p>`;
  document.querySelector("#time").innerHTML = timeHtml;
}

setInterval(clock, 1000);