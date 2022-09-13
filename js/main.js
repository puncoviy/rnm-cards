const burgerBtn = document.querySelector('.burger-box');
const burgerIcon = document.querySelector('.burger-menu');
const menuList = document.querySelector('.header__menu-list');
const menuLinks = document.querySelectorAll('.header__menu-item');

const profileBtn = document.querySelector('.header__profile');
const profileIcon = document.querySelector('.header__profile-icon');
const profileMenu = document.querySelector('.header__profile-link');

const navLink = document.querySelectorAll('.section__navigation-link');

// const cards = document.querySelectorAll('.section__cards-item');
const cardsList = document.querySelector('.section__cards-list');

burgerBtn.addEventListener('click', function(){
    profileIcon.classList.remove('active');
    profileMenu.classList.remove('active');
    burgerIcon.classList.toggle('active');
    menuList.classList.toggle('active');
})

menuLinks.forEach (el => el.addEventListener('click', function(){
    menuLinks.forEach (el => el.classList.remove('active'));
    el.classList.add('active');
    burgerIcon.classList.remove('active');
    menuList.classList.remove('active');
}))

profileBtn.addEventListener('click', function(){
    burgerIcon.classList.remove('active');
    menuList.classList.remove('active');
    profileIcon.classList.toggle('active');
    profileMenu.classList.toggle('active');
})

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        burgerIcon.classList.remove('active');
        menuList.classList.remove('active');
        profileIcon.classList.remove('active');
        profileMenu.classList.remove('active');
    }
})

navLink.forEach (el => el.addEventListener('click', function(event){
    event.preventDefault();
    navLink.forEach (el => el.classList.remove('active'));
    el.classList.add('active');
}))

fetch('https://rickandmortyapi.com/api/character'
    ).then((res) => res.json()
    ).then((characters) => getCharacters(characters));


function getCharacters({info, results}) {
    console.log(info);
    console.log(results);
    results.forEach(function(el){
        let newCard = document.createElement('li');
        newCard.classList.add('section__cards-item');
        newCard.setAttribute('area-expanded', 'false');

        let newCardIcon = document.createElement('span');
        newCardIcon.classList.add('icon');

        let newCardImg =  document.createElement('img');
        newCardImg.classList.add('section__cards-item--img');
        newCardImg.alt = 'avatar';
        newCardImg.src = el.image;

        let newCardTextBox = document.createElement('div');
        newCardTextBox.classList.add('section__cards-item--box');
            let newCardTitle = document.createElement('p');
            newCardTitle.classList.add('section__cards-item--title');
            newCardTitle.textContent = el.name;
            newCardTextBox.appendChild(newCardTitle);

            let newCardSubitle = document.createElement('p');
            newCardSubitle.classList.add('section__cards-item--subtitle');
            newCardSubitle.textContent = el.status + ' - ' + el.species;
            if (el.status === 'Alive') {
                newCardSubitle.classList.add('alive')
            } else if (el.status === 'Dead') {
                newCardSubitle.classList.add('dead')
            } else {
                newCardSubitle.classList.add('unknown')
            }
            newCardTextBox.appendChild(newCardSubitle);

        let newCardContent = document.createElement('div');
        newCardContent.classList.add('section__cards-item--content');
            let newCardContentImg = document.createElement('img');
            newCardContentImg.classList.add('section__cards-item--content-img');
            newCardContentImg.src = el.image;
            newCardContentImg.alt = 'avatar';

            let newCardContentLocation = document.createElement('p');
            newCardContentLocation.classList.add('section__cards-item--content-text');
            newCardContentLocation.textContent = 'Last known location:';

            let newCardContentLocationText = document.createElement('p');
            newCardContentLocationText.classList.add('section__cards-item--content-description');
            newCardContentLocationText.textContent = el.location.name;

            let newCardContentEpisode = document.createElement('p');
            newCardContentEpisode.classList.add('section__cards-item--content-text');
            newCardContentEpisode.textContent = 'First seen in:';

            let newCardContentEpisodeText = document.createElement('p');
            newCardContentEpisodeText.classList.add('section__cards-item--content-description');
            fetch(el.episode[0]
                ).then((res) => res.json()
                ).then((episode) => newCardContentEpisodeText.textContent = episode.name);

            newCardContent.append(newCardContentImg, newCardContentLocation, newCardContentLocationText, newCardContentEpisode, newCardContentEpisodeText)
        
        cardsList.appendChild(newCard);
        newCard.append(newCardIcon, newCardImg, newCardTextBox, newCardContent);
    })

    const cards = document.querySelectorAll('.section__cards-item');

    function toggleAccordion() {
        const cardToggle = this.getAttribute('area-expanded');
        for (i = 0; i < cards.length; i++) {
        cards[i].setAttribute('area-expanded', 'false');
        }
        if (cardToggle == 'false') {
        this.setAttribute('area-expanded', 'true');
        }
    }
    
    cards.forEach(el => el.addEventListener('click', toggleAccordion));
    console.log(cards)
}

// function toggleAccordion() {
//     const cardToggle = this.getAttribute('area-expanded');
//     for (i = 0; i < cards.length; i++) {
//       cards[i].setAttribute('area-expanded', 'false');
//     }
//     if (cardToggle == 'false') {
//       this.setAttribute('area-expanded', 'true');
//     }
//   }
  
// cards.forEach(el => el.addEventListener('click', toggleAccordion));
// console.log(cards)