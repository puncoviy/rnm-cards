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
        
        // newCard.textContent = el.id;
        cardsList.appendChild(newCard);
        newCard.appendChild(newCardIcon);
        newCard.appendChild(newCardImg);
        newCard.appendChild(newCardTextBox);
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